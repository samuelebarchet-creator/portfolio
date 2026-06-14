import Image from 'next/image';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative w-full py-6 overflow-hidden">
      <div
        className="flex items-center w-max"
        style={{
          animation: 'marquee 30s linear infinite',
          willChange: 'transform',
          gap: '4rem',
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-10 md:h-12 shrink-0"
          >
            <Image
              alt={logo.alt}
              className="pointer-events-none select-none h-full w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: 'multiply' }}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              sizes="200px"
            />
          </div>
        ))}
      </div>

      <ProgressiveBlur
        blurIntensity={0.8}
        className="pointer-events-none absolute top-0 left-0 h-full w-32 md:w-48"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={0.8}
        className="pointer-events-none absolute top-0 right-0 h-full w-32 md:w-48"
        direction="right"
      />
    </div>
  );
}
