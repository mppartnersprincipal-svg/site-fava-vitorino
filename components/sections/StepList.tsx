import { Reveal } from './Reveal';

export interface Step {
  titulo: string;
  desc: string;
}

/** Timeline vertical de passos numerados sobre superfície verde, com fio dourado. */
export function StepList({ passos }: { passos: readonly Step[] }) {
  return (
    <ol style={{ margin: 'var(--space-7) 0 0', padding: 0, listStyle: 'none', maxWidth: 720 }}>
      {passos.map((p, i) => {
        const last = i === passos.length - 1;
        return (
          <li key={p.titulo} style={{ display: 'flex', gap: 'var(--space-5)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none', width: 40 }}>
              <span
                style={{
                  font: '600 0.9375rem/1 var(--font-title)',
                  color: 'var(--verde-900)',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {!last && (
                <span aria-hidden="true" style={{ width: 2, flex: 1, minHeight: 32, background: 'var(--border-on-dark)' }} />
              )}
            </div>
            <Reveal style={{ paddingBottom: last ? 0 : 'var(--space-6)' }}>
              <h3
                style={{
                  margin: '10px 0 0',
                  font: 'var(--text-h3)',
                  letterSpacing: 'var(--tracking-title)',
                  textTransform: 'uppercase',
                  color: 'var(--text-on-dark)',
                }}
              >
                {p.titulo}
              </h3>
              <p style={{ margin: '8px 0 0', font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)' }}>{p.desc}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
