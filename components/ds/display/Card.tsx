import type { HTMLAttributes } from 'react';

export type CardTone = 'light' | 'dark' | 'sand';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  interactive?: boolean;
}

const tones: Record<CardTone, React.CSSProperties> = {
  light: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
  dark: { background: 'var(--surface-dark-raised)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
  sand: { background: 'var(--areia-50)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
};

/** Card do DS. Hover (tone interativo) via classe CSS .card-hover — server component. */
export function Card({ tone = 'light', interactive, children, style, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={interactive ? `card-hover${className ? ` ${className}` : ''}` : className}
      style={{
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-6)',
        boxShadow: 'none',
        transition: 'box-shadow var(--transition-fast)',
        boxSizing: 'border-box',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
