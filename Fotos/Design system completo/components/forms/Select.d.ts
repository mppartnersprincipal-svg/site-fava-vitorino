/** Seleção nativa estilizada, com seta em traço verde. */
export interface SelectProps {
  label?: string;
  hint?: string;
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: any) => void;
}
