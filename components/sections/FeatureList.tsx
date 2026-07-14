import { Reveal } from './Reveal';
import { SectionIcon } from './icons';

export interface Feature {
  titulo: string;
  desc: string;
  icon: string;
}

export function FeatureList({ features }: { features: readonly Feature[] }) {
  return (
    <div className="grid-3" style={{ marginTop: 'var(--space-7)', gap: 'var(--space-6)' }}>
      {features.map((f, i) => (
        <Reveal key={f.titulo} delay={(i % 3) * 100}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <SectionIcon name={f.icon} />
            <h3
              style={{
                margin: 0,
                font: 'var(--text-h3)',
                letterSpacing: 'var(--tracking-title)',
                textTransform: 'uppercase',
                color: 'var(--text-title)',
              }}
            >
              {f.titulo}
            </h3>
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>{f.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
