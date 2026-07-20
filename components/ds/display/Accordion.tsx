'use client';

import { useId, useState, type CSSProperties, type ReactNode } from 'react';

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Abre um item por vez (default true). */
  single?: boolean;
}

const iconBar: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 12,
  height: 2,
  margin: '-1px 0 0 -6px',
  borderRadius: 1,
  background: 'currentColor',
};

/** Ícone +/−: a barra vertical gira e se deita sobre a horizontal ao abrir. */
function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flex: 'none',
        position: 'relative',
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: '1px solid ' + (open ? 'var(--accent)' : 'var(--border-subtle)'),
        background: open ? 'var(--accent)' : 'transparent',
        color: open ? 'var(--verde-900)' : 'var(--accent-text)',
        transition: 'background var(--transition-fast), border-color var(--transition-fast)',
      }}
    >
      <span style={iconBar} />
      <span
        style={{
          ...iconBar,
          transform: open ? 'rotate(180deg)' : 'rotate(90deg)',
          transition: 'transform var(--transition-fast)',
        }}
      />
    </span>
  );
}

export function Accordion({ items = [], single = true }: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const baseId = useId();
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(single ? [] : prev);
      if (!prev.has(i)) next.add(i);
      return next;
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        const headerId = `${baseId}-header-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={i}
            style={{
              background: 'var(--branco)',
              border: '1px solid ' + (isOpen ? 'var(--accent)' : 'var(--border-subtle)'),
              borderRadius: 'var(--radius-md)',
              transition: 'border-color var(--transition-fast)',
            }}
          >
            <h3 style={{ margin: 0 }}>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                style={{
                  all: 'unset', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                  width: '100%', padding: '22px 24px', cursor: 'pointer',
                  font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase',
                  color: isOpen ? 'var(--text-title)' : 'var(--text-body)',
                }}
              >
                {it.title}
                <PlusMinusIcon open={isOpen} />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId} style={{ padding: '0 24px 24px', font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
