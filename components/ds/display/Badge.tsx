import type { ReactNode } from 'react';

export type BadgeTone = 'gold' | 'green' | 'sand';

export interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

export function Badge({ tone = 'gold', children }: BadgeProps) {
  const tones: Record<BadgeTone, React.CSSProperties> = {
    gold: { background: 'var(--accent-soft)', color: 'var(--verde-900)' },
    green: { background: 'var(--verde-900)', color: 'var(--areia-100)' },
    sand: { background: 'var(--areia-100)', color: 'var(--verde-900)', border: '1px solid var(--border-subtle)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      font: 'var(--text-overline)', letterSpacing: '0.14em', textTransform: 'uppercase',
      padding: '4px 12px', borderRadius: '999px', ...tones[tone],
    }}>
      {children}
    </span>
  );
}

export interface TagProps {
  children: ReactNode;
  onRemove?: () => void;
}

export function Tag({ children, onRemove }: TagProps) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      font: 'var(--text-body-sm)', color: 'var(--verde-900)',
      background: 'var(--branco)', border: '1px solid var(--border-subtle)',
      padding: '5px 12px', borderRadius: '999px',
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remover" style={{ all: 'unset', cursor: 'pointer', lineHeight: 0 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 2l6 6M8 2l-6 6" stroke="var(--text-muted)" strokeWidth="1.4" /></svg>
        </button>
      )}
    </span>
  );
}
