/**
 * Campo de texto com rótulo em overline. Foco com anel dourado.
 * @startingPoint section="Forms" subtitle="Input e Textarea com rótulo overline" viewport="700x220"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
}
export interface TextareaProps extends InputProps { rows?: number; }
export interface FieldProps { label?: string; hint?: string; children: React.ReactNode; }
