/** Abas em caixa-alta com sublinhado dourado na ativa. */
export interface TabsProps {
  tabs: Array<string | { value: string; label: string }>;
  value: string;
  onChange?: (value: string) => void;
  /** Cores para uso sobre superfícies verde-escuras. */
  onDark?: boolean;
}
