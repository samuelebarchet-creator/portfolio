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

/** Static row of client logos: few enough to show all at once, no conveyor. */
export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 py-2">
      {logos.map((logo) => (
        <li key={logo.src} className="flex items-center justify-center h-10 md:h-12">
          <Image
            alt={logo.alt}
            className="select-none h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{ mixBlendMode: 'darken' }}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            sizes="160px"
          />
        </li>
      ))}
    </ul>
  );
}
