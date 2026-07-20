import type { FaqItem } from '@/lib/schema';

/** Copy canônica — Revisional Bancária Pessoa Física (PRD 1.3). */
export const REVISIONAL_PF = {
  meta: {
    serviceName: 'Revisional Bancária para Pessoa Física',
    whatsappMessage:
      'Olá! Vim pelo site do Fava e Vitorino e quero uma análise revisional do meu contrato bancário (pessoa física).',
  },

  hero: {
    headline: 'Você pode estar pagando mais do que deve ao seu banco. Descubra gratuitamente.',
    sub: 'Muitos contratos de crédito trazem juros, tarifas e encargos que podem estar acima do permitido. A revisional bancária analisa cada valor cobrado e, quando há irregularidade, busca a correção — para que você pague apenas o que é devido.',
    ctaPrimario: 'Faça a análise gratuita do seu contrato',
    ctaSecundario: 'Entenda como funciona ↓',
  },

  dores: {
    titulo: 'Você paga todo mês e sente que a dívida nunca diminui? Isso pode não ser impressão sua.',
    intro:
      'Nem sempre os valores cobrados no seu contrato bancário estão corretos. Veja os problemas mais comuns que encontramos ao analisar contratos de clientes:',
    itens: [
      { titulo: 'Juros acima da média do mercado', desc: 'parcelas que pesam mais do que deveriam no seu orçamento' },
      { titulo: 'Tarifas e taxas que nem sempre são devidas', desc: 'cadastro, avaliação do bem, registro de contrato, entre outras cobranças que podem ser questionadas' },
      { titulo: 'Capitalização irregular de juros', desc: 'juros sobre juros cobrados de forma diferente do que foi pactuado' },
      { titulo: 'Seguros e produtos embutidos', desc: 'venda casada de seguros e serviços inseridos no contrato sem opção clara de recusa' },
      { titulo: 'Parcelas que crescem sem explicação', desc: 'valores que aumentam de forma confusa e comprometem a renda' },
      { titulo: 'Falta de clareza sobre a dívida', desc: 'você não sabe exatamente quanto já pagou nem o que compõe o saldo devedor' },
      { titulo: 'Negativação em contexto questionável', desc: 'nome incluído em cadastros de inadimplentes sem a devida transparência' },
    ],
  },

  servico: {
    titulo: 'O que a revisional bancária pode fazer por você',
    intro:
      'A revisional bancária é a análise técnica de um contrato firmado com banco ou financeira para verificar se os valores cobrados estão de acordo com a lei e com o que foi realmente contratado. O objetivo é simples: garantir que você pague apenas aquilo que é devido, com transparência sobre cada valor cobrado.',
    beneficios: [
      { titulo: 'Revisão de parcelas', desc: 'quando identificada irregularidade, é possível discutir a redução de juros e encargos acima do permitido, buscando parcelas mais justas' },
      { titulo: 'Retirada de cobranças indevidas', desc: 'análise de tarifas e taxas embutidas no contrato para questionar o que não deveria estar sendo cobrado' },
      { titulo: 'Restituição de valores', desc: 'em casos específicos, discussão sobre a devolução de tarifas e encargos considerados indevidos' },
      { titulo: 'Clareza total sobre a dívida', desc: 'você passa a entender exatamente o que está sendo cobrado e como o contrato foi montado, sem juridiquês' },
      { titulo: 'Acompanhamento com Visual Law', desc: 'atendimento humano do início ao fim, com relatórios visuais para você acompanhar cada etapa de forma acessível' },
    ],
    nota: 'Cada contrato exige análise individual, e o resultado depende das particularidades do caso — por isso trabalhamos com transparência sobre o que é possível, sem prometer resultado garantido.',
  },

  contratos: {
    titulo: 'Quais contratos podem ser analisados?',
    itens: [
      'Empréstimo pessoal',
      'Financiamento de veículo',
      'Financiamento imobiliário',
      'Cartão de crédito e rotativo',
      'Cheque especial',
      'Empréstimo consignado',
      'Crédito com garantia (refinanciamento / CDC)',
      'Outros contratos de crédito com bancos e financeiras',
    ],
  },

  passos: {
    titulo: 'Como funciona o processo',
    itens: [
      { titulo: 'Atendimento inicial', desc: 'Você entra em contato e nos conta sua situação, sem custo e sem compromisso.' },
      { titulo: 'Envio dos documentos e análise técnica', desc: 'Você nos envia o contrato e os comprovantes, e fazemos gratuitamente a análise detalhada de juros, tarifas, encargos e composição da dívida.' },
      { titulo: 'Reunião + relatório visual e fácil de entender', desc: 'Constatada a existência de cobranças abusivas, agendamos uma reunião e apresentamos um relatório claro e visual, mostrando o que foi identificado e os caminhos possíveis.' },
      { titulo: 'Definição da estratégia', desc: 'Juntos, decidimos a melhor via para o seu caso (administrativa ou judicial).' },
      { titulo: 'Acompanhamento do caso', desc: 'Conduzimos a demanda e mantemos você informado em cada etapa, com transparência do início ao fim.' },
    ],
  },

  documentos: {
    titulo: 'O que você vai precisar',
    itens: [
      'Contrato bancário ou de financiamento (o instrumento assinado)',
      'Extratos da conta ou do contrato',
      'Comprovantes de pagamento das parcelas',
      'Boletos / carnês do financiamento',
      'Faturas (cartão de crédito ou cheque especial)',
      'Documento de identificação (RG/CPF) e comprovante de residência',
      'Qualquer comunicação do banco sobre a dívida (e-mails, cartas, mensagens)',
    ],
    nota: 'Não precisa ter tudo em mãos para começar — no atendimento inicial a gente te orienta sobre o que buscar.',
  },

  credibilidade: [
    { valor: '+1.000', label: 'clientes atendidos em demandas de Direito do Consumidor e Bancário' },
    { valor: 'Atuação nacional', label: 'com estrutura 100% digital' },
    { valor: 'Visual Law', label: 'pioneiros — relatórios e documentos claros para cada etapa' },
  ],

  faq: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        question: 'Vale a pena fazer a revisão do meu contrato?',
        answer:
          'Depende da análise. Nem todo contrato tem irregularidade — por isso o primeiro passo é justamente analisar os documentos para verificar se há algo a ser questionado. Só seguimos adiante se fizer sentido para você.',
      },
      {
        question: 'Preciso estar inadimplente para revisar o contrato?',
        answer:
          'Não. A análise pode ser feita tanto em contratos em dia quanto em atraso. O que importa é verificar se os valores cobrados estão corretos.',
      },
      {
        question: 'Posso perder o que já tenho ou piorar minha situação?',
        answer:
          'A análise técnica serve justamente para avaliar riscos e caminhos antes de qualquer decisão. Nada é feito sem que você entenda e concorde com a estratégia.',
      },
      {
        question: 'Quanto tempo demora?',
        answer:
          'Varia conforme o caso e a via escolhida (administrativa ou judicial). Na reunião, explicamos os prazos realistas para sua situação específica.',
      },
      {
        question: 'Como vou entender o que está acontecendo no meu processo?',
        answer:
          'Essa é uma das nossas marcas: usamos Visual Law e linguagem simples para você acompanhar cada etapa de forma clara, sem juridiquês.',
      },
    ] satisfies FaqItem[],
  },

  ctaFinal: {
    titulo: 'Não entende o que seu banco está cobrando? Faça sua análise gratuitamente.',
    texto: 'Envie seus documentos e receba, sem custo, uma análise técnica do seu contrato — com atendimento humano e transparente do início ao fim.',
    botaoPrimario: 'Fazer minha análise gratuita',
    botaoSecundario: 'Agendar meu atendimento',
  },
} as const;
