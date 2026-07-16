/**
 * Avaliações reais do Google Meu Negócio (perfil "Fava e Vitorino Advocacia").
 * Coletadas em 16/07/2026 direto da ficha do Google Maps. Textos verbatim;
 * avaliações muito longas foram encurtadas por corte em fim de frase (sem reescrita).
 * Ficha: https://maps.google.com/?cid=15812551867850209934
 *
 * Para atualizar: abrir a ficha, copiar novas avaliações e ajustar `meta`.
 */
export interface GoogleReview {
  nome: string;
  /** 1–5 (na coleta, todas as selecionadas eram 5). */
  estrelas: number;
  texto: string;
  /** Referência de quando foi publicada (na data da coleta) — não exibido no site para não envelhecer. */
  quando: string;
}

export const GOOGLE_REVIEWS = {
  meta: {
    nota: '5,0',
    totalAvaliacoes: 63,
    url: 'https://maps.google.com/?cid=15812551867850209934',
  },

  itens: [
    {
      nome: 'Victor Hugo',
      estrelas: 5,
      quando: '2 meses atrás',
      texto:
        'Quero agradecer vocês pelo trabalho prestado, vocês tem sido ótimas pessoas, estou feliz em ser cliente de vocês, isso é um grande diferencial atualmente, profissionais que tem atenção e sabem realmente o que fazer no curso de uma prestação de serviço!!!',
    },
    {
      nome: 'Ana Nolêto',
      estrelas: 5,
      quando: '4 meses atrás',
      texto: 'Muito prestativas, resolvendo nossas questões jurídicas de forma rapida e clara',
    },
    {
      nome: 'Anna Rita Araújo',
      estrelas: 5,
      quando: '4 meses atrás',
      texto:
        'Atendimento de excelência e atenção ao cliente! Se dedicaram à minha causa com muito profissionalismo e já estou recebendo os resultados positivos. Recomendo.',
    },
    {
      nome: 'Guilherme Fonseca',
      estrelas: 5,
      quando: '6 meses atrás',
      texto:
        'Dra Nathalia muito transparente em todas as conversas, se mostrando uma profissional de caráter, sem informações e promessas mirabolantes! Fiquei extremamente satisfeito com a avaliação dela sobre meu caso!',
    },
    {
      nome: 'Marcelo Addad',
      estrelas: 5,
      quando: '6 meses atrás',
      texto: 'Excelente atendimento, suporte e consultoria! Recomendo a todos! Profissionais de excelência!',
    },
    {
      nome: 'Tamires Sousa',
      estrelas: 5,
      quando: '8 meses atrás',
      texto:
        'Tive o prazer de ser atendida pela Dra Jéssica Vitorina e Dra Nathalia Fava e Dra Natália Venâncio, ótimas profissionais de uma presteza excepcional.',
    },
    {
      nome: 'Carolaine Rodrigues',
      estrelas: 5,
      quando: '9 meses atrás',
      texto:
        'Excelentes profissionais! Foram atenciosas, dedicadas e muito claras em todas as explicações. Passaram confiança e resolveram meu caso com eficiência. Recomendo de olhos fechados!',
    },
    {
      nome: 'Esdras Junior',
      estrelas: 5,
      quando: '10 meses atrás',
      texto:
        'Excelente Atendimento, meu processo foi realizado com sucesso e muito rápido, quero agradecer a Equipe de Advocacia.',
    },
    {
      nome: 'Miguel Borges',
      estrelas: 5,
      quando: '10 meses atrás',
      texto: 'Excelentes advogadas! Resolveram tudo de forma rápida e prática.',
    },
    {
      nome: 'Jota Vê Ribeiro',
      estrelas: 5,
      quando: 'um ano atrás',
      texto:
        'Tive a grande felicidade de ser atendido pela Dra. Nathalia, e só posso dizer que ela é excepcional! Profissional extremamente competente, atenciosa, ética e comprometida com o que faz. Desde o primeiro atendimento, demonstrou profundo conhecimento jurídico e uma empatia rara de se encontrar.',
    },
    {
      nome: 'Guilherme Scaramella',
      estrelas: 5,
      quando: 'um ano atrás',
      texto:
        'Gostaria de expressar minha total satisfação com o atendimento e a excelência do trabalho realizado por toda a equipe do Fava e Vitorino. A clareza nas informações, a agilidade nas respostas e a segurança transmitida em cada etapa do processo me fizeram sentir totalmente amparado.',
    },
    {
      nome: 'Mari Brentano',
      estrelas: 5,
      quando: 'um ano atrás',
      texto:
        'A Nathalia Fava é responsável pelo jurídico da nossa empresa há mais de 1 ano, nossos contratos nos passam muita mais segurança depois que os remodelamos com ela e ela sempre nos auxiliou em todas as burocracias, respondendo em tempo hábil e de forma super solícita, explicando todas nossas dúvidas!',
    },
    {
      nome: 'Marjori Costa',
      estrelas: 5,
      quando: 'um ano atrás',
      texto:
        'Excelente atendimento, agilidade no que precisa ser feito e com suporte a disposição. Estou com processo em andamento e estou satisfeita com o trabalho da Dra Nathália.',
    },
    {
      nome: 'Ivan Brizuela',
      estrelas: 5,
      quando: 'um ano atrás',
      texto:
        'Sou cliente da Dra Vitorino e da Dra Fava, sempre atenciosas, explicando o processo da maneira mais simples para quem não sabe dos processos legais. Desejo muito sucesso',
    },
    {
      nome: 'Juliana Corrêa',
      estrelas: 5,
      quando: '2 anos atrás',
      texto:
        'Dra. Nathalia é muito ágil, prestativa e cuidadosa. Sempre atenta a tudo e com ótimas estratégias para cada caso. A cada movimentação no processo ela informa, deixando o cliente ciente de tudo o que está acontecendo.',
    },
    {
      nome: 'Pamelle Lima',
      estrelas: 5,
      quando: '2 anos atrás',
      texto:
        'A Nat é maravilhosa, conseguiu resolver duas crises jurídicas do meu negócio com calma, tranquilidade e seriedade. Sempre muito disponível, cordial e ética. Trabalho impecável.',
    },
    {
      nome: 'Ana Lucia Santos Coelho',
      estrelas: 5,
      quando: '2 anos atrás',
      texto:
        'A Nathalia é muito prestativa e atenciosa no que faz. O cliente se sente acolhido e ouvido, de verdade. Ela resolveu minhas questões num piscar de olhos. Foi sensacional!',
    },
    {
      nome: 'Meriele De Borba',
      estrelas: 5,
      quando: '2 anos atrás',
      texto:
        'Ótima profissional, muito dedicada, me ajudou e tirou minhas dúvidas sempre que precisei, explicou e me orientou para tomar a melhor decisão, me passando relatórios mensais do andamento. Recomendo seu trabalho.',
    },
  ],
} as const;
