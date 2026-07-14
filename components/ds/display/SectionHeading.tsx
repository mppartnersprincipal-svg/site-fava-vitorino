import type { ReactNode } from 'react';

export interface SectionHeadingProps {
  overline?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  /** Nível do heading para hierarquia correta por página (default: h2). */
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({ overline, title, lead, align = 'left', onDark, as: Heading = 'h2' }: SectionHeadingProps) {
  const alignments = { left: 'flex-start', center: 'center' } as const;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: alignments[align], textAlign: align, gap: 'var(--space-4)', maxWidth: 720 }}>
      {overline && (
        <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: onDark ? 'var(--accent)' : 'var(--accent-strong)' }}>
          {overline}
        </span>
      )}
      <Heading style={{ margin: 0, font: Heading === 'h1' ? 'var(--text-display)' : 'var(--text-h1)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark)' : 'var(--text-title)' }}>
        {title}
      </Heading>
      <span style={{ width: 48, height: 2, background: 'var(--accent)', flex: 'none' }} />
      {lead && (
        <p style={{ margin: 0, font: 'var(--text-body-lg)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{lead}</p>
      )}
    </div>
  );
}
