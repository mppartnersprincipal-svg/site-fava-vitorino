import React from 'react';

export function Switch({ checked, onChange, label, disabled }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--text-body-md)', color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, userSelect: 'none' }}>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 40, height: 22, borderRadius: 'var(--radius-pill)', boxSizing: 'border-box', flex: 'none',
        background: checked ? 'var(--verde-900)' : 'var(--border-subtle)',
        transition: 'background var(--transition-fast)', position: 'relative',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: checked ? 21 : 3, width: 16, height: 16, borderRadius: '50%',
          background: checked ? 'var(--dourado-500)' : 'var(--branco)',
          transition: 'left var(--transition-fast), background var(--transition-fast)',
        }} />
      </span>
      {label}
    </label>
  );
}
