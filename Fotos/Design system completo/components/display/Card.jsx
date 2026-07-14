import React from 'react';

export function Card({ tone = 'light', interactive, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
    dark: { background: 'var(--surface-dark-raised)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
    sand: { background: 'var(--areia-50)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
  };
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-6)',
        boxShadow: interactive && hover ? 'var(--shadow-card)' : 'none',
        transform: 'none',
        cursor: interactive ? 'pointer' : 'default',
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
