import Image from 'next/image';
import { Badge, Card } from '@/components/ds';
import { Reveal } from './Reveal';

export interface TeamMember {
  nome: string;
  cargo: string;
  oab: string;
  foto: string;
  fotoAlt: string;
  bio: readonly string[];
  formacao: string;
  areas: string;
}

const labelStyle: React.CSSProperties = {
  font: 'var(--text-overline)',
  letterSpacing: 'var(--tracking-overline)',
  textTransform: 'uppercase',
  color: 'var(--accent-strong)',
};

export function TeamGrid({ membros }: { membros: readonly TeamMember[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', marginTop: 'var(--space-7)' }}>
      {membros.map((m) => (
        <Reveal key={m.nome}>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div className="split" style={{ gap: 0, alignItems: 'stretch' }}>
              <div style={{ position: 'relative', minHeight: 420 }}>
                <Image
                  src={m.foto}
                  alt={m.fotoAlt}
                  fill
                  sizes="(min-width: 900px) 520px, 100vw"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-7)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <Badge>{m.cargo}</Badge>
                  <Badge tone="sand">{m.oab}</Badge>
                </div>
                <h3
                  style={{
                    margin: 0,
                    font: 'var(--text-h2)',
                    letterSpacing: 'var(--tracking-title)',
                    textTransform: 'uppercase',
                    color: 'var(--text-title)',
                  }}
                >
                  {m.nome}
                </h3>
                <span aria-hidden="true" style={{ width: 32, height: 2, background: 'var(--accent)' }} />
                {m.bio.map((p) => (
                  <p key={p.slice(0, 24)} style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>
                    {p}
                  </p>
                ))}
                <div>
                  <span style={labelStyle}>Formação</span>
                  <p style={{ margin: '6px 0 0', font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{m.formacao}</p>
                </div>
                <div>
                  <span style={labelStyle}>Áreas de atuação</span>
                  <p style={{ margin: '6px 0 0', font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{m.areas}</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
