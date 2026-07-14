import { Accordion, SectionHeading } from '@/components/ds';
import { Reveal } from './Reveal';
import type { FaqItem } from '@/lib/schema';

export interface FaqSectionProps {
  titulo: string;
  itens: readonly FaqItem[];
}

export function FaqSection({ titulo, itens }: FaqSectionProps) {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <Reveal>
        <SectionHeading overline="Dúvidas" title={titulo} />
      </Reveal>
      <Reveal delay={100}>
        <Accordion items={itens.map((f) => ({ title: f.question, content: f.answer }))} />
      </Reveal>
    </div>
  );
}
