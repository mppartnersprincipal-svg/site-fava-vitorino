'use client';

import { useState, type ReactNode, type SelectHTMLAttributes } from 'react';
import { Field } from './Input';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  hint?: ReactNode;
  options?: SelectOption[];
}

export function Select({ label, hint, options = [], style, ...rest }: SelectProps) {
  const [focus, setFocus] = useState(false);
  const el = (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: 'var(--text-body-md)', fontFamily: 'var(--font-body)', color: 'var(--text-body)',
          background: 'var(--branco)', appearance: 'none', WebkitAppearance: 'none',
          border: '1px solid ' + (focus ? 'var(--accent-strong)' : 'var(--border-subtle)'),
          borderRadius: 'var(--radius-sm)', padding: '12px 40px 12px 14px', outline: 'none',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
          width: '100%', boxSizing: 'border-box', cursor: 'pointer', ...style,
        }}
      >
        {options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <path d="M2 4l4 4 4-4" fill="none" stroke="var(--verde-900)" strokeWidth="1.5" />
      </svg>
    </div>
  );
  return label || hint ? <Field label={label} hint={hint}>{el}</Field> : el;
}
