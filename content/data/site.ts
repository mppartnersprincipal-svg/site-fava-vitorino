/**
 * Dados canônicos do escritório (NAP — Name, Address, Phone).
 * Fonte: briefing preenchido + PRD. Endereço ainda pendente — ver pending.ts.
 */
export const SITE = {
  nome: 'Fava e Vitorino Advocacia',
  razaoSocial: 'FAVA SOCIEDADE DE ADVOCACIA INDIVIDUAL',
  cnpj: '66.047.156/0001-36',
  tagline: 'Estratégia jurídica para proteger tudo o que você construiu.',
  descricao:
    'Escritório de advocacia com atuação nacional e atendimento humanizado. Direito de Família, Planejamento Patrimonial, Direito Bancário, Empresarial e mais.',

  whatsapp: '5562992815221',
  whatsappDisplay: '(62) 99281-5221',
  emails: [
    'nathaliafava@favaevitorino.com.br',
    'jessicavitorino@favaevitorino.com.br',
  ],
  horario: 'Segunda a sexta, das 9h às 18h',
  atendimentoPresencial: 'Somente com hora marcada',

  instagram: {
    handle: '@favaevitorino.adv',
    url: 'https://www.instagram.com/favaevitorino.adv',
  },

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://favaevitorino.com.br',
} as const;
