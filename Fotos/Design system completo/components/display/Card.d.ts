/**
 * Card institucional: branco sobre areia, cantos 4px, borda sutil.
 * @startingPoint section="Display" subtitle="Card em 3 tons" viewport="700x240"
 */
export interface CardProps {
  /** 'light' (padrão, sobre areia), 'dark' (sobre verde-escuro), 'sand'. */
  tone?: 'light' | 'dark' | 'sand';
  /** Eleva sombra no hover. */
  interactive?: boolean;
  children: React.ReactNode;
}
