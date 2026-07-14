/** Lista expansível (FAQ, detalhamento de áreas). */
export interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
  /** Abre um item por vez (padrão true). */
  single?: boolean;
}
