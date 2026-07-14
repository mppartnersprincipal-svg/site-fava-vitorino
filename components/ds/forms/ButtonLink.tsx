'use client';

import Link from 'next/link';
import { useState, type AnchorHTMLAttributes } from 'react';
import type { ButtonVariant } from './Button';

const sizes = {
  sm: { padding: '8px 16px', fontSize: '12px' },
  md: { padding: '12px 24px', fontSize: '13px' },
  lg: { padding: '16px 32px', fontSize: '14px' },
} as const;

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
}

/** CTA com aparência de Button do DS, renderizado como link (interno via next/link, externo via <a>). */
export function ButtonLink({ href, variant = 'primary', size = 'md', children, style, ...rest }: ButtonLinkProps) {
  const [hover, setHover] = useState(false);
  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: hover ? 'var(--verde-800)' : 'var(--verde-900)',
      color: 'var(--areia-100)',
      border: '1px solid transparent',
    },
    gold: {
      background: hover ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--verde-900)',
      border: '1px solid transparent',
    },
    outline: {
      background: hover ? 'rgba(8,50,36,0.06)' : 'transparent',
      color: 'var(--verde-900)',
      border: '1px solid var(--verde-900)',
    },
    'outline-on-dark': {
      background: hover ? 'rgba(239,235,229,0.12)' : 'transparent',
      color: 'var(--areia-100)',
      border: '1px solid var(--border-on-dark)',
    },
    ghost: {
      background: hover ? 'rgba(8,50,36,0.06)' : 'transparent',
      color: 'var(--verde-900)',
      border: '1px solid transparent',
    },
  };
  const styles: React.CSSProperties = {
    fontFamily: 'var(--font-title)',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    transition: 'background var(--transition-fast), color var(--transition-fast)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };
  const isInternal = href.startsWith('/') || href.startsWith('#');
  const events = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  if (isInternal) {
    return (
      <Link href={href} {...rest} {...events} style={styles}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest} {...events} style={styles}>
      {children}
    </a>
  );
}
