'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    );
  }
  return observer;
}

export interface RevealProps {
  children: ReactNode;
  /** Atraso opcional em ms (stagger discreto entre cards). */
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/** Fade-in contido ao entrar no viewport. Observer único compartilhado; sem JS o conteúdo fica visível (noscript no layout). */
export function Reveal({ children, delay, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : 'reveal'}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
