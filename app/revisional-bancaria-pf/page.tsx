import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Revisional Bancária para Pessoa Física — Fava e Vitorino Advocacia',
  description:
    'Análise técnica de contratos bancários para verificar juros, tarifas e encargos abusivos. Atendimento humanizado e relatório em Visual Law. Fale conosco.',
};

// Stub da Fase 3 — conteúdo completo na Fase 6.
export default function RevisionalPfPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-9)' }}>
      <SectionHeading
        as="h1"
        overline="Revisional bancária — Pessoa física"
        title="Você sabe exatamente o que o banco está cobrando no seu contrato?"
        lead="Página em construção — Fase 6."
      />
    </div>
  );
}
