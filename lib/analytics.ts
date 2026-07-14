type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Evento genérico — GA4 (gtag) + Meta Pixel (trackCustom). No-op sem os scripts. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
  if (typeof window.fbq === 'function') window.fbq('trackCustom', name, params);
}

/** Conversão principal (clique WhatsApp / envio de formulário) — GA4 + evento padrão Lead do Pixel. */
export function trackLead(name: string, params?: EventParams) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
  if (typeof window.fbq === 'function') window.fbq('track', 'Lead', params);
}
