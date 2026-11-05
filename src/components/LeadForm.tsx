'use client';

import { useState } from 'react';
import { about } from '@/lib/about';
import { trackLead } from '@/lib/track';

const PRIVACY_URL = 'https://www.iubenda.com/privacy-policy/60384143';

const labelClass = 'flex flex-col gap-2 text-ink text-sm';
const inputClass = 'w-full bg-transparent px-4 py-3 text-ink outline-none focus:border-green';
const inputStyle = { border: '1px solid rgba(61,92,53,0.3)', fontFamily: 'var(--font-barlow)', fontSize: '1rem' };

interface LeadFormProps {
  source: 'contatti' | 'audit-geo';
  messageLabel?: string;
  submitLabel?: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'failed';

export default function LeadForm({
  source,
  messageLabel = 'Di cosa hai bisogno?',
  submitLabel = 'Invia la richiesta',
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [fallbackHref, setFallbackHref] = useState('');
  const isAudit = source === 'audit-geo';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '');

    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: value('name'),
          email: value('email'),
          company: value('company'),
          website: value('website'),
          message: value('message'),
          privacy: data.get('privacy') === 'on',
          url2: value('url2'),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackLead(`form_${source}`);
      setStatus('sent');
    } catch {
      // The request must never be lost: offer the same content as a prefilled email
      const body = [value('name'), value('company'), value('website'), value('message')].filter(Boolean).join('\n');
      setFallbackHref(`mailto:${about.email}?subject=${encodeURIComponent(isAudit ? 'Richiesta audit GEO' : 'Contatto dal sito')}&body=${encodeURIComponent(body)}`);
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className="text-ink leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.1rem' }}>
        Richiesta ricevuta, grazie. Ti rispondo entro 24 ore.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" style={{ fontFamily: 'var(--font-barlow)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className={labelClass}>
          Nome e cognome *
          <input name="name" required maxLength={120} autoComplete="name" className={inputClass} style={inputStyle} />
        </label>
        <label className={labelClass}>
          Email *
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} style={inputStyle} />
        </label>
        <label className={labelClass}>
          Azienda{isAudit ? ' *' : ''}
          <input name="company" required={isAudit} maxLength={200} autoComplete="organization" className={inputClass} style={inputStyle} />
        </label>
        <label className={labelClass}>
          Sito web{isAudit ? ' *' : ''}
          <input name="website" required={isAudit} maxLength={300} inputMode="url" placeholder="www.tuazienda.it" className={inputClass} style={inputStyle} />
        </label>
      </div>
      <label className={labelClass}>
        {messageLabel}
        <textarea name="message" rows={4} maxLength={4000} className={inputClass} style={inputStyle} />
      </label>
      {/* Honeypot: hidden from people and from assistive tech */}
      <input name="url2" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" />
      <label className="flex items-start gap-3 text-ink-dim text-sm leading-relaxed">
        <input name="privacy" type="checkbox" required className="mt-1" />
        <span>
          Ho letto la{' '}
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            privacy policy
          </a>{' '}
          e accetto di essere ricontattato per questa richiesta. *
        </span>
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="self-start px-10 py-4 bg-green text-bg font-condensed uppercase tracking-[0.28em] text-sm hover:bg-green-mid transition-colors duration-300 disabled:opacity-60"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {status === 'sending' ? 'Invio in corso…' : submitLabel}
      </button>
      {status === 'failed' && (
        <p role="alert" className="text-ink text-sm">
          L&apos;invio non è riuscito.{' '}
          <a href={fallbackHref} className="underline underline-offset-2">
            Mandami la richiesta via email
          </a>
          : il testo è già pronto.
        </p>
      )}
    </form>
  );
}
