'use client';

import type { Direito } from '@/content/data/autismo';
import { useWhatsAppLink } from './useWhatsAppLink';
import { DireitoIcon } from './DireitoIcon';

export interface DireitoCardProps {
  direito: Direito;
  /** Posição na lista (1–5), exibida como numeração dourada. */
  posicao: number;
  phone: string;
}

/**
 * Card de direito clicável. Além de converter, é o card que responde à
 * pergunta do briefing: qual tema puxa mais clique e, portanto, merece uma
 * página só dele depois do primeiro mês.
 */
export function DireitoCard({ direito, posicao, phone }: DireitoCardProps) {
  const { href, trackClick, trackAux } = useWhatsAppLink(phone, direito.mensagem);

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="lp-direito"
        onClick={() => {
          trackAux('direito_click', { direito: direito.id });
          trackClick(`card_direito_autismo`, { direito: direito.id });
        }}
      >
        <span className="lp-direito__icone" aria-hidden="true">
          <DireitoIcon id={direito.id} />
        </span>
        <span className="lp-direito__texto">
          <span className="lp-direito__num" aria-hidden="true">
            {String(posicao).padStart(2, '0')}
          </span>
          <span className="lp-direito__titulo">{direito.titulo}</span>
          <span className="lp-direito__benef">{direito.beneficio}</span>
        </span>
        <svg
          className="lp-direito__seta"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="visually-hidden">— falar sobre isso no WhatsApp</span>
      </a>
    </li>
  );
}
