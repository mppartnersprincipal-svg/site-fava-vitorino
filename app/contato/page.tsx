import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Contato — Fava e Vitorino Advocacia',
  description:
    'Fale com o escritório Fava e Vitorino. Atendimento de segunda a sexta, das 9h às 18h. WhatsApp, e-mail e agendamento online.',
};

// Stub da Fase 3 — conteúdo completo na Fase 7.
export default function ContatoPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-9)' }}>
      <SectionHeading
        as="h1"
        overline="Contato"
        title="Fale com o Fava e Vitorino"
        lead="Página em construção — Fase 7."
      />
    </div>
  );
}
