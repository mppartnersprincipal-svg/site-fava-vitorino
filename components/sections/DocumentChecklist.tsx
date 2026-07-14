import { Check } from 'lucide-react';
import { Card } from '@/components/ds';
import { Reveal } from './Reveal';

export interface DocumentChecklistProps {
  itens: readonly string[];
  nota?: string;
}

/** Checklist de documentos necessários em card branco, com nota de acolhimento. */
export function DocumentChecklist({ itens, nota }: DocumentChecklistProps) {
  return (
    <Reveal>
      <Card style={{ marginTop: 'var(--space-7)', maxWidth: 720 }}>
        <ul role="list" style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {itens.map((doc) => (
            <li key={doc} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Check size={18} strokeWidth={2} aria-hidden="true" style={{ color: 'var(--accent-strong)', flex: 'none', marginTop: 3 }} />
              <span style={{ font: 'var(--text-body-md)', color: 'var(--text-body)' }}>{doc}</span>
            </li>
          ))}
        </ul>
        {nota && (
          <p
            style={{
              margin: 'var(--space-5) 0 0',
              paddingTop: 'var(--space-5)',
              borderTop: '1px solid var(--border-subtle)',
              font: 'var(--text-body-sm)',
              color: 'var(--text-muted)',
            }}
          >
            {nota}
          </p>
        )}
      </Card>
    </Reveal>
  );
}
