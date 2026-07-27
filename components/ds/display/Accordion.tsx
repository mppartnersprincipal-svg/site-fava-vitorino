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
  /** Exibe numeração dourada ("01", "02"…) antes de cada pergunta. */
  numbered?: boolean;
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

export function Accordion({ items = [], single = true, numbered = false }: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const baseId = useId();
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(single ? [] : prev);
      if (!prev.has(i)) next.add(i);
      return next;
    });
  };
  // Recuo do conteúdo alinhado ao início da pergunta (número + gap quando numerado)
  const contentPadLeft = numbered ? 24 + 26 + 16 : 24;
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
              borderLeft: '3px solid ' + (isOpen ? 'var(--accent)' : 'var(--border-subtle)'),
              borderRadius: 'var(--radius-lg)',
              boxShadow: isOpen ? 'var(--shadow-card)' : 'none',
              transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
              overflow: 'hidden',
            }}
          >
            <h3 style={{ margin: 0 }}>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                style={{
                  all: 'unset', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 16,
                  width: '100%', padding: '20px 24px', cursor: 'pointer',
                }}
              >
                {numbered && (
                  <span
                    aria-hidden="true"
                    style={{
                      flex: 'none',
                      width: 26,
                      font: '600 0.8125rem/1 var(--font-title)',
                      letterSpacing: '0.06em',
                      color: isOpen ? 'var(--accent-text)' : 'var(--text-muted)',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                )}
                <span
                  style={{
                    flex: 1,
                    font: '600 1rem/1.45 var(--font-title)',
                    color: isOpen ? 'var(--text-title)' : 'var(--text-body)',
                    transition: 'color var(--transition-fast)',
                  }}
                >
                  {it.title}
                </span>
                <PlusMinusIcon open={isOpen} />
              </button>
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 240ms ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  style={{
                    padding: `4px 24px 22px ${contentPadLeft}px`,
                    font: 'var(--text-body-md)',
                    color: 'var(--text-muted)',
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'visibility 240ms',
                  }}
                >
                  {it.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
