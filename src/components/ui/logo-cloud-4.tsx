import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative w-full py-6 overflow-hidden">
      <InfiniteSlider gap={64} speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center h-10 md:h-12"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none select-none h-full w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: 'multiply' }}
              loading="lazy"
              src={logo.src}
            />
          </div>
        ))}
      </InfiniteSlider>

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
