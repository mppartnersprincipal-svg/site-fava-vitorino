import React from 'react';

export function SectionHeading({ overline, title, lead, align = 'left', onDark }) {
  const alignments = { left: 'flex-start', center: 'center' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: alignments[align], textAlign: align, gap: 'var(--space-4)', maxWidth: 720 }}>
      {overline && (
        <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: onDark ? 'var(--accent)' : 'var(--accent-strong)' }}>
          {overline}
        </span>
      )}
      <h2 style={{ margin: 0, font: 'var(--text-h1)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark)' : 'var(--text-title)' }}>
        {title}
      </h2>
      <span style={{ width: 48, height: 2, background: 'var(--accent)', flex: 'none' }} />
      {lead && (
        <p style={{ margin: 0, font: 'var(--text-body-lg)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{lead}</p>
      )}
    </div>
  );
}
