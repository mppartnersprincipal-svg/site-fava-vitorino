import React from 'react';
import { Button } from '../../components/forms/Button.jsx';

export function SiteWordmark({ onDark, height = 34 }) {
  if (onDark) return <img src="../../assets/logo-horizontal-transparente.png" alt="Fava e Vitorino Advocacia" style={{ height }} />;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, flex: 'none' }}>
      <span style={{ background: 'var(--verde-900)', borderRadius: 'var(--radius-sm)', padding: 6, display: 'inline-flex' }}>
        <img src="../../assets/logo-simbolo-transparente.png" alt="" style={{ height: height - 10 }} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ font: '600 15px/1.2 var(--font-title)', letterSpacing: '0.14em', color: 'var(--accent-strong)', whiteSpace: 'nowrap' }}>FAVA E VITORINO</span>
        <span style={{ font: '500 9px/1.4 var(--font-title)', letterSpacing: '0.3em', color: 'var(--verde-900)', whiteSpace: 'nowrap' }}>ADVOCACIA</span>
      </span>
    </span>
  );
}

export function SiteHeader({ route, onNavigate }) {
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'areas', label: 'Áreas de atuação' },
    { id: 'contato', label: 'Contato' },
  ];
  const [hovered, setHovered] = React.useState(null);
  return (
    <header style={{ background: 'var(--areia-100)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ textDecoration: 'none' }}>
          <SiteWordmark />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          {links.map((l) => (
            <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              onMouseEnter={() => setHovered(l.id)} onMouseLeave={() => setHovered(null)}
              style={{
                font: 'var(--text-overline)', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
                color: route === l.id ? 'var(--verde-900)' : hovered === l.id ? 'var(--verde-900)' : 'var(--text-muted)',
                borderBottom: '2px solid ' + (route === l.id ? 'var(--accent)' : 'transparent'),
                paddingBottom: 4, transition: 'color var(--transition-fast)',
              }}>
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" onClick={() => onNavigate('contato')}>Fale com o escritório</Button>
        </nav>
      </div>
    </header>
  );
}
