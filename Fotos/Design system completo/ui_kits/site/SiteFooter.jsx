import React from 'react';

export function SiteFooter({ onNavigate }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 10 };
  const link = { font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', textDecoration: 'none', cursor: 'pointer' };
  return (
    <footer style={{ background: 'var(--verde-900)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48 }}>
        <div style={col}>
          <img src="../../assets/logo-horizontal-transparente.png" alt="Fava e Vitorino Advocacia" style={{ height: 40, alignSelf: 'flex-start' }} />
          <p style={{ margin: '12px 0 0', font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', maxWidth: 340 }}>
            Estratégia jurídica para decisões patrimoniais — do contrato ao contencioso.
          </p>
        </div>
        <div style={col}>
          <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--accent)' }}>Navegação</span>
          <a style={link} onClick={() => onNavigate('home')}>Início</a>
          <a style={link} onClick={() => onNavigate('areas')}>Áreas de atuação</a>
          <a style={link} onClick={() => onNavigate('contato')}>Contato</a>
        </div>
        <div style={col}>
          <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--accent)' }}>Contato</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>contato@favaevitorino.adv.br</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>(41) 99999-9999</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-on-dark)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '16px 24px', font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 Fava e Vitorino Advocacia</span>
          <span>OAB/PR</span>
        </div>
      </div>
    </footer>
  );
}
