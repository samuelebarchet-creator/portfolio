import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#3D5C35',
          borderRadius: '90px',
        }}
      >
        <svg width="110" height="110" viewBox="0 0 32 32">
          <path d="M3,26 L13,9 L20,18 L25,9 L30,26 Z" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
