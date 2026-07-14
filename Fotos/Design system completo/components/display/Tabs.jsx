import React from 'react';

export function Tabs({ tabs = [], value, onChange, onDark }) {
  const [hovered, setHovered] = React.useState(null);
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)') }}>
      {tabs.map((t) => {
        const tab = typeof t === 'string' ? { value: t, label: t } : t;
        const active = tab.value === value;
        const hover = hovered === tab.value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange && onChange(tab.value)}
            onMouseEnter={() => setHovered(tab.value)}
            onMouseLeave={() => setHovered(null)}
            style={{
              all: 'unset', cursor: 'pointer', padding: '10px 2px 12px', marginBottom: -1,
              font: 'var(--text-overline)', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: active
                ? (onDark ? 'var(--accent)' : 'var(--verde-900)')
                : (onDark ? (hover ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)') : (hover ? 'var(--verde-900)' : 'var(--text-muted)')),
              borderBottom: '2px solid ' + (active ? 'var(--accent)' : 'transparent'),
              transition: 'color var(--transition-fast), border-color var(--transition-fast)',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
