import { Tag } from '@/components/ds';
import { Reveal } from './Reveal';

/** Grid de tipos de contratos/operações analisáveis, em pílulas brancas (Tag do DS). */
export function ContractTypes({ itens }: { itens: readonly string[] }) {
  return (
    <Reveal>
      <ul
        role="list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          margin: 'var(--space-7) 0 0',
          padding: 0,
        }}
      >
        {itens.map((c) => (
          <li key={c}>
            <Tag>{c}</Tag>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
