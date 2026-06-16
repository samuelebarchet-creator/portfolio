'use client';

import { Warp } from '@paper-design/shaders-react';

/** Deep-water Warp shader background — tuned to the site's dark teal/navy palette. */
export default function WarpOcean() {
  return (
    <Warp
      style={{ height: '100%', width: '100%' }}
      proportion={0.45}
      softness={1}
      distortion={0.35}
      swirl={0.7}
      swirlIterations={10}
      shape="checks"
      shapeScale={0.16}
      scale={1}
      rotation={0}
      speed={0.6}
      colors={['hsl(195, 70%, 8%)', 'hsl(175, 55%, 22%)', 'hsl(185, 60%, 14%)', 'hsl(165, 45%, 30%)']}
    />
  );
}
