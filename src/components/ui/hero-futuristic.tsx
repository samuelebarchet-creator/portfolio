'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, Suspense } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
} from 'three/tsl';

extend(THREE as any);

/* ─── Post-processing: bloom + full-width green scan line ──────────────── */
const PostProcessing = ({
  strength = 0.9,
  threshold = 0.7,
}: {
  strength?: number;
  threshold?: number;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 } as any);

  const render = useMemo(() => {
    const postProcessing = new (THREE as any).PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const uvY = uv().y;
    const scanLine = smoothstep(0, float(0.04), abs(uvY.sub(uScanProgress)));
    const greenOverlay = vec3(0.239, 0.561, 0.208)
      .mul(oneMinus(scanLine))
      .mul(0.28);

    const final = scenePassColor.add(greenOverlay).add(bloomPass);
    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold]);

  useFrame(({ clock }) => {
    progressRef.current.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    (render as any).renderAsync();
  }, 1);

  return null;
};

/* ─── Scene: full-screen procedural dot grid with green glow ───────────── */
const Scene = () => {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  const { material, uniforms } = useMemo(() => {
    const uProgress = uniform(0);

    /* Aspect-correct UVs so dots stay circular across the full screen */
    const aspect  = float(viewport.width / Math.max(viewport.height, 0.001));
    const tUv     = vec2(uv().x.mul(aspect), uv().y);
    const tiling  = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot  = float(smoothstep(0.5, 0.48, dist)).mul(brightness);

    /* Scan wave: glowing band sweeping up/down */
    const flow = oneMinus(
      smoothstep(0, float(0.06), abs(uv().y.sub(uProgress)))
    );

    /* Botanical green on dark — no portrait image */
    const mask = dot.mul(flow).mul(vec3(0.0, 8.0, 1.5));

    const mat = new (THREE as any).MeshBasicNodeMaterial({ colorNode: mask });

    return { material: mat, uniforms: { uProgress } };
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
  });

  return (
    /* Full viewport: edge-to-edge green dot field */
    <mesh
      ref={meshRef}
      scale={[viewport.width, viewport.height, 1]}
      material={material}
    >
      <planeGeometry />
    </mesh>
  );
};

/* ─── Export ────────────────────────────────────────────────────────────── */
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
      <PostProcessing />
      <Scene />
    </Suspense>
  </Canvas>
);

export default WebGPUBackground;
