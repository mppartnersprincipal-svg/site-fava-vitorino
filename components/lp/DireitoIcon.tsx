/**
 * Ícones dos cards de direito — traço dourado, desenhados aqui em SVG.
 *
 * Por que não foto/ilustração de arquivo: a página tem meta de carregar em
 * menos de 3s no 4G e paleta fechada em três cores. Traço em `currentColor`
 * pesa alguns bytes, herda o dourado e nunca sai da marca.
 *
 * Nenhum deles usa peça de quebra-cabeça (regra do briefing).
 */

const paths: Record<string, React.ReactNode> = {
  /* Terapia — coração com linha de pulso: cuidado continuado, não avulso. */
  terapia: (
    <>
      <path d="M12 20.5S3.5 15.2 3.5 9.4A4.9 4.9 0 0 1 12 6.2a4.9 4.9 0 0 1 8.5 3.2c0 5.8-8.5 11.1-8.5 11.1Z" />
      <path d="M3.9 12.4h3.6l1.7-2.8 2 5.1 1.8-3.6 1.2 1.3h4" />
    </>
  ),

  /* Escola — livro aberto com uma figura ao lado: apoio em sala. */
  escola: (
    <>
      <path d="M3 5.5h5.2c1.6 0 2.8.8 2.8 1.9v11c0-1.1-1.2-1.9-2.8-1.9H3Z" />
      <path d="M21 5.5h-5.2c-1.6 0-2.8.8-2.8 1.9v11c0-1.1 1.2-1.9 2.8-1.9H21Z" />
      <path d="M12 7.4v11" />
    </>
  ),

  /* Um valor todo mês — calendário com o ciclo marcado. */
  'beneficio-mensal': (
    <>
      <rect x="3.2" y="5.2" width="17.6" height="15.6" rx="2.2" />
      <path d="M3.2 10h17.6M8 3.2v4M16 3.2v4" />
      <circle cx="12" cy="15.2" r="2.4" />
    </>
  ),

  /* IPVA — carro com seta de retorno: isenção e devolução do que já foi pago. */
  ipva: (
    <>
      <path d="M5 13.2l1.7-4.1c.3-.8 1-1.3 1.9-1.3h6.8c.9 0 1.6.5 1.9 1.3l1.7 4.1" />
      <rect x="3.4" y="13.2" width="17.2" height="4.6" rx="1.4" />
      <path d="M6.4 15.5h1.7M15.9 15.5h1.7" />
      <path d="M6.8 17.8v1.3M17.2 17.8v1.3" />
    </>
  ),

  /* FGTS — moedas empilhadas: um dinheiro seu, parado. */
  fgts: (
    <>
      <ellipse cx="12" cy="6.6" rx="7.4" ry="2.8" />
      <path d="M4.6 6.6v4.4c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8V6.6" />
      <path d="M4.6 11v4.4c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8V11" />
    </>
  ),
};

export interface DireitoIconProps {
  /** Slug do direito (`AUTISMO.direitos.itens[].id`). */
  id: string;
  size?: number;
}

export function DireitoIcon({ id, size = 24 }: DireitoIconProps) {
  const shape = paths[id];
  if (!shape) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
