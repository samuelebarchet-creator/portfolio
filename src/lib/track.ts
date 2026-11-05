declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a dataLayer event; GTM maps it to GA4 and respects Consent Mode. */
export function track(event: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackLead(lead_method: string) {
  track('generate_lead', { lead_method });
}
