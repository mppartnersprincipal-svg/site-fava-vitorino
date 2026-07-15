import { Reveal } from './Reveal';
import { StatValue } from './StatValue';

export interface Stat {
  valor: string;
  label: string;
}

/** Faixa verde com indicadores de credibilidade (número dourado + label). */
export function StatsBand({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="grid-3" style={{ gap: 'var(--space-7)' }}>
      {stats.map((s, i) => (
        <Reveal key={s.valor} delay={i * 100}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span
              style={{
                font: '600 clamp(1.75rem, 3vw, 2.5rem)/1.1 var(--font-title)',
                letterSpacing: 'var(--tracking-title)',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              <StatValue valor={s.valor} />
            </span>
            <span aria-hidden="true" style={{ width: 32, height: 2, background: 'var(--accent)', opacity: 0.6 }} />
            <span style={{ font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)', maxWidth: 300 }}>
              {s.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
