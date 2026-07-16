'use client';

import { useScrolled } from './useScrolled';
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { trackLead } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';

/** Botão flutuante de WhatsApp — aparece após ~400px de scroll. */
export function WhatsAppFloat() {
  const visible = useScrolled(400);
  return (
    <a
      href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => trackLead('whatsapp_click', { location: 'float' })}
      style={{
        position: 'fixed', right: 20, bottom: 20, zIndex: 900,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--accent)', color: 'var(--verde-900)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'var(--shadow-card)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.8)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity var(--transition-fast), transform var(--transition-fast)',
      }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
