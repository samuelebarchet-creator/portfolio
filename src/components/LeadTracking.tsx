'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

const CHANNELS: [string, string][] = [
  ['a[href^="mailto:"]', 'email'],
  ['a[href^="tel:"]', 'phone'],
  ['a[href^="https://wa.me/"]', 'whatsapp'],
  ['[data-cal-link]', 'cal'],
];

/* Delegated so every contact link on the site is covered, current and future */
export default function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const channel = CHANNELS.find(([selector]) => target?.closest(selector));
      if (channel) track('contact_click', { contact_channel: channel[1] });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
