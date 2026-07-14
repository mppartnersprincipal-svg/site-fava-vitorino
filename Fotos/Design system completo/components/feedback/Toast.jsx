import React from 'react';

export function Toast({ tone = 'success', title, children, onClose }) {
  const tones = {
    success: 'var(--feedback-success)',
    error: 'var(--feedback-error)',
    info: 'var(--feedback-info)',
  };
  return (
    <div style={{
      display: 'flex', gap: 14, alignItems: 'flex-start', maxWidth: 420,
      background: 'var(--verde-900)', color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-dialog)', padding: '16px 18px',
    }}>
      <span style={{ width: 3, alignSelf: 'stretch', borderRadius: 2, background: tone === 'error' ? '#d98a76' : 'var(--accent)', flex: 'none' }} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ font: 'var(--text-overline)', letterSpacing: '0.14em', textTransform: 'uppercase', color: tone === 'error' ? '#d98a76' : 'var(--accent)', marginBottom: 4 }}>{title}</div>}
        <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Fechar" style={{ all: 'unset', cursor: 'pointer', padding: 4, lineHeight: 0 }}>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1L1 9" stroke="var(--text-on-dark-muted)" strokeWidth="1.4" /></svg>
        </button>
      )}
    </div>
  );
}
