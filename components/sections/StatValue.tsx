'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1400;
const NUMBER_RE = /\d[\d.]*/;

/** Ease-out cúbico — desacelera no final, sem bounce (regra da marca). */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Valor de estatística com contagem crescente ao entrar na tela.
 * Anima só o trecho numérico do valor ("+1.000" conta 0→1.000 mantendo o "+");
 * valores sem número ("Visual Law") renderizam direto. Sem JS ou com
 * prefers-reduced-motion, mostra o valor final imediatamente.
 */
export function StatValue({ valor }: { valor: string }) {
  const match = valor.match(NUMBER_RE);
  const target = match ? parseInt(match[0].replace(/\./g, ''), 10) : null;
  const grouped = match ? match[0].includes('.') : false;
  const prefix = match ? valor.slice(0, match.index) : '';
  const suffix = match ? valor.slice((match.index ?? 0) + match[0].length) : '';

  const ref = useRef<HTMLSpanElement>(null);
  // SSR renderiza o valor final (SEO / noscript); o efeito zera antes de animar.
  const [display, setDisplay] = useState(valor);

  useEffect(() => {
    if (target === null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      prefix + (grouped ? n.toLocaleString('pt-BR') : String(n)) + suffix;

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(format(Math.round(easeOutCubic(t) * target)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    setDisplay(format(0));
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {display}
      </span>
      <span className="visually-hidden">{valor}</span>
    </>
  );
}
