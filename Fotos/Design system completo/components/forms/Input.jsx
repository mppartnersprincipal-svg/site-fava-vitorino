import React from 'react';

export function Field({ label, hint, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', font: 'var(--text-body-sm)', color: 'var(--text-body)' }}>
      {label && (
        <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-title)' }}>
          {label}
        </span>
      )}
      {children}
      {hint && <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}

const baseInput = (focus) => ({
  font: 'var(--text-body-md)',
  fontFamily: 'var(--font-body)',
  color: 'var(--text-body)',
  background: 'var(--branco)',
  border: '1px solid ' + (focus ? 'var(--accent-strong)' : 'var(--border-subtle)'),
  borderRadius: 'var(--radius-sm)',
  padding: '12px 14px',
  outline: 'none',
  boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
  transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
  width: '100%',
  boxSizing: 'border-box',
});

export function Input({ label, hint, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const el = (
    <input {...rest} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...baseInput(focus), ...style }} />
  );
  return label || hint ? <Field label={label} hint={hint}>{el}</Field> : el;
}

export function Textarea({ label, hint, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const el = (
    <textarea {...rest} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...baseInput(focus), resize: 'vertical', ...style }} />
  );
  return label || hint ? <Field label={label} hint={hint}>{el}</Field> : el;
}
