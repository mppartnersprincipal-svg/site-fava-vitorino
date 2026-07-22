'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { NAV_LINKS } from './nav-links';
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';
import { trackLead } from '@/lib/analytics';

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Painel de navegação mobile em tela cheia (verde-900), com foco contido, Esc e scroll-lock. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panel) {
        const focusables = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel?.querySelector<HTMLElement>('button, a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      style={{
        position: 'fixed', inset: 0, zIndex: 1100,
        background: 'var(--verde-900)', color: 'var(--text-on-dark)',
        display: 'flex', flexDirection: 'column',
        padding: 'var(--space-5)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onClose}
          aria-label="Fechar menu"
          style={{
            all: 'unset', cursor: 'pointer', minWidth: 44, minHeight: 44,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 3l14 14M17 3L3 17" stroke="var(--areia-100)" strokeWidth="1.8" />
          </svg>
        </button>
      </div>
      <nav
        aria-label="Navegação principal"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-5)', flex: 1 }}
      >
        {NAV_LINKS.map((l) => {
          const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              style={{
                font: 'var(--text-h2)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase',
                textDecoration: 'none', padding: '12px 0', minHeight: 44,
                display: 'flex', alignItems: 'center', gap: 12,
                color: active ? 'var(--accent)' : 'var(--text-on-dark)',
                borderBottom: '1px solid var(--border-on-dark)',
              }}
            >
              {active && <span aria-hidden="true" style={{ width: 24, height: 2, background: 'var(--accent)' }} />}
              {l.label}
            </Link>
          );
        })}
      </nav>
      <a
        href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackLead('whatsapp_click', { location: 'menu_mobile' });
          onClose();
        }}
        style={{
          font: '600 14px/1 var(--font-title)', letterSpacing: '0.12em', textTransform: 'uppercase',
          textDecoration: 'none', textAlign: 'center',
          background: 'var(--accent)', color: 'var(--verde-900)',
          padding: '16px 32px', borderRadius: 'var(--radius-pill)',
          marginBottom: 'var(--space-5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}
      >
        <WhatsAppIcon size={18} />
        Fale com nosso time
      </a>
    </div>
  );
}
