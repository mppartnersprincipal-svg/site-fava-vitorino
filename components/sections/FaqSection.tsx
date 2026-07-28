import { Accordion, SectionHeading } from '@/components/ds';
import { Reveal } from './Reveal';
import type { FaqItem } from '@/lib/schema';

export interface FaqSectionProps {
  titulo: string;
  itens: readonly FaqItem[];
}

/**
 * Perguntas frequentes — heading centralizado e accordion numerado em coluna única.
 * O heading NÃO usa Reveal: a transição com translateY gerava "fantasma" do título
 * (palavra duplicada/sobreposta) em gravações de tela e em glitches de repintura.
 */
export function FaqSection({ titulo, itens }: FaqSectionProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-7)' }}>
      <SectionHeading overline="Dúvidas" title={titulo} align="center" />
      <Reveal style={{ width: '100%', maxWidth: 780 }}>
        <Accordion numbered items={itens.map((f) => ({ title: f.question, content: f.answer }))} />
      </Reveal>
    </div>
  );
}
