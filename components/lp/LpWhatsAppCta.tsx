'use client';

import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';
import { useWhatsAppLink } from './useWhatsAppLink';

export interface LpWhatsAppCtaProps {
  /** Número da campanha (só dígitos, com DDI). */
  phone: string;
  /** Mensagem pré-preenchida — muda por posição na página. */
  message: string;
  /** Identificador do ponto de clique no GA4 (ex.: 'hero_autismo'). */
  location: string;
  children: React.ReactNode;
  /** Ocupa a largura da coluna (padrão no celular). */
  block?: boolean;
}

/** Botão de WhatsApp da landing page — dourado, com evento por posição. */
export function LpWhatsAppCta({ phone, message, location, children, block = true }: LpWhatsAppCtaProps) {
  const { href, trackClick } = useWhatsAppLink(phone, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(location)}
      className="btn btn-lg btn-gold"
      style={block ? { width: '100%', maxWidth: 420, borderRadius: 'var(--radius-lg)' } : undefined}
    >
      <WhatsAppIcon size={20} />
      {children}
    </a>
  );
}
