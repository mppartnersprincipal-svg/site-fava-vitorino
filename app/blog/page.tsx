import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Blog — Fava e Vitorino Advocacia',
  description:
    'Artigos, guias e orientações sobre Direito de Família, Planejamento Patrimonial, Direito Bancário e Empresarial. Conteúdo jurídico acessível.',
};

// Stub da Fase 3 — listagem MDX na Fase 8.
export default function BlogPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-9)' }}>
      <SectionHeading
        as="h1"
        overline="Blog"
        title="Conteúdo jurídico para quem quer entender antes de decidir"
        lead="Página em construção — Fase 8."
      />
    </div>
  );
}
