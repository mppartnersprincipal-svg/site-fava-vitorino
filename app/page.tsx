import { SITE } from '@/content/data/site';

// Página provisória da Fase 1 — substituída pela Home completa na Fase 4.
export default function Home() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--space-8)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 640 }}>
        <p
          style={{
            font: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            textTransform: 'uppercase',
            color: 'var(--accent-strong)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Em construção
        </p>
        <h1
          style={{
            font: 'var(--text-display)',
            letterSpacing: 'var(--tracking-title)',
            textTransform: 'uppercase',
            color: 'var(--text-title)',
            marginBottom: 'var(--space-5)',
          }}
        >
          {SITE.nome}
        </h1>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-muted)' }}>
          {SITE.tagline}
        </p>
      </div>
    </div>
  );
}
