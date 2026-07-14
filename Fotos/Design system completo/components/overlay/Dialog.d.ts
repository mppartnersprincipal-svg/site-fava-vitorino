/** Diálogo modal com véu verde-escuro e fio dourado sob o título. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
}
