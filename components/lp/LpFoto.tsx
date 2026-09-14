import Image from 'next/image';

import type { CSSProperties } from 'react';

export interface LpFotoProps {
  src: string;
  alt: string;
  /** Proporção no desktop. No celular o CSS abre para 4/3, para poupar rolagem. */
  ratio?: string;
  priority?: boolean;
}

/**
 * Foto tratada em duotone verde/dourado.
 *
 * A regra do briefing é paleta fechada em três cores, e foto colorida traria
 * uma quarta. O tratamento (dessatura + camada verde em `multiply` + dourado
 * em `soft-light`) devolve a imagem dentro da marca sem recolorir nada à mão.
 * Se o navegador não suportar `mix-blend-mode`, sobra a foto dessaturada —
 * degrada bem.
 */
export function LpFoto({ src, alt, ratio = '4 / 5', priority = false }: LpFotoProps) {
  return (
    <figure className="lp-foto" style={{ '--lp-foto-ratio': ratio } as CSSProperties}>
      <Image
        className="lp-foto__img"
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 760px) 380px, 100vw"
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
      <span className="lp-foto__verde" aria-hidden="true" />
      <span className="lp-foto__dourado" aria-hidden="true" />
    </figure>
  );
}
