/** Checkbox com marca de seleção dourada sobre verde. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
}
