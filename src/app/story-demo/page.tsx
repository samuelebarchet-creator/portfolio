import type { Metadata } from 'next';
import Link from 'next/link';
import StoryScroll, { StorySection } from '@/components/ui/story-scroll';

export const metadata: Metadata = {
  title: 'Story scroll — anteprima',
  robots: { index: false, follow: false },
};

/* Anteprima dell'effetto "story scroll" adattato allo stile del sito.
   Rotta non linkata e non indicizzata: solo per valutare il movimento. */

const label = {
  fontFamily: 'var(--font-barlow-condensed)',
} as const;

const display = {
  fontFamily: 'var(--font-playfair)',
  fontSize: 'clamp(3rem, 11vw, 13rem)',
  lineHeight: 0.85,
  letterSpacing: '-0.03em',
} as const;

const body = {
  fontFamily: 'var(--font-barlow)',
  fontSize: 'clamp(1rem, 2.2vw, 1.9rem)',
} as const;

export default function StoryDemoPage() {
  return (
    <StoryScroll aria-label="Anteprima story scroll">
      {/* 01 */}
      <StorySection aria-label="Approccio" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
        <p className="text-xs uppercase tracking-[0.4em] text-green" style={label}>
          01 · Approccio
        </p>
        <hr className="border-none border-t border-white/15" />
        <h2 className="font-black italic uppercase" style={display}>
          Strategia<br />prima degli<br />strumenti
        </h2>
        <hr className="border-none border-t border-white/15" />
        <p className="mt-auto max-w-[46ch] leading-relaxed text-bg/65" style={body}>
          Prima di parlare di social, advertising o contenuti, serve capire chi sei,
          a chi parli e quale spazio vuoi occupare nella mente delle persone.
        </p>
      </StorySection>

      {/* 02 */}
      <StorySection aria-label="Metodo" style={{ background: 'var(--green)', color: '#fff' }}>
        <p className="text-xs uppercase tracking-[0.4em] text-white/80" style={label}>
          02 · Metodo
        </p>
        <hr className="border-none border-t border-white/25" />
        <h2 className="font-black italic uppercase" style={display}>
          Idee<br />che si fanno<br />capire
        </h2>
        <hr className="border-none border-t border-white/25" />
        <p className="max-w-[46ch] leading-relaxed text-white/85" style={body}>
          Analisi, creatività e pragmatismo per trasformare idee complesse in
          messaggi chiari e obiettivi concreti.
        </p>
        <hr className="border-none border-t border-white/25" />
        <p className="mt-auto ml-auto max-w-[40ch] text-right leading-relaxed text-white/85" style={body}>
          Comunicare non significa parlare, significa farsi capire.
        </p>
      </StorySection>

      {/* 03 */}
      <StorySection aria-label="Risultati" style={{ background: 'var(--bg-alt)', color: 'var(--ink)' }}>
        <p className="text-xs uppercase tracking-[0.4em] text-green" style={label}>
          03 · Risultati
        </p>
        <hr className="border-none border-t border-ink/15" />
        <h2 className="font-black italic uppercase" style={display}>
          Numeri<br />che<br />contano
        </h2>
        <hr className="border-none border-t border-ink/15" />
        <div className="flex flex-wrap gap-[4vw]">
          {[
            { v: '8', l: 'Brand seguiti in settori diversi' },
            { v: '120k+', l: 'Copertura organica su singolo contenuto' },
            { v: '−73%', l: 'CPL vs benchmark su acquisizione' },
          ].map(({ v, l }) => (
            <div key={v} className="min-w-[180px] flex-1">
              <p className="font-black italic text-green leading-none mb-2" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
                {v}
              </p>
              <p className="uppercase tracking-[0.15em] text-ink-faint" style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.8rem' }}>
                {l}
              </p>
            </div>
          ))}
        </div>
      </StorySection>

      {/* 04 */}
      <StorySection aria-label="Insieme" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
        <p className="text-xs uppercase tracking-[0.4em] text-green" style={label}>
          04 · Insieme
        </p>
        <hr className="border-none border-t border-white/15" />
        <h2 className="font-black italic uppercase" style={display}>
          Costruiamo<br />qualcosa<br />insieme
        </h2>
        <hr className="border-none border-t border-white/15" />
        <div className="mt-auto flex items-end justify-between gap-8">
          <p className="max-w-[40ch] leading-relaxed text-bg/65" style={body}>
            Perché qualcuno dovrebbe scegliere proprio te? Partiamo da qui.
          </p>
          <Link
            href="/contatti"
            className="shrink-0 uppercase tracking-[0.3em] text-xs border-b border-green text-green pb-1 hover:text-white hover:border-white transition-colors duration-300"
            style={label}
          >
            Parliamone →
          </Link>
        </div>
      </StorySection>
    </StoryScroll>
  );
}
