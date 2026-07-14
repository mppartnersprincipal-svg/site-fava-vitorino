import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Sobre o Fava e Vitorino Advocacia — Quem somos e como atuamos',
  description:
    'Conheça a história, a equipe e os valores do Fava e Vitorino Advocacia. Escritório fundado por Nathalia Fava e Jessica Vitorino com foco em advocacia estratégica e humanizada.',
};

// Stub da Fase 3 — conteúdo completo na Fase 5.
export default function SobrePage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-9)' }}>
      <SectionHeading
        as="h1"
        overline="Quem somos"
        title="Advocacia estratégica, humana e tecnológica."
        lead="Página em construção — Fase 5."
      />
    </div>
  );
}
