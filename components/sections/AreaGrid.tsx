import { Card } from '@/components/ds';
import { Reveal } from './Reveal';
import { SectionIcon } from './icons';
import type { Area } from '@/content/data/areas';

export function AreaGrid({ areas }: { areas: readonly Area[] }) {
  return (
    <div className="grid-3" style={{ marginTop: 'var(--space-7)' }}>
      {areas.map((area, i) => (
        <Reveal key={area.nome} delay={(i % 3) * 100}>
          <Card interactive style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <SectionIcon name={area.icon} />
            <h3
              style={{
                margin: 0,
                font: 'var(--text-h3)',
                letterSpacing: 'var(--tracking-title)',
                textTransform: 'uppercase',
                color: 'var(--text-title)',
              }}
            >
              {area.nome}
            </h3>
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>{area.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
