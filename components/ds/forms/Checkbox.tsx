'use client';

import type { ReactNode } from 'react';

function boxStyle(checked: boolean | undefined, round: boolean): React.CSSProperties {
  return {
    width: 18, height: 18, flex: 'none', boxSizing: 'border-box',
    borderRadius: round ? '50%' : 'var(--radius-sm)',
    border: '1.5px solid ' + (checked ? 'var(--verde-900)' : 'var(--border-subtle)'),
    background: checked && !round ? 'var(--verde-900)' : 'var(--branco)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all var(--transition-fast)',
  };
}

const rowStyle = (disabled: boolean | undefined): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', gap: 10,
  font: 'var(--text-body-md)', color: 'var(--text-body)',
  cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, userSelect: 'none',
});

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: ReactNode;
  disabled?: boolean;
}

export function Checkbox({ checked, onChange, label, disabled }: CheckboxProps) {
  return (
    <label style={rowStyle(disabled)}>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={boxStyle(checked, false)}>
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 4.5-6" fill="none" stroke="var(--dourado-500)" strokeWidth="1.8" /></svg>
        )}
      </span>
      {label}
    </label>
  );
}

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string | undefined) => void;
  label?: ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
}

export function Radio({ checked, onChange, label, disabled, name, value }: RadioProps) {
  return (
    <label style={rowStyle(disabled)}>
      <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={boxStyle(checked, true)}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--verde-900)' }} />}
      </span>
      {label}
    </label>
  );
}
