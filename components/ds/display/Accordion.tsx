'use client';

import { useId, useState, type ReactNode } from 'react';

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Abre um item por vez (default true). */
  single?: boolean;
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
    <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--branco)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        const headerId = `${baseId}-header-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i} style={{ borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <h3 style={{ margin: 0 }}>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                style={{
                  all: 'unset', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  width: '100%', padding: '18px 22px', cursor: 'pointer',
                  font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase',
                  color: isOpen ? 'var(--text-title)' : 'var(--text-body)',
                }}
              >
                {it.title}
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ flex: 'none', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }}>
                  <path d="M2 4l4 4 4-4" fill="none" stroke="var(--accent-text)" strokeWidth="1.5" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId} style={{ padding: '0 22px 20px', font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
