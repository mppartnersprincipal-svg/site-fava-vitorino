/** Áreas de atuação exibidas na Home (copy canônica do PRD — 6 cards). */
export interface Area {
  nome: string;
  desc: string;
  /** Nome do ícone Lucide (resolvido no componente de seção). */
  icon: 'users' | 'shield' | 'building' | 'landmark' | 'house' | 'scale';
}

export const AREAS: Area[] = [
  {
    nome: 'Direito de Família e Sucessões',
    desc: 'Divorciamento, guarda, pensão, inventário e partilha de bens — com sensibilidade e estratégia para proteger o que importa.',
    icon: 'users',
  },
  {
    nome: 'Planejamento Patrimonial e Sucessório',
    desc: 'Holding familiar, testamento, doação e proteção de bens — soluções sob medida para preservar seu patrimônio e antecipar riscos.',
    icon: 'shield',
  },
  {
    nome: 'Direito Empresarial e Contratual',
    desc: 'Constituição de empresas, contratos, reestruturações e consultoria preventiva para negócios que precisam de segurança jurídica.',
    icon: 'building',
  },
  {
    nome: 'Direito do Consumidor e Bancário',
    desc: 'Revisional bancária, cobranças indevidas, negativação e defesa em relações de consumo — para pessoas físicas e empresas.',
    icon: 'landmark',
  },
  {
    nome: 'Direito Imobiliário',
    desc: 'Contratos de compra e venda, locação, incorporações e disputas imobiliárias — segurança em cada transação.',
    icon: 'house',
  },
  {
    nome: 'Direito Administrativo',
    desc: 'Licitações, contratos públicos e relações com a administração — suporte técnico para quem lida com o poder público.',
    icon: 'scale',
  },
];
