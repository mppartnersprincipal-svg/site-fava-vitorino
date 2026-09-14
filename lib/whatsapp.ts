import { SITE } from '@/content/data/site';
import { AUTISMO } from '@/content/data/autismo';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site do Fava e Vitorino e gostaria de uma orientação.';

/**
 * Número e mensagem do WhatsApp para os botões globais (header, menu mobile)
 * conforme a página. A página /autismo atende num número próprio — o briefing
 * pede que TODOS os botões dela levem para esse número.
 */
export function whatsappForPath(pathname: string): { phone: string; message: string; suffix: string } {
  if (pathname.startsWith(AUTISMO.meta.path)) {
    return { phone: AUTISMO.meta.whatsapp, message: AUTISMO.hero.mensagem, suffix: '_autismo' };
  }
  return { phone: SITE.whatsapp, message: WHATSAPP_DEFAULT_MESSAGE, suffix: '' };
}

/**
 * Monta a URL do WhatsApp, com mensagem pré-preenchida opcional.
 * `phone` só é informado por landing pages de campanha que atendem em um
 * número próprio (ex.: /autismo); o padrão é o número do escritório.
 */
export function whatsappUrl(message?: string, phone: string = SITE.whatsapp): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
