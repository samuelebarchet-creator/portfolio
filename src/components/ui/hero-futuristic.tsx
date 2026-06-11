'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, Suspense } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from 'three/tsl';

/* Portfolio palette:
   --green      #3D5C35  → rgb(61,92,53)   → vec3(0.239, 0.361, 0.208)
   --green-mid  #6A8A5E  → rgb(106,138,94) → vec3(0.416, 0.541, 0.369)
   --green-light #8FB87A → rgb(143,184,122)→ vec3(0.561, 0.722, 0.478) */

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP   = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

/* ─── Post-processing: bloom + green scan line ─────────────────────────── */
const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new (THREE as any).PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(uScanProgress)));

    /* ← green instead of red */
    const greenOverlay = vec3(0.239, 0.561, 0.208)
      .mul(oneMinus(scanLine))
      .mul(0.45);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, greenOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);
    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    (render as any).renderAsync();
  }, 1);

  return null;
};

/* ─── Scene: depth-parallax mesh with green dot glow ──────────────────── */
const WIDTH  = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);

  const { material, uniforms } = useMemo(() => {
    const uPointer  = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const tDepthMap = texture(depthMap);
    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(0.01))
    );

    const aspect  = float(WIDTH).div(HEIGHT);
    const tUv     = vec2(uv().x.mul(aspect), uv().y);
    const tiling  = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot  = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const flow = oneMinus(
      smoothstep(0, 0.02, abs(tDepthMap.r.sub(uProgress)))
    );

    /* ← botanical green glow instead of red */
    const mask  = dot.mul(flow).mul(vec3(0.0, 8.0, 1.5));
    const final = blendScreen(tMap, mask);

    const mat = new (THREE as any).MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return { material: mat, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  /* Animate scan progress */
  useFrame(({ clock }) => {
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;

    if (meshRef.current) {
      const mat = (meshRef.current as any).material;
      if (mat && 'opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, 1, 0.04);
      }
    }
  });

  /* Pointer parallax */
  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh
      ref={meshRef}
      scale={[w * 0.4, h * 0.4, 1]}
      material={material}
    >
      <planeGeometry />
    </mesh>
  );
};

/* ─── Background-only export (used by Hero.tsx) ────────────────────────── */
export const WebGPUBackground = () => (
  <Canvas
    flat
    gl={async (props) => {
      const renderer = new (THREE as any).WebGPURenderer(props as any);
      await renderer.init();
      return renderer;
    }}
  >
    <Suspense fallback={null}>
      <PostProcessing fullScreenEffect />
      <Scene />
    </Suspense>
  </Canvas>
);

/* ─── Full standalone component (demo) ─────────────────────────────────── */
export default WebGPUBackground;
