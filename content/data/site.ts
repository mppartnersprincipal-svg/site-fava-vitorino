/**
 * Dados canônicos do escritório (NAP — Name, Address, Phone).
 * Fonte: briefing preenchido + PRD.
 */
export const SITE = {
  nome: 'Fava e Vitorino Advocacia',
  razaoSocial: 'FAVA SOCIEDADE DE ADVOCACIA INDIVIDUAL',
  cnpj: '66.047.156/0001-36',

  endereco: {
    completo: 'R. Gen. Mário Tourinho, 1746 - Sl 1601 - Campina do Siqueira, Curitiba - PR, 80740-000',
    logradouro: 'R. Gen. Mário Tourinho, 1746 - Sl 1601 - Campina do Siqueira',
    cidade: 'Curitiba',
    uf: 'PR',
    cep: '80740-000',
  },
  tagline: 'Estratégia jurídica para proteger tudo o que você construiu.',
  descricao:
    'Escritório de advocacia com atuação nacional e atendimento humanizado. Direito de Família, Planejamento Patrimonial, Direito Bancário, Empresarial e mais.',

  whatsapp: '5562992815221',
  whatsappDisplay: '(62) 99281-5221',
  emails: ['atendimento@favaevitorino.com.br'],
  horario: 'Segunda a sexta, das 9h às 18h',
  atendimentoPresencial: 'Somente com hora marcada',

  instagram: {
    handle: '@favaevitorino.adv',
    url: 'https://www.instagram.com/favaevitorino.adv',
  },

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://favaevitorino.com.br',
} as const;
