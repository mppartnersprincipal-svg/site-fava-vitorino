/**
 * Botão institucional Fava e Vitorino. Rótulo em caixa-alta com tracking largo.
 * @startingPoint section="Forms" subtitle="Botão em 5 variantes e 3 tamanhos" viewport="700x260"
 */
export interface ButtonProps {
  /** Variante visual. 'outline-on-dark' apenas sobre superfícies verde-escuras. */
  variant?: 'primary' | 'gold' | 'outline' | 'outline-on-dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
