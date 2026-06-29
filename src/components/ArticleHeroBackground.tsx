'use client';

import { useEffect, useState } from 'react';
import { Warp } from '@paper-design/shaders-react';

export default function ArticleHeroBackground() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 768px)');
    setShow(mq.matches);
  }, []);

  return (
    <>
      {show && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <Warp
            style={{ width: '100%', height: '100%' }}
            proportion={0.44}
            softness={1}
            distortion={0.32}
            swirl={0.68}
            swirlIterations={10}
            shape="checks"
            shapeScale={0.14}
            scale={1}
            rotation={0}
            speed={0.55}
            colors={['#0d1a09', '#3D5C35', '#6A8A5E', '#C85E28']}
          />
        </div>
      )}
      {/* Warm orange glow — stesso overlay della homepage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,113,58,0.18) 0%, transparent 70%)',
        }}
      />
    </>
  );
}
