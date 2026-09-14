/**
 * Copy da landing page "Direitos da criança autista" (/autismo).
 * Fonte: "Briefing - Landing Page Direitos da Crianca Autista.pdf" (Nathalia Fava).
 *
 * REGRAS DO BRIEFING QUE ESTE ARQUIVO PRECISA RESPEITAR — ler antes de editar:
 *  1. Nada de promessa de resultado. A formulação é sempre "pode ter direito".
 *  2. Nenhum valor de honorário, parcela ou condição de pagamento.
 *  3. Nenhuma urgência artificial (contador, "últimas vagas", "promoção").
 *  4. Zero juridiquês, frases curtas, tratamento no feminino ("você", "a mãe").
 *  5. Todo texto que fala de DIREITO passa por aprovação do escritório antes de
 *     publicar. Chamada, ordem e estilo a equipe ajusta à vontade.
 *  6. Símbolo do autismo: infinito. Nunca peça de quebra-cabeça.
 */

import type { FaqItem } from '@/lib/schema';
import { SITE } from './site';

export interface Direito {
  /** Slug usado no evento de analytics — é o que dirá qual tema merece página própria. */
  id: string;
  titulo: string;
  beneficio: string;
  /** Mensagem do WhatsApp quando o card é clicado. */
  mensagem: string;
}

export const AUTISMO = {
  meta: {
    path: '/autismo',
    /**
     * Número comercial do escritório — o mesmo do resto do site.
     * O briefing previa um número próprio da campanha (final 7899), mas ele é o
     * WhatsApp particular da Nathalia com os clientes dela; a pedido dela, todos
     * os botões usam o comercial. Não voltar a usar o 7899.
     */
    whatsapp: SITE.whatsapp,
    serviceName: 'Direitos da criança autista',
    title: 'Direitos da criança autista — o que ninguém te contou',
    description:
      'Terapia sem limite de sessões, apoio na escola, benefício mensal, IPVA de volta. Veja o que o seu filho pode ter por direito e fale com uma advogada pelo WhatsApp.',
  },

  /** 01. Topo — precisa caber na primeira tela do celular, sem rolar. */
  hero: {
    headline: 'Seu filho tem direitos que ninguém te contou',
    sub: 'Terapia sem limite de sessões, imposto de volta no seu bolso, benefício mensal, escola obrigada a incluir. Descubra o que já é seu.',
    cta: 'Falar com uma advogada agora',
    mensagem: 'Oi! Vim pelo site e queria entender os direitos do meu filho.',
  },

  /** 02. Reconhecimento da dor — frases verbatim do briefing. */
  dores: {
    titulo: 'Você já ouviu alguma dessas frases?',
    frases: [
      'Seu contrato só cobre 12 sessões por ano.',
      'Não estamos preparados para esse perfil de aluno.',
      'Se quiser mediador, a senhora contrata por fora.',
      'A prefeitura só fornece esse profissional.',
    ],
    fecho: 'Se você já ouviu alguma dessas frases, existe algo a fazer no seu caso.',
  },

  /** 03. Os direitos — o coração da página. Ordem definida no briefing: terapia primeiro. */
  direitos: {
    overline: 'O que já é seu',
    titulo: 'Cinco direitos que mudam a rotina de casa',
    intro:
      'Não é lista de lei. É o que muda de verdade no dia a dia do seu filho — e o que você pode cobrar.',
    itens: [
      {
        id: 'terapia',
        titulo: 'Terapia sem limite de sessões',
        beneficio:
          'Quem decide quantas horas de terapia seu filho precisa é o médico dele, não o plano de saúde.',
        mensagem:
          'Oi! Vim pelo site. Queria saber sobre a terapia do meu filho sem limite de sessões pelo plano.',
      },
      {
        id: 'escola',
        titulo: 'Apoio na escola sem custo extra',
        beneficio: 'O acompanhante em sala de aula é obrigação da escola, não uma despesa sua.',
        mensagem: 'Oi! Vim pelo site. Queria saber sobre o apoio do meu filho na escola.',
      },
      {
        id: 'beneficio-mensal',
        titulo: 'Um valor todo mês',
        beneficio: 'Um benefício mensal que existe mesmo para quem nunca contribuiu com o INSS.',
        mensagem: 'Oi! Vim pelo site. Queria saber sobre o benefício mensal para o meu filho.',
      },
      {
        id: 'ipva',
        titulo: 'IPVA de volta',
        beneficio: 'Isenção do imposto do carro, e pode caber devolução dos anos que você já pagou.',
        mensagem: 'Oi! Vim pelo site. Queria saber sobre a isenção de IPVA no caso do meu filho.',
      },
      {
        id: 'fgts',
        titulo: 'FGTS',
        beneficio: 'Um dinheiro seu, parado, que pode ser usado para custear a terapia.',
        mensagem: 'Oi! Vim pelo site. Queria saber sobre o saque do FGTS para a terapia do meu filho.',
      },
    ] as const satisfies readonly Direito[],
    nota: 'Esses são os mais comuns, mas existem outros.',
    cta: 'Ver se o meu caso se encaixa',
    mensagem:
      'Oi! Vim pelo site. Li sobre os direitos da criança autista e queria saber se meu caso se encaixa.',
  },

  /**
   * 04. Como funciona a conversa.
   * O briefing manda usar o texto do PDF do guia — que não veio junto com o
   * briefing. Redação provisória, feita a partir do tom pedido; substituir pelo
   * texto do guia quando ele chegar e submeter à aprovação do escritório.
   */
  comoFunciona: {
    overline: 'Sem mistério',
    titulo: 'Como funciona a conversa',
    intro: 'Quatro passos. Nenhum deles envolve sair de casa.',
    etapas: [
      {
        titulo: 'Conversa',
        desc: 'Você conta o que está acontecendo, pelo WhatsApp mesmo. Sem formulário e sem compromisso.',
      },
      {
        titulo: 'Análise',
        desc: 'A gente olha o que existe no seu caso: o laudo, o contrato do plano, a resposta que a escola te deu.',
      },
      {
        titulo: 'Estratégia',
        desc: 'Explicamos, em português claro, quais caminhos existem e o que faz sentido tentar primeiro.',
      },
      {
        titulo: 'Acompanhamento',
        desc: 'Você fica sabendo de cada passo. Sem sumir e sem juridiquês.',
      },
    ],
  },

  /** 05. Quem somos e provas. */
  quemSomos: {
    overline: 'Quem vai te atender',
    titulo: 'Um escritório que já ouviu essa história antes',
    texto:
      'Somos um escritório de advocacia com sedes em Curitiba e em Goiânia e atuação em todo o Brasil. O atendimento é digital: você resolve de onde estiver, no horário que der.',
    /**
     * Foto real das sócias — é a prova de que existe gente do outro lado.
     * Versão reduzida (900px, 64KB) de public/images/equipe/dupla-3.webp, que
     * tem 9MB. A meta da página é carregar em menos de 3s no 4G.
     */
    foto: {
      src: '/images/lp/autismo-socias.webp',
      /** Da esquerda para a direita, conferido contra as fotos individuais da equipe. */
      alt: 'Jessica Vitorino e Nathalia Fava, sócias-fundadoras do Fava e Vitorino Advocacia',
      legenda: 'Jessica Vitorino e Nathalia Fava, sócias-fundadoras do escritório.',
    },
    stats: [
      { valor: '+2 mil', label: 'clientes atendidos' },
      { valor: '5,0', label: 'de nota no Google' },
      { valor: '+60', label: 'avaliações de quem já passou por aqui' },
    ],
  },

  faq: {
    titulo: 'Perguntas que toda mãe faz',
    itens: [
      {
        question: 'Como funciona a primeira conversa?',
        answer:
          'É pelo WhatsApp, direto com uma advogada. Você conta o que está acontecendo e a gente te diz se existe um direito ali. Não tem formulário para preencher nem compromisso nenhum.',
      },
      {
        question: 'Vocês atendem no meu estado?',
        answer:
          'Sim. O escritório tem sedes em Curitiba e em Goiânia, mas atua em todo o Brasil, com atendimento digital. Onde você estiver, dá para conversar.',
      },
      {
        question: 'Preciso ter documento em mãos?',
        answer:
          'Para conversar, não precisa de nada. Se o caso avançar, o que costuma ajudar é o laudo ou relatório médico, o contrato do plano de saúde e a resposta por escrito que você recebeu do plano ou da escola. Se não tiver, a gente te orienta como conseguir.',
      },
      {
        question: 'Quanto tempo demora?',
        answer:
          'Depende do caso e da resposta da outra parte. Alguns pedidos podem ter uma decisão em poucos dias; outros levam mais tempo. Na conversa a gente te dá uma expectativa realista — sem prometer prazo que não depende da gente.',
      },
    ] as const satisfies readonly FaqItem[],
  },

  ctaFinal: {
    titulo: 'Conta o que está acontecendo',
    texto:
      'Você escreve, uma advogada lê. Se existir um direito no caso do seu filho, a gente te diz — e diz também quando não existir.',
    cta: 'Falar com uma advogada agora',
    mensagem: 'Oi! Vim pelo site e queria entender os direitos do meu filho.',
  },

  /** Botão fixo do rodapé no celular — visível enquanto a pessoa rola. */
  float: {
    label: 'Falar com uma advogada',
    ariaLabel: 'Abrir conversa no WhatsApp com uma advogada',
    mensagem: 'Oi! Queria falar sobre os direitos do meu filho autista.',
  },

  rodape: {
    /** Texto obrigatório, verbatim do briefing (Provimento 205/2021 da OAB). */
    aviso:
      'Material meramente informativo, sem caráter de captação de clientela ou mercantilização da advocacia, em conformidade com o Código de Ética e Disciplina da OAB e com o Provimento 205/2021. Não constitui consulta, parecer jurídico nem promessa de resultado.',
  },
} as const;
