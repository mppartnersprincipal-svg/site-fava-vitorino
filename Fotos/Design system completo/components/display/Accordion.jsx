import React from 'react';

export function Accordion({ items = [], single = true }) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = (i) => {
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
        return (
          <div key={i} style={{ borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <button onClick={() => toggle(i)} style={{
              all: 'unset', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              width: '100%', padding: '18px 22px', cursor: 'pointer',
              font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase',
              color: isOpen ? 'var(--text-title)' : 'var(--text-body)',
            }}>
              {it.title}
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ flex: 'none', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }}>
                <path d="M2 4l4 4 4-4" fill="none" stroke="var(--accent-strong)" strokeWidth="1.5" />
              </svg>
            </button>
            {isOpen && (
              <div style={{ padding: '0 22px 20px', font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>{it.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
