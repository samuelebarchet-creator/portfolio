'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactForm(data: {
  nome: string;
  cognome: string;
  azienda: string;
  email: string;
  messaggio: string;
}): Promise<ContactResult> {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Configurazione email mancante.' };
  }

  const { nome, cognome, azienda, email, messaggio } = data;

  if (!nome || !cognome || !email || !messaggio) {
    return { success: false, error: 'Compila tutti i campi obbligatori.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'info@samuelebarchet.com',
      replyTo: email,
      subject: `Nuovo contatto da ${nome} ${cognome}${azienda ? ` — ${azienda}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #3D5C35; border-bottom: 2px solid #3D5C35; padding-bottom: 8px;">
            Nuovo messaggio dal portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px 0; color: #666; width: 100px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${nome} ${cognome}</td></tr>
            ${azienda ? `<tr><td style="padding: 8px 0; color: #666;">Azienda</td><td style="padding: 8px 0; font-weight: 600;">${azienda}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3D5C35;">${email}</a></td></tr>
          </table>
          <div style="background: #f5f5f5; padding: 20px; border-left: 3px solid #3D5C35; margin-top: 12px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${messaggio.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Rispondi direttamente a questa email per contattare ${nome}.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Errore nell\'invio. Riprova o scrivi direttamente a info@samuelebarchet.com' };
  }
}
