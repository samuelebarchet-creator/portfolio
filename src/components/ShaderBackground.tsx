'use client';

import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

export default function ShaderBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      {/* Desktop: WebGL — GPU, leggero, un'unica istanza per tutto il sito */}
      <div className="hidden md:block w-full h-full">
        <ShaderGradientCanvas
          style={{ width: '100%', height: '100%' }}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="waterPlane"
            uSpeed={0.12}
            uStrength={2.5}
            uDensity={1.2}
            uFrequency={5}
            uAmplitude={0}
            color1="#c8d9c0"
            color2="#F5F0E8"
            color3="#dde8d5"
            shader="defaults"
            positionX={0}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={0}
            cDistance={3.6}
            cPolarAngle={90}
            cAzimuthAngle={180}
            cameraZoom={1}
            lightType="3d"
            envPreset="city"
            reflection={0.1}
            brightness={1.05}
            grain="on"
          />
        </ShaderGradientCanvas>
      </div>

      {/* Mobile: gradiente CSS statico, zero GPU */}
      <div
        className="block md:hidden w-full h-full"
        style={{ background: 'linear-gradient(160deg, #d6e4d0 0%, #F5F0E8 60%, #e8edd9 100%)' }}
      />
    </div>
  );
}
