import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Revisional Bancária para Empresas — Fava e Vitorino Advocacia',
  description:
    'Diagnóstico de operações de crédito empresarial. Análise de capital de giro, conta garantida, leasing e mais. Relatório em Visual Law para a diretoria decidir.',
};

// Stub da Fase 3 — conteúdo completo na Fase 6.
export default function RevisionalPjPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-9)' }}>
      <SectionHeading
        as="h1"
        overline="Revisional bancária — Empresas"
        title="Sua empresa pode estar pagando mais do que deve ao banco."
        lead="Página em construção — Fase 6."
      />
    </div>
  );
}
