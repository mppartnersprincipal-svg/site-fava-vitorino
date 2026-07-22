import type { Metadata } from 'next';
import { Card, SectionHeading } from '@/components/ds';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Reveal } from '@/components/sections/Reveal';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import { WhatsAppCta } from '@/components/sections/WhatsAppCta';
import { SOBRE } from '@/content/data/sobre';

export const metadata: Metadata = {
  title: 'Sobre o Fava e Vitorino Advocacia — Quem somos e como atuamos',
  description:
    'Conheça a história, a equipe e os valores do Fava e Vitorino Advocacia. Escritório fundado por Nathalia Fava e Jessica Vitorino com foco em advocacia estratégica e humanizada.',
};

export default function SobrePage() {
  return (
    <>
      <Hero
        overline="Quem somos"
        title={SOBRE.hero.titulo}
        lead={SOBRE.hero.paragrafos[0]}
      />

      <Section tone="areia">
        <div className="split" style={{ alignItems: 'start' }}>
          <Reveal>
            <SectionHeading
              overline="Nossa história"
              title="Um escritório moderno, estratégico e próximo"
            />
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {SOBRE.hero.paragrafos.slice(1).map((p) => (
                <p key={p.slice(0, 24)} style={{ margin: 0, font: 'var(--text-body-lg)', color: 'var(--text-body)' }}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="verde">
        <Reveal>
          <SectionHeading overline="Fundamentos" title="Missão, visão e valores" onDark />
        </Reveal>
        <div className="grid-3" style={{ marginTop: 'var(--space-7)', alignItems: 'stretch' }}>
          <Reveal>
            <Card tone="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <h3 style={{ margin: 0, font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Missão
              </h3>
              <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)' }}>{SOBRE.mvv.missao}</p>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card tone="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <h3 style={{ margin: 0, font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Visão
              </h3>
              <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)' }}>{SOBRE.mvv.visao}</p>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card tone="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <h3 style={{ margin: 0, font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Valores
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SOBRE.mvv.valores.map((v) => (
                  <li key={v} style={{ font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>
                    {v}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="areia">
        <Reveal>
          <SectionHeading
            overline="Equipe"
            title="As sócias-fundadoras"
            lead="Sócias-fundadoras que unem técnica jurídica, tecnologia e atendimento próximo."
          />
        </Reveal>
        <TeamGrid membros={SOBRE.equipe} />

        <div style={{ marginTop: 'var(--space-9)' }}>
          <Reveal>
            <SectionHeading
              overline="Nosso time"
              title="Equipe do escritório"
              lead="Advogadas que atuam lado a lado com as sócias — técnica sólida, dedicação e atenção individualizada a cada cliente."
            />
          </Reveal>
        </div>
        <TeamGrid membros={SOBRE.time} />

        <div style={{ marginTop: 'var(--space-9)' }}>
          <CtaSection
            titulo={SOBRE.cta.titulo}
            texto={SOBRE.cta.texto}
            actions={
              <WhatsAppCta message={SOBRE.cta.whatsappMessage} location="cta_sobre" variant="gold" size="lg">
                Atendimento 24 horas
              </WhatsAppCta>
            }
          />
        </div>
      </Section>
    </>
  );
}
