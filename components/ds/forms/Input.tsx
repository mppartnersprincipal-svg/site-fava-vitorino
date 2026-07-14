'use client';

import {
  useState,
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react';

export interface FieldProps {
  label?: ReactNode;
  hint?: ReactNode;
  children: ReactNode;
}

export function Field({ label, hint, children }: FieldProps) {
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

const baseInput = (focus: boolean): React.CSSProperties => ({
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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  hint?: ReactNode;
}

export function Input({ label, hint, style, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  const el = (
    <input {...rest} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...baseInput(focus), ...style }} />
  );
  return label || hint ? <Field label={label} hint={hint}>{el}</Field> : el;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  hint?: ReactNode;
}

export function Textarea({ label, hint, rows = 4, style, ...rest }: TextareaProps) {
  const [focus, setFocus] = useState(false);
  const el = (
    <textarea {...rest} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...baseInput(focus), resize: 'vertical', ...style }} />
  );
  return label || hint ? <Field label={label} hint={hint}>{el}</Field> : el;
}
