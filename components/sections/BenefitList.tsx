import { Reveal } from './Reveal';

export interface Benefit {
  titulo: string;
  desc: string;
}

/** Benefícios numerados (01, 02…) sobre superfície verde — padrão "Como atuamos" do DS. */
export function BenefitList({ itens }: { itens: readonly Benefit[] }) {
  return (
    <div className="grid-2" style={{ marginTop: 'var(--space-7)', gap: 'var(--space-6)' }}>
      {itens.map((b, i) => (
        <Reveal key={b.titulo} delay={(i % 2) * 100}>
          <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
            <span
              aria-hidden="true"
              style={{
                font: '600 1.5rem/1 var(--font-title)',
                color: 'var(--accent)',
                letterSpacing: '0.04em',
                flex: 'none',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3
                style={{
                  margin: 0,
                  font: 'var(--text-h3)',
                  letterSpacing: 'var(--tracking-title)',
                  textTransform: 'uppercase',
                  color: 'var(--text-on-dark)',
                }}
              >
                {b.titulo}
              </h3>
              <p style={{ margin: '8px 0 0', font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)' }}>
                {b.desc}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
