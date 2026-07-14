import React from 'react';

const sizes = {
  sm: { padding: '8px 16px', fontSize: '12px' },
  md: { padding: '12px 24px', fontSize: '13px' },
  lg: { padding: '16px 32px', fontSize: '14px' },
};

export function Button({ variant = 'primary', size = 'md', disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
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
  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-title)',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--transition-fast), color var(--transition-fast)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
