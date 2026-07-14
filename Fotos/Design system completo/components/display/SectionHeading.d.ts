/**
 * Cabeçalho de seção: overline dourada + título em caixa-alta + fio dourado.
 * @startingPoint section="Display" subtitle="Overline + título + fio dourado" viewport="700x200"
 */
export interface SectionHeadingProps {
  overline?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
}
