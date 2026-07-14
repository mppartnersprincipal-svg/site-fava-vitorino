import type { FaqItem } from '@/lib/schema';

/** Copy canônica — Revisional Bancária Pessoa Jurídica (PRD 1.4). */
export const REVISIONAL_PJ = {
  meta: {
    serviceName: 'Revisional Bancária para Empresas',
    whatsappMessage:
      'Olá! Vim pelo site do Fava e Vitorino e quero um diagnóstico das operações de crédito da minha empresa.',
  },

  hero: {
    overline: 'Revisional bancária — Empresas',
    headline: 'Sua empresa pode estar pagando mais do que deve ao banco.',
    sub: 'Empresas que operam com várias linhas de crédito nem sempre têm tempo ou estrutura para conferir, contrato a contrato, se os valores cobrados estão corretos. A revisional bancária empresarial analisa juros, encargos e tarifas para reequilibrar os contratos e devolver previsibilidade ao fluxo de caixa.',
    ctaPrimario: 'Solicitar diagnóstico dos contratos',
    ctaSecundario: 'Falar no WhatsApp',
  },

  dores: {
    titulo: 'O crédito que deveria sustentar a operação pode estar consumindo o caixa da empresa.',
    intro:
      'Capital de giro, conta garantida, antecipação de recebíveis — essas linhas fazem parte da rotina. Mas quando os encargos saem do controle, o crédito que deveria impulsionar o negócio passa a travá-lo.',
    itens: [
      { titulo: 'Juros acima do mercado', desc: 'em linhas de capital de giro e conta garantida' },
      { titulo: 'Cumulação questionável de encargos', desc: 'juros remuneratórios, moratórios, comissão de permanência e multas cobrados de forma que pode não ter respaldo legal' },
      { titulo: 'Tarifas embutidas sem justificativa', desc: 'cobranças inseridas nos contratos sem previsão clara' },
      { titulo: 'Capitalização irregular de juros', desc: 'juros compostos em desacordo com o contratado' },
      { titulo: 'Cláusulas desproporcionais', desc: 'que transferem risco excessivo à empresa' },
      { titulo: 'Renovações automáticas', desc: 'que elevam o endividamento sem transparência' },
      { titulo: 'Dificuldade de enxergar a dívida real', desc: 'a composição se perde entre múltiplos contratos' },
      { titulo: 'Comprometimento do fluxo de caixa', desc: 'a capacidade de investimento e operação do negócio fica limitada' },
    ],
  },

  servico: {
    titulo: 'O que a revisional bancária empresarial pode fazer pela sua empresa',
    intro:
      'A revisional bancária empresarial é a análise técnica dos contratos de crédito firmados pela empresa com bancos e instituições financeiras, com o objetivo de verificar se os juros, encargos e tarifas cobrados estão de acordo com a lei, com o mercado e com o que foi efetivamente contratado. A revisional identifica possíveis irregularidades e, quando existentes, busca a correção pela via adequada — reequilibrando os contratos e devolvendo previsibilidade às finanças da empresa.',
    beneficios: [
      { titulo: 'Melhora do fluxo de caixa', desc: 'ao questionar juros e encargos indevidos, é possível reduzir o peso das parcelas e liberar recursos para a operação' },
      { titulo: 'Redução do endividamento', desc: 'reequilíbrio dos contratos quando identificadas cobranças em desacordo com a lei' },
      { titulo: 'Recuperação de valores', desc: 'em casos específicos, discussão sobre restituição de tarifas e encargos indevidos' },
      { titulo: 'Previsibilidade financeira', desc: 'clareza sobre a composição real da dívida entre os diferentes contratos' },
      { titulo: 'Preservação da saúde do CNPJ', desc: 'atuação preventiva para evitar que o endividamento comprometa a continuidade do negócio' },
      { titulo: 'Decisão com base em dados', desc: 'relatório em Visual Law que traduz números e cláusulas em informação clara para a diretoria decidir' },
    ],
    nota: null,
  },

  contratos: {
    titulo: 'Quais operações de crédito podem ser analisadas?',
    itens: [
      'Capital de giro',
      'Conta garantida',
      'Desconto / antecipação de duplicatas e recebíveis',
      'Cheque especial empresarial',
      'Leasing (arrendamento mercantil)',
      'Financiamento de equipamentos e maquinário',
      'Financiamento de veículos e frota',
      'Crédito para expansão e investimento',
      'Cédulas de crédito bancário (CCB) e demais contratos com instituições financeiras',
    ],
  },

  passos: {
    titulo: 'Como funciona o processo para empresas',
    itens: [
      { titulo: 'Atendimento inicial', desc: 'Conversamos com a empresa para entender o cenário financeiro e as linhas de crédito envolvidas.' },
      { titulo: 'Diagnóstico e envio dos contratos', desc: 'A empresa nos envia os contratos, extratos e demonstrativos, e fazemos um diagnóstico das operações de crédito.' },
      { titulo: 'Análise técnica dos contratos', desc: 'Verificamos juros, encargos, tarifas e cláusulas de cada operação, identificando possíveis irregularidades.' },
      { titulo: 'Reunião + relatório em Visual Law', desc: 'Constatada a existência de cobranças abusivas, agendamos uma reunião e apresentamos um relatório claro e visual, com o que foi identificado e os caminhos possíveis.' },
      { titulo: 'Definição da estratégia jurídica', desc: 'Juntos, definimos a melhor via para a empresa (administrativa ou judicial), considerando o impacto no fluxo de caixa.' },
      { titulo: 'Atuação e acompanhamento', desc: 'Conduzimos a demanda e mantemos a empresa informada em cada etapa, com transparência do início ao fim.' },
    ],
  },

  documentos: {
    titulo: 'O que a empresa vai precisar',
    itens: [
      'Contratos bancários e de crédito (capital de giro, conta garantida, CCB, leasing, etc.)',
      'Extratos da conta PJ',
      'Demonstrativos e comprovantes de pagamento das operações',
      'Balancetes ou demonstrativos financeiros recentes',
      'Contrato social e alterações',
      'Cartão CNPJ e documento dos sócios / representante legal',
      'Qualquer comunicação do banco sobre as dívidas ou renovações',
    ],
    nota: 'Não precisa reunir tudo de imediato — no atendimento inicial mapeamos com você quais operações analisar primeiro.',
  },

  perfil: {
    titulo: 'Atendemos empresas de diferentes portes e setores',
    texto:
      'Desde MEI e microempresas até empresas de médio porte, de diversos segmentos — comércio, serviços, indústria e agronegócio. Atuação nacional com estrutura 100% digital.',
  },

  faq: {
    titulo: 'Perguntas frequentes — empresas',
    itens: [
      {
        question: 'A revisão atrapalha meu relacionamento com o banco?',
        answer:
          'A análise é técnica e busca corrigir o que estiver em desacordo com a lei. A relação bancária pode continuar — inclusive com contratos mais equilibrados e transparentes.',
      },
      {
        question: 'Preciso estar inadimplente para revisar os contratos?',
        answer:
          'Não. A análise vale tanto para operações em dia quanto em atraso. O objetivo é verificar se os valores cobrados estão corretos.',
      },
      {
        question: 'Minha empresa tem vários contratos com bancos diferentes. Dá para analisar todos?',
        answer:
          'Sim. Fazemos um diagnóstico das operações e priorizamos as que têm maior impacto no fluxo de caixa da empresa.',
      },
      {
        question: 'Quanto tempo leva e como acompanho o andamento?',
        answer:
          'Depende do caso e da via escolhida. Na reunião apresentamos prazos realistas, e você acompanha cada etapa por meio de relatórios claros em Visual Law.',
      },
      {
        question: 'A análise inicial compromete a empresa a algo?',
        answer:
          'Não. O atendimento inicial serve para entender o cenário. Qualquer estratégia só avança com o entendimento e a concordância da empresa.',
      },
    ] satisfies FaqItem[],
  },

  ctaFinal: {
    titulo: 'Sua empresa pode estar pagando mais do que deve ao banco.',
    texto: 'Envie seus contratos e receba um diagnóstico técnico das operações de crédito da empresa, com relatório claro em Visual Law.',
    botaoPrimario: 'Solicitar diagnóstico dos contratos',
    botaoSecundario: 'Falar no WhatsApp',
  },
} as const;
