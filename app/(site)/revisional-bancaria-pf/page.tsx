import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ds/forms/ButtonLink';
import { RevisionalTemplate } from '@/components/sections/RevisionalTemplate';
import { WhatsAppCta } from '@/components/sections/WhatsAppCta';
import { REVISIONAL_PF } from '@/content/data/revisional-pf';

const DESCRIPTION =
  'Análise técnica de contratos bancários para verificar juros, tarifas e encargos abusivos. Atendimento humanizado e relatório em Visual Law. Fale conosco.';

export const metadata: Metadata = {
  title: 'Revisional Bancária para Pessoa Física — Fava e Vitorino Advocacia',
  description: DESCRIPTION,
};

export default function RevisionalPfPage() {
  return (
    <RevisionalTemplate
      data={REVISIONAL_PF}
      path="/revisional-bancaria-pf"
      description={DESCRIPTION}
      heroActions={
        <>
          <WhatsAppCta
            message={REVISIONAL_PF.meta.whatsappMessage}
            location="hero_revisional_pf"
            variant="gold"
            size="lg"
          >
            {REVISIONAL_PF.hero.ctaPrimario}
          </WhatsAppCta>
          <ButtonLink href="#como-funciona" variant="outline-on-dark" size="lg">
            {REVISIONAL_PF.hero.ctaSecundario}
          </ButtonLink>
        </>
      }
      ctaActions={
        <>
          <WhatsAppCta
            message={REVISIONAL_PF.meta.whatsappMessage}
            location="cta_final_revisional_pf"
            variant="gold"
            size="lg"
          >
            {REVISIONAL_PF.ctaFinal.botaoPrimario}
          </WhatsAppCta>
          <ButtonLink href="/contato" variant="outline-on-dark" size="lg">
            {REVISIONAL_PF.ctaFinal.botaoSecundario}
          </ButtonLink>
        </>
      }
    />
  );
}
