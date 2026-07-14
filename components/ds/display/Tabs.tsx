'use client';

import { useState } from 'react';

export type TabItem = string | { value: string; label: string };

export interface TabsProps {
  tabs?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
}

export function Tabs({ tabs = [], value, onChange, onDark }: TabsProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)') }}>
      {tabs.map((t) => {
        const tab = typeof t === 'string' ? { value: t, label: t } : t;
        const active = tab.value === value;
        const hover = hovered === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
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
