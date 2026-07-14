import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/ds';
import { JsonLd } from '@/components/analytics/JsonLd';
import { PixelViewContent } from '@/components/analytics/PixelViewContent';
import { Hero } from './Hero';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { PainPoints, type PainPoint } from './PainPoints';
import { BenefitList, type Benefit } from './BenefitList';
import { ContractTypes } from './ContractTypes';
import { StepList, type Step } from './StepList';
import { DocumentChecklist } from './DocumentChecklist';
import { StatsBand, type Stat } from './StatsBand';
import { FaqSection } from './FaqSection';
import { CtaSection } from './CtaSection';
import { faqPageSchema, serviceSchema, type FaqItem } from '@/lib/schema';
import { SITE } from '@/content/data/site';

export interface RevisionalData {
  meta: { serviceName: string; whatsappMessage: string };
  hero: { overline: string; headline: string; sub: string };
  dores: { titulo: string; intro: string; itens: readonly PainPoint[] };
  servico: { titulo: string; intro: string; beneficios: readonly Benefit[]; nota: string | null };
  contratos: { titulo: string; itens: readonly string[] };
  passos: { titulo: string; itens: readonly Step[] };
  documentos: { titulo: string; itens: readonly string[]; nota?: string };
  /** PF: faixa de credibilidade. */
  credibilidade?: readonly Stat[];
  /** PJ: perfil de atendimento. */
  perfil?: { titulo: string; texto: string };
  faq: { titulo: string; itens: readonly FaqItem[] };
  ctaFinal: { titulo: string; texto: string };
}

export interface RevisionalTemplateProps {
  data: RevisionalData;
  /** Caminho da rota (para o JSON-LD do serviço). */
  path: string;
  description: string;
  heroActions: ReactNode;
  ctaActions: ReactNode;
}

/** Template compartilhado das páginas de Revisional Bancária (PF e PJ). */
export function RevisionalTemplate({ data, path, description, heroActions, ctaActions }: RevisionalTemplateProps) {
  return (
    <>
      <Hero overline={data.hero.overline} title={data.hero.headline} lead={data.hero.sub} actions={heroActions} />

      <Section tone="areia">
        <Reveal>
          <SectionHeading overline="Sinais de alerta" title={data.dores.titulo} lead={data.dores.intro} />
        </Reveal>
        <PainPoints itens={data.dores.itens} />
      </Section>

      <Section tone="verde">
        <Reveal>
          <SectionHeading overline="O serviço" title={data.servico.titulo} lead={data.servico.intro} onDark />
        </Reveal>
        <BenefitList itens={data.servico.beneficios} />
        {data.servico.nota && (
          <Reveal>
            <p
              style={{
                margin: 'var(--space-7) 0 0',
                padding: 'var(--space-5)',
                border: '1px solid var(--border-on-dark)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: 'var(--radius-md)',
                font: 'var(--text-body-sm)',
                color: 'var(--text-on-dark-muted)',
                maxWidth: 720,
              }}
            >
              {data.servico.nota}
            </p>
          </Reveal>
        )}
      </Section>

      <Section tone="areia">
        <Reveal>
          <SectionHeading overline="Escopo" title={data.contratos.titulo} />
        </Reveal>
        <ContractTypes itens={data.contratos.itens} />
      </Section>

      <Section tone="verde" id="como-funciona">
        <Reveal>
          <SectionHeading overline="Passo a passo" title={data.passos.titulo} onDark />
        </Reveal>
        <StepList passos={data.passos.itens} />
      </Section>

      <Section tone="areia">
        <Reveal>
          <SectionHeading overline="Documentos" title={data.documentos.titulo} />
        </Reveal>
        <DocumentChecklist itens={data.documentos.itens} nota={data.documentos.nota} />
      </Section>

      {data.credibilidade && (
        <Section tone="verde">
          <StatsBand stats={data.credibilidade} />
        </Section>
      )}

      {data.perfil && (
        <Section tone="verde">
          <Reveal>
            <SectionHeading overline="Para quem" title={data.perfil.titulo} lead={data.perfil.texto} onDark />
          </Reveal>
        </Section>
      )}

      <Section tone="areia">
        <FaqSection titulo={data.faq.titulo} itens={data.faq.itens} />
        <div style={{ marginTop: 'var(--space-9)' }}>
          <CtaSection titulo={data.ctaFinal.titulo} texto={data.ctaFinal.texto} actions={ctaActions} />
        </div>
      </Section>

      <JsonLd
        data={serviceSchema({ name: data.meta.serviceName, description, url: `${SITE.url}${path}` })}
      />
      <JsonLd data={faqPageSchema([...data.faq.itens])} />
      <PixelViewContent contentName={data.meta.serviceName} />
    </>
  );
}
