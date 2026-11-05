const MAX = { name: 120, email: 200, company: 200, website: 300, message: 4000 };

function field(body: Record<string, unknown>, key: keyof typeof MAX) {
  const value = body[key];
  return typeof value === 'string' ? value.trim().slice(0, MAX[key]) : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'invalid' }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field, and get a fake success
  if (body.url2) return Response.json({ ok: true });

  const name = field(body, 'name');
  const email = field(body, 'email');
  const company = field(body, 'company');
  const website = field(body, 'website');
  const message = field(body, 'message');
  const source = body.source === 'audit-geo' ? 'audit-geo' : 'contatti';

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.privacy !== true) {
    return Response.json({ error: 'invalid' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json({ error: 'unavailable' }, { status: 503 });
  }

  const subject = source === 'audit-geo' ? 'Richiesta audit GEO' : 'Nuovo contatto dal sito';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: process.env.LEAD_TO_EMAIL ?? 'info@samuelebarchet.com',
      reply_to: email,
      subject: `${subject}: ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Azienda: ${company || '-'}`,
        `Sito: ${website || '-'}`,
        `Origine: ${source}`,
        '',
        message || '(nessun messaggio)',
      ].join('\n'),
    }),
  });

  if (!res.ok) {
    console.error('Lead email failed', res.status);
    return Response.json({ error: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
