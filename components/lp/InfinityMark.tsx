export interface InfinityMarkProps {
  className?: string;
}

/**
 * Símbolo do infinito — o adotado pela comunidade autista.
 * Briefing: nunca usar peça de quebra-cabeça, rejeitada por boa parte das
 * famílias. Decorativo: a mensagem da página não depende dele.
 */
export function InfinityMark({ className }: InfinityMarkProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M25 25C25 12 40 12 50 25C60 38 75 38 75 25C75 12 60 12 50 25C40 38 25 38 25 25Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
