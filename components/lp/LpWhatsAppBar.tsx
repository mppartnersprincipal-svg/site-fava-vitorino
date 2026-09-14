'use client';

import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';
import { useWhatsAppLink } from './useWhatsAppLink';

export interface LpWhatsAppBarProps {
  phone: string;
  message: string;
  label: string;
  ariaLabel: string;
  location: string;
}

/**
 * Botão fixo de WhatsApp: barra de largura total no rodapé do celular
 * (visível enquanto a pessoa rola, sem depender de scroll) e pílula no canto
 * inferior direito no desktop. O recuo do conteúdo vem de `.lp`.
 */
export function LpWhatsAppBar({ phone, message, label, ariaLabel, location }: LpWhatsAppBarProps) {
  const { href, trackClick } = useWhatsAppLink(phone, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackClick(location)}
      className="lp-bar"
    >
      <WhatsAppIcon size={22} />
      {label}
    </a>
  );
}
