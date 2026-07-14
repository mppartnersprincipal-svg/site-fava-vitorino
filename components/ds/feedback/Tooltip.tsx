'use client';

import { useId, useState, type ReactNode } from 'react';

export interface TooltipProps {
  text: ReactNode;
  children: ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const id = useId();
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      aria-describedby={show ? id : undefined}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span id={id} role="tooltip" style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--verde-900)', color: 'var(--areia-100)', font: 'var(--text-body-sm)',
          padding: '6px 12px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 50,
          boxShadow: 'var(--shadow-card)',
        }}>
          {text}
        </span>
      )}
    </span>
  );
}
