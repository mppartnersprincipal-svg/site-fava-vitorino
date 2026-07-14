import { Card, SectionHeading } from '@/components/ds';
import { Reveal } from './Reveal';

export interface Testimonial {
  texto: string;
  nome: string;
  cidadeUf: string;
  servico: string;
}

/**
 * Depoimentos de clientes. Sem depoimentos reais autorizados (PENDING.depoimentos
 * vazio), a seção inteira não é renderizada — nunca exibir depoimento fictício.
 */
export function TestimonialSlots({ titulo, itens }: { titulo: string; itens: readonly Testimonial[] }) {
  if (!itens.length) return null;
  return (
    <>
      <Reveal>
        <SectionHeading overline="Prova social" title={titulo} />
      </Reveal>
      <div className="grid-3" style={{ marginTop: 'var(--space-7)' }}>
        {itens.map((t, i) => (
          <Reveal key={t.nome} delay={(i % 3) * 100}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span aria-hidden="true" style={{ width: 32, height: 2, background: 'var(--accent)' }} />
              <blockquote style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>
                “{t.texto}”
              </blockquote>
              <footer style={{ marginTop: 'auto' }}>
                <div style={{ font: 'var(--text-h3)', color: 'var(--text-title)' }}>{t.nome}</div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
                  {t.cidadeUf} — {t.servico}
                </div>
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </>
  );
}
