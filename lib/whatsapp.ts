import { SITE } from '@/content/data/site';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site do Fava e Vitorino e gostaria de uma orientação.';

/** Monta a URL do WhatsApp do escritório, com mensagem pré-preenchida opcional. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
