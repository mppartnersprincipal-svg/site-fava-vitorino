import { Card, SectionHeading } from '@/components/ds';
import { Reveal } from './Reveal';
import { GOOGLE_REVIEWS, type GoogleReview } from '@/content/data/reviews';

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span
      role="img"
      aria-label={`${count} de 5 estrelas`}
      style={{ display: 'inline-flex', gap: 2, color: 'var(--accent)' }}
    >
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.86.56-5.22 4.52L18.18 20 12 16.27 5.82 20l1.64-6.66L2.24 8.82l6.86-.56z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <Card
      className="greviews-card"
      style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stars count={review.estrelas} />
        <GoogleG size={18} />
      </div>
      <blockquote className="greviews-text" style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>
        “{review.texto}”
      </blockquote>
      <footer style={{ marginTop: 'auto' }}>
        <div style={{ font: 'var(--text-h3)', color: 'var(--text-title)' }}>{review.nome}</div>
        <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>Avaliação no Google</div>
      </footer>
    </Card>
  );
}

/**
 * Avaliações do Google Meu Negócio em carrossel automático (marquee CSS puro,
 * sem JS): rolagem contínua, pausa no hover/foco e fallback estático com
 * scroll manual para quem prefere movimento reduzido.
 */
export function GoogleReviews({ titulo }: { titulo: string }) {
  const { meta, itens } = GOOGLE_REVIEWS;
  return (
    <>
      <Reveal>
        <SectionHeading title={titulo} />
      </Reveal>

      <Reveal delay={100}>
        <div
          style={{
            marginTop: 'var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            flexWrap: 'wrap',
          }}
        >
          <GoogleG size={24} />
          <span style={{ font: '600 1.5rem/1 var(--font-title)', color: 'var(--text-title)' }}>{meta.nota}</span>
          <Stars count={5} />
          <a
            href={meta.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ font: 'var(--text-body-md)', color: 'var(--text-muted)', textUnderlineOffset: 3 }}
          >
            {meta.totalAvaliacoes} avaliações no Google
          </a>
        </div>
      </Reveal>

      <div className="greviews-viewport" style={{ marginTop: 'var(--space-7)' }}>
        <div className="greviews-track">
          <ul className="greviews-row" role="list">
            {itens.map((r) => (
              <li key={r.nome}>
                <ReviewCard review={r} />
              </li>
            ))}
          </ul>
          {/* Cópia para o loop contínuo do marquee — invisível para leitores de tela */}
          <ul className="greviews-row" role="list" aria-hidden="true">
            {itens.map((r) => (
              <li key={r.nome}>
                <ReviewCard review={r} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
