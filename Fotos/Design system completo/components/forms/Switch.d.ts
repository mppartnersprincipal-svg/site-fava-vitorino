/** Alternador liga/desliga: trilho verde, botão dourado quando ativo. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}
