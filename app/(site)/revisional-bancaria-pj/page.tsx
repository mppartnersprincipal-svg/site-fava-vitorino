import type { Metadata } from 'next';
import { RevisionalTemplate } from '@/components/sections/RevisionalTemplate';
import { WhatsAppCta } from '@/components/sections/WhatsAppCta';
import { REVISIONAL_PJ } from '@/content/data/revisional-pj';
import { WHATSAPP_DEFAULT_MESSAGE } from '@/lib/whatsapp';

const DESCRIPTION =
  'Diagnóstico de operações de crédito empresarial. Análise de capital de giro, conta garantida, leasing e mais. Relatório em Visual Law para a diretoria decidir.';

export const metadata: Metadata = {
  title: 'Revisional Bancária para Empresas — Fava e Vitorino Advocacia',
  description: DESCRIPTION,
};

export default function RevisionalPjPage() {
  return (
    <RevisionalTemplate
      data={REVISIONAL_PJ}
      path="/revisional-bancaria-pj"
      description={DESCRIPTION}
      heroActions={
        <>
          <WhatsAppCta
            message={REVISIONAL_PJ.meta.whatsappMessage}
            location="hero_revisional_pj"
            variant="gold"
            size="lg"
          >
            {REVISIONAL_PJ.hero.ctaPrimario}
          </WhatsAppCta>
          <WhatsAppCta
            message={WHATSAPP_DEFAULT_MESSAGE}
            location="hero_revisional_pj_secundario"
            variant="outline-on-dark"
            size="lg"
          >
            {REVISIONAL_PJ.hero.ctaSecundario}
          </WhatsAppCta>
        </>
      }
      ctaActions={
        <>
          <WhatsAppCta
            message={REVISIONAL_PJ.meta.whatsappMessage}
            location="cta_final_revisional_pj"
            variant="gold"
            size="lg"
          >
            {REVISIONAL_PJ.ctaFinal.botaoPrimario}
          </WhatsAppCta>
          <WhatsAppCta
            message={WHATSAPP_DEFAULT_MESSAGE}
            location="cta_final_revisional_pj_secundario"
            variant="outline-on-dark"
            size="lg"
          >
            {REVISIONAL_PJ.ctaFinal.botaoSecundario}
          </WhatsAppCta>
        </>
      }
    />
  );
}
