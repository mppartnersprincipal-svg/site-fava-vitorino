import React from 'react';

export function Tooltip({ text, children }) {
  const [show, setShow] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--verde-900)', color: 'var(--areia-100)', font: 'var(--text-body-sm)',
          padding: '6px 12px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 50,
          boxShadow: 'var(--shadow-card)',
        }}>
          {text}
        </span>
      )}
    </span>
  );
}
