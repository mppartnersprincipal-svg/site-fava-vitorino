import type { CSSProperties, ReactNode } from 'react';

export interface SectionProps {
  /** areia = fundo de página; verde = superfície escura. Regra da marca: nunca dois verdes seguidos. */
  tone?: 'areia' | 'verde';
  id?: string;
  children: ReactNode;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
}

export function Section({ tone = 'areia', id, children, style, containerStyle }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background: tone === 'verde' ? 'var(--surface-dark)' : 'var(--surface-page)',
        color: tone === 'verde' ? 'var(--text-on-dark)' : 'var(--text-body)',
        ...style,
      }}
    >
      <div
        className="container"
        style={{ paddingBlock: 'clamp(48px, 8vw, 96px)', ...containerStyle }}
      >
        {children}
      </div>
    </section>
  );
}
