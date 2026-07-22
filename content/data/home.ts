import { PENDING } from './pending';
import type { FaqItem } from '@/lib/schema';

/** Copy canônica da Home (PRD 1.1). */
export const HOME = {
  hero: {
    headline: 'Estratégia jurídica para proteger tudo o que você construiu.',
    sub: 'Sua família, sua empresa, seu legado. O Fava e Vitorino une técnica, tecnologia e atendimento humano para oferecer soluções jurídicas personalizadas para famílias, patrimônios e empresas — com clareza do início ao fim.',
    ctaPrimario: 'Fale com nosso time no WhatsApp',
    ctaSecundario: 'Conheça nossos serviços',
    whatsappMessage: 'Olá! Vim pelo site do Fava e Vitorino e gostaria de uma orientação.',
  },

  areas: {
    titulo: 'Áreas de atuação',
    sub: 'Cada situação exige uma estratégia diferente. Atuamos de forma especializada nas áreas que impactam diretamente a segurança da sua família, do seu patrimônio e do seu negócio.',
  },

  quemSomos: {
    titulo: 'Quem somos',
    paragrafos: [
      'O Fava e Vitorino Advocacia nasceu da união profissional das advogadas Nathalia Fava e Jessica Vitorino, com o propósito de construir um escritório moderno, estratégico e próximo de seus clientes.',
      'Com atuação nacional e estrutura 100% digital, o escritório foi estruturado para oferecer uma advocacia que une técnica jurídica, tecnologia e proximidade real com o cliente. O objetivo é compreender profundamente a realidade de cada pessoa e empresa, antecipar riscos e desenvolver soluções personalizadas.',
    ],
    destaque:
      'No Fava e Vitorino, cada cliente é tratado como único — e nunca como apenas mais um processo. Usamos Visual Law, metodologia sobre a qual uma das sócias desenvolveu pesquisa acadêmica de mestrado, para tornar documentos e informações mais claros, visuais e acessíveis.',
    cta: 'Conheça nossa história',
  },

  diferenciais: {
    titulo: 'Por que o Fava e Vitorino',
    itens: [
      {
        titulo: 'Atendimento humanizado',
        desc: 'Escutamos com atenção, entendemos a história por trás de cada situação e acompanhamos você de perto durante todo o caminho.',
        icon: 'heart' as const,
      },
      {
        titulo: 'Visual Law',
        desc: 'Transformamos documentos jurídicos em materiais claros e visuais, para que você entenda cada etapa sem precisar decifrar juridiquês.',
        icon: 'presentation' as const,
      },
      {
        titulo: 'Tecnologia e inovação',
        desc: 'Usamos inteligência artificial e ferramentas digitais para tornar o atendimento mais ágil, organizado e eficiente.',
        icon: 'cpu' as const,
      },
      {
        titulo: 'Atuação nacional',
        desc: 'Estrutura 100% digital que permite atender clientes em todo o Brasil com a mesma qualidade e proximidade.',
        icon: 'globe' as const,
      },
      {
        titulo: 'Transparência total',
        desc: 'Você sabe o que está acontecendo em cada etapa. Sem surpresas, sem letras miúdas, sem promessas vazias.',
        icon: 'eye' as const,
      },
      {
        titulo: 'Estratégia personalizada',
        desc: 'Cada caso é único. Analisamos a sua realidade antes de propor qualquer caminho, para entregar a solução que faz sentido para você.',
        icon: 'target' as const,
      },
    ],
  },

  stats: [
    { valor: '+2 mil', label: 'clientes atendidos pelo Fava e Vitorino' },
    { valor: '100% digital', label: 'atuação nacional com estrutura completa' },
    { valor: 'Visual Law', label: 'pioneiros na aplicação em relatórios e documentos jurídicos' },
  ],

  depoimentos: {
    titulo: 'O que dizem nossos clientes',
    itens: PENDING.depoimentos,
  },

  localizacao: {
    titulo: 'Nosso escritório em Curitiba',
    nota: 'Atendimento presencial somente com hora marcada.',
    botao: 'Como chegar',
  },

  faq: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        question: 'Como funciona o atendimento online?',
        answer:
          'Todo o nosso atendimento é feito de forma digital — por videochamada, WhatsApp e e-mail. Você é atendido com a mesma qualidade e proximidade de um escritório presencial, sem precisar sair de casa. Atendimento presencial é possível com hora marcada.',
      },
      {
        question: 'O escritório atende em todo o Brasil?',
        answer:
          'Sim. Nossa estrutura é 100% digital, o que nos permite atuar em qualquer estado. Atendemos clientes de todas as regiões do país.',
      },
      {
        question: 'Preciso ter todos os documentos em mãos para iniciar o atendimento?',
        answer:
          'Não. No atendimento inicial, orientamos você sobre quais documentos são necessários e como obtê-los. Você não precisa ter tudo pronto para dar o primeiro passo.',
      },
      {
        question: 'O que é Visual Law?',
        answer:
          'Visual Law é uma metodologia que usa recursos visuais — como infográficos, fluxogramas e linguagem simplificada — para tornar documentos jurídicos mais claros e acessíveis. Uma das nossas sócias desenvolveu pesquisa acadêmica de mestrado sobre o tema, e aplicamos essa metodologia em todos os nossos atendimentos e documentos.',
      },
      {
        question: 'Quanto custa o atendimento inicial?',
        answer:
          'O atendimento inicial não tem custo. É uma conversa sem compromisso para entendermos a sua situação e indicarmos os caminhos possíveis. Ele é diferente da consultoria jurídica, que é um serviço pago — e, nesse caso, você recebe antes uma proposta clara, com escopo e valores definidos.',
      },
    ] satisfies FaqItem[],
  },

  ctaFinal: {
    titulo: 'Sua situação merece atenção especializada.',
    texto:
      'Fale com o Fava e Vitorino e receba uma orientação clara, sem compromisso, sobre o melhor caminho para o seu caso.',
    botaoPrimario: 'Atendimento 24 horas',
  },
} as const;
