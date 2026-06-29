'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

const CAL_LINK = 'samuele-barchet-2mo12t/30min';
const CAL_ORIGIN = 'https://cal.eu';
const CAL_NS = 'booking';

export function useCalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NS, embedJsUrl: `${CAL_ORIGIN}/embed/embed.js` });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
}

interface CalButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function CalButton({ className, style, children }: CalButtonProps) {
  useCalInit();

  return (
    <button
      data-cal-namespace={CAL_NS}
      data-cal-link={CAL_LINK}
      data-cal-origin={CAL_ORIGIN}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
