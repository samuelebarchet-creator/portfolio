import Image from 'next/image';

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Rendered height in px on desktop, tuned per logo for equal optical weight. */
  displayHeight: number;
};

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
};

/** Static row of client logos in one ink tone; no plates, no conveyor. */
export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20 py-2">
      {logos.map((logo) => (
        <li key={logo.src} className="flex items-center justify-center">
          <Image
            alt={logo.alt}
            className="select-none w-auto opacity-75 hover:opacity-100 transition-opacity duration-300 h-[calc(var(--logo-h)*0.78)] md:h-[var(--logo-h)]"
            style={{ ['--logo-h' as string]: `${logo.displayHeight}px` }}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            sizes="240px"
          />
        </li>
      ))}
    </ul>
  );
}
