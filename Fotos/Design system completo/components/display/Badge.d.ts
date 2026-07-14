/** Selo curto em caixa-alta (única forma em pílula do sistema). */
export interface BadgeProps {
  tone?: 'gold' | 'green' | 'sand';
  children: React.ReactNode;
}
export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
}
