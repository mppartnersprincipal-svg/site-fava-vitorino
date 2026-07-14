/** Notificação breve sobre fundo verde com filete dourado (erro: filete terracota). */
export interface ToastProps {
  tone?: 'success' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}
