import Image from 'next/image';
import type { ReactNode } from 'react';

export interface HeroProps {
  overline?: string;
  /** Frase curta acima do título, em tamanho intermediário (entre o display e o body). */
  tagline?: string;
  title: string;
  lead: string;
  /** CTAs (normalmente WhatsAppCta + ButtonLink outline-on-dark). */
  actions?: ReactNode;
}

/** Hero verde-900 com símbolo da marca em marca d'água (padrão do protótipo do DS). */
export function Hero({ overline, tagline, title, lead, actions }: HeroProps) {
  return (
    <section
      style={{
        background: 'var(--surface-dark)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/logos/logo-simbolo-transparente.png"
        alt=""
        aria-hidden="true"
        width={567}
        height={510}
        loading="lazy"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(46vw, 520px)',
          height: 'auto',
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      />
      <div
        className="container"
        style={{
          position: 'relative',
          paddingBlock: 'clamp(64px, 10vw, 128px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-5)',
          maxWidth: 'var(--container-max)',
        }}
      >
        {overline && (
          <span
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {overline}
          </span>
        )}
        {tagline && (
          <p
            style={{
              margin: 0,
              font: '500 clamp(1.125rem, 2.2vw, 1.5rem)/1.45 var(--font-title)',
              color: 'var(--accent-soft)',
              maxWidth: 640,
            }}
          >
            {tagline}
          </p>
        )}
        <h1
          style={{
            margin: 0,
            font: 'var(--text-display)',
            letterSpacing: 'var(--tracking-title)',
            textTransform: 'uppercase',
            color: 'var(--text-on-dark)',
            maxWidth: 820,
          }}
        >
          {title}
        </h1>
        <span aria-hidden="true" style={{ width: 48, height: 2, background: 'var(--accent)' }} />
        <p style={{ margin: 0, font: 'var(--text-body-lg)', color: 'var(--text-on-dark-muted)', maxWidth: 640 }}>
          {lead}
        </p>
        {actions && (
          <div
            className="cta-actions"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}
          >
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
