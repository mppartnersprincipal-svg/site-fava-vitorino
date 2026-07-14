import type { ReactNode } from 'react';
import { Card } from '@/components/ds';
import { Reveal } from './Reveal';

export interface CtaSectionProps {
  titulo: string;
  texto: string;
  /** Botões (WhatsAppCta gold + secundário outline-on-dark). */
  actions: ReactNode;
}

/** CTA final em card verde escuro sobre fundo areia (evita verde colado no footer). */
export function CtaSection({ titulo, texto, actions }: CtaSectionProps) {
  return (
    <Reveal>
      <Card
        tone="dark"
        style={{
          background: 'var(--surface-dark)',
          padding: 'clamp(40px, 6vw, 72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'var(--space-5)',
        }}
      >
        <h2
          style={{
            margin: 0,
            font: 'var(--text-h1)',
            letterSpacing: 'var(--tracking-title)',
            textTransform: 'uppercase',
            color: 'var(--text-on-dark)',
            maxWidth: 720,
          }}
        >
          {titulo}
        </h2>
        <span aria-hidden="true" style={{ width: 48, height: 2, background: 'var(--accent)' }} />
        <p style={{ margin: 0, font: 'var(--text-body-lg)', color: 'var(--text-on-dark-muted)', maxWidth: 560 }}>
          {texto}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            justifyContent: 'center',
            marginTop: 'var(--space-2)',
          }}
        >
          {actions}
        </div>
      </Card>
    </Reveal>
  );
}
