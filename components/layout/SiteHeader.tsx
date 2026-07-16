'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SiteWordmark } from './SiteWordmark';
import { MobileMenu } from './MobileMenu';
import { NAV_LINKS } from './nav-links';
import { useScrolled } from './useScrolled';
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';
import { trackLead } from '@/lib/analytics';

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled(8);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header
      style={{
        background: 'var(--areia-100)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'box-shadow var(--transition-fast)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <SiteWordmark />
        </Link>

        <nav className="site-nav-desktop" aria-label="Navegação principal" style={{ alignItems: 'center', gap: 'var(--space-6)' }}>
          {NAV_LINKS.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                onMouseEnter={() => setHovered(l.href)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  font: 'var(--text-overline)', letterSpacing: '0.14em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: active || hovered === l.href ? 'var(--verde-900)' : 'var(--text-muted)',
                  borderBottom: '2px solid ' + (active ? 'var(--accent)' : 'transparent'),
                  paddingBottom: 4,
                  transition: 'color var(--transition-fast)',
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('whatsapp_click', { location: 'header' })}
            onMouseEnter={() => setHovered('cta')}
            onMouseLeave={() => setHovered(null)}
            style={{
              font: '600 12px/1 var(--font-title)', letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none',
              background: hovered === 'cta' ? 'var(--accent-strong)' : 'var(--accent)',
              color: 'var(--verde-900)',
              padding: '10px 20px', borderRadius: 'var(--radius-pill)',
              transition: 'background var(--transition-fast)',
              whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            <WhatsAppIcon size={16} />
            Fale com o escritório
          </a>
        </nav>

        <button
          className="site-menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            minWidth: 44, minHeight: 44,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M2 5h18M2 11h18M2 17h18" stroke="var(--verde-900)" strokeWidth="1.8" />
          </svg>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
