import React from 'react';

export function Dialog({ open, onClose, title, children, footer, width = 480 }) {
  if (!open) return null;
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(8, 50, 36, 0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
    >
      <div role="dialog" aria-modal="true" style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-dialog)', width: '100%', maxWidth: width,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px 0' }}>
          <h3 style={{ margin: 0, font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-title)' }}>{title}</h3>
          {onClose && (
            <button onClick={onClose} aria-label="Fechar" style={{ all: 'unset', cursor: 'pointer', padding: 6, lineHeight: 0 }}>
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2l10 10M12 2L2 12" stroke="var(--text-muted)" strokeWidth="1.5" /></svg>
            </button>
          )}
        </div>
        <div style={{ width: 32, height: 2, background: 'var(--accent)', margin: '12px 28px 0' }} />
        <div style={{ padding: '16px 28px 24px', font: 'var(--text-body-md)', color: 'var(--text-body)' }}>{children}</div>
        {footer && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, padding: '0 28px 24px' }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
