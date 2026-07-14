import { Reveal } from './Reveal';

export interface PainPoint {
  titulo: string;
  desc: string;
}

/** Lista de dores em duas colunas, com fio dourado como marcador (padrão da marca). */
export function PainPoints({ itens }: { itens: readonly PainPoint[] }) {
  return (
    <div className="grid-2" style={{ marginTop: 'var(--space-7)', gap: 'var(--space-6)' }}>
      {itens.map((item, i) => (
        <Reveal key={item.titulo} delay={(i % 2) * 100}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
            <span
              aria-hidden="true"
              style={{ width: 24, height: 2, background: 'var(--accent)', flex: 'none', marginTop: 12 }}
            />
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-title)', fontWeight: 600 }}>{item.titulo}</strong>
              {' — '}
              {item.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
