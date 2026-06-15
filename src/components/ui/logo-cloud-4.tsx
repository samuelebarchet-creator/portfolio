import Image from 'next/image';

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
  /* 4× duplication = no visible seam even on wide screens */
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="relative w-full py-6 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div
        className="flex items-center w-max"
        style={{
          animation: 'marquee 30s linear infinite',
          willChange: 'transform',
          gap: '4rem',
        }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-10 md:h-12 shrink-0"
          >
            <Image
              alt={logo.alt}
              className="pointer-events-none select-none h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: 'darken' }}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
