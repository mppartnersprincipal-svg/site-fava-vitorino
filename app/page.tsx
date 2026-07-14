import Image from 'next/image';
import { Badge, SectionHeading } from '@/components/ds';
import { ButtonLink } from '@/components/ds/forms/ButtonLink';
import { JsonLd } from '@/components/analytics/JsonLd';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { AreaGrid } from '@/components/sections/AreaGrid';
import { FeatureList } from '@/components/sections/FeatureList';
import { StatsBand } from '@/components/sections/StatsBand';
import { TestimonialSlots } from '@/components/sections/TestimonialSlots';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Reveal } from '@/components/sections/Reveal';
import { WhatsAppCta } from '@/components/sections/WhatsAppCta';
import { faqPageSchema } from '@/lib/schema';
import { HOME } from '@/content/data/home';
import { AREAS } from '@/content/data/areas';
import { SITE } from '@/content/data/site';

export default function Home() {
  // FAQ com resposta pendente fica fora do JSON-LD (não emitir placeholder para buscadores).
  const faqSchema = faqPageSchema(HOME.faq.itens.filter((f) => !f.answer.includes('[PENDENTE')));

  return (
    <>
      <Hero
        overline="Fava e Vitorino Advocacia"
        title={HOME.hero.headline}
        lead={HOME.hero.sub}
        actions={
          <>
            <WhatsAppCta message={HOME.hero.whatsappMessage} location="hero_home" variant="gold" size="lg">
              {HOME.hero.ctaPrimario}
            </WhatsAppCta>
            <ButtonLink href="#areas" variant="outline-on-dark" size="lg">
              {HOME.hero.ctaSecundario}
            </ButtonLink>
          </>
        }
      />

      <Section tone="areia" id="areas">
        <Reveal>
          <SectionHeading overline="Especialidades" title={HOME.areas.titulo} lead={HOME.areas.sub} />
        </Reveal>
        <AreaGrid areas={AREAS} />
      </Section>

      <Section tone="verde">
        <div className="split">
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
              <SectionHeading overline="O escritório" title={HOME.quemSomos.titulo} onDark />
              {HOME.quemSomos.paragrafos.map((p) => (
                <p key={p.slice(0, 24)} style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-on-dark-muted)' }}>
                  {p}
                </p>
              ))}
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <Badge>Visual Law</Badge>
                <Badge tone="sand">Atuação nacional</Badge>
              </div>
              <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-on-dark)' }}>
                {HOME.quemSomos.destaque}
              </p>
              <ButtonLink href="/sobre" variant="outline-on-dark">
                {HOME.quemSomos.cta} →
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                maxWidth: 480,
                justifySelf: 'center',
                width: '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/equipe/dupla-1.webp"
                alt="Nathalia Fava e Jessica Vitorino, sócias-fundadoras do Fava e Vitorino Advocacia"
                fill
                sizes="(min-width: 900px) 480px, 100vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, background: 'rgba(8, 50, 36, 0.18)' }}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="areia">
        <Reveal>
          <SectionHeading overline="Diferenciais" title={HOME.diferenciais.titulo} />
        </Reveal>
        <FeatureList features={HOME.diferenciais.itens} />
      </Section>

      <Section tone="verde">
        <StatsBand stats={HOME.stats} />
      </Section>

      <Section tone="areia">
        <TestimonialSlots titulo={HOME.depoimentos.titulo} itens={HOME.depoimentos.itens} />
        <div style={{ marginTop: HOME.depoimentos.itens.length ? 'var(--space-9)' : 0 }}>
          <FaqSection titulo={HOME.faq.titulo} itens={HOME.faq.itens} />
        </div>
        <div style={{ marginTop: 'var(--space-9)' }}>
          <CtaSection
            titulo={HOME.ctaFinal.titulo}
            texto={HOME.ctaFinal.texto}
            actions={
              <>
                <WhatsAppCta message={HOME.hero.whatsappMessage} location="cta_final_home" variant="gold" size="lg">
                  {HOME.ctaFinal.botaoPrimario}
                </WhatsAppCta>
                <ButtonLink href={`mailto:${SITE.emails[0]}`} variant="outline-on-dark" size="lg" target="_self" rel="">
                  {HOME.ctaFinal.botaoSecundario}
                </ButtonLink>
              </>
            }
          />
        </div>
      </Section>

      <JsonLd data={faqSchema} />
    </>
  );
}
