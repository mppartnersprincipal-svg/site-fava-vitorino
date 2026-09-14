import { SITE } from '@/content/data/site';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site do Fava e Vitorino e gostaria de uma orientação.';

/**
 * Monta a URL do WhatsApp, com mensagem pré-preenchida opcional.
 * `phone` só é informado por landing pages de campanha que atendem em um
 * número próprio (ex.: /autismo); o padrão é o número do escritório.
 */
export function whatsappUrl(message?: string, phone: string = SITE.whatsapp): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
