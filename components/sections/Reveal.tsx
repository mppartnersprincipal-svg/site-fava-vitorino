import type { CSSProperties, ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  /** Atraso opcional em ms (stagger discreto entre cards). */
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Marca o bloco para fade-in ao entrar no viewport. Server component puro —
 * a observação acontece no RevealObserver único montado no layout.
 */
export function Reveal({ children, delay, style, className }: RevealProps) {
  return (
    <div
      className={className ? `reveal ${className}` : 'reveal'}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
