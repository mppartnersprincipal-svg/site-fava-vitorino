/**
 * Política de Privacidade — texto exibido em /politica-de-privacidade.
 *
 * ⚠️ CONTEÚDO JURÍDICO: precisa de aprovação do escritório antes de publicar,
 * como todo texto de direito (regra do briefing). A redação abaixo descreve o
 * que o site DE FATO faz hoje:
 *   • Não há banco de dados nem backend: o formulário de /contato apenas monta
 *     uma mensagem e abre o WhatsApp (components/sections/ContactForm.tsx).
 *   • As landing pages de campanha não têm formulário nenhum.
 *   • Os únicos dados coletados vêm de cookies de terceiros: Google Analytics 4
 *     e Pixel da Meta (components/analytics/Analytics.tsx).
 * Se algum desses pontos mudar, este texto muda junto.
 */

export const PRIVACIDADE = {
  atualizadoEm: 'setembro de 2026',

  intro:
    'Esta política explica, em linguagem simples, quais dados este site coleta, para que servem e o que você pode fazer a respeito.',

  blocos: [
    {
      titulo: 'Quem é responsável',
      paragrafos: [
        'O responsável pelo tratamento dos dados deste site é o escritório Fava e Vitorino Advocacia. Os dados de identificação e o e-mail de contato estão no rodapé de todas as páginas.',
      ],
    },
    {
      titulo: 'O que o site não faz',
      paragrafos: [
        'Este site não tem cadastro, não tem área de login e não guarda seus dados em banco de dados nenhum.',
        'O formulário da página de contato não envia nada para um servidor: ele apenas monta uma mensagem com o que você escreveu e abre o WhatsApp, para você decidir se envia ou não. As páginas de campanha não têm formulário.',
      ],
    },
    {
      titulo: 'Cookies de medição',
      paragrafos: [
        'Usamos Google Analytics 4 e Pixel da Meta (Facebook e Instagram). Essas ferramentas gravam cookies no seu navegador e coletam dados de navegação: páginas visitadas, tempo na página, cliques em botões, tipo de dispositivo, navegador e uma localização aproximada a partir do endereço de IP.',
        'Servem para entender quais conteúdos ajudam quem chega até aqui e para medir o resultado dos anúncios. Não usamos esses dados para identificar você pelo nome.',
        'Base legal: legítimo interesse em medir e melhorar a comunicação do escritório (art. 7º, IX, da LGPD).',
      ],
    },
    {
      titulo: 'Com quem os dados são compartilhados',
      paragrafos: [
        'Os dados de navegação descritos acima ficam com o Google e com a Meta, cada um sob a própria política de privacidade, e podem ser processados fora do Brasil. Não vendemos nem cedemos dados a mais ninguém.',
      ],
    },
    {
      titulo: 'Como recusar os cookies',
      paragrafos: [
        'Você pode bloquear ou apagar cookies nas configurações do seu navegador, e pode instalar o complemento oficial de desativação do Google Analytics. Bloquear esses cookies não impede o uso de nenhuma parte do site.',
      ],
    },
    {
      titulo: 'Se você nos escrever pelo WhatsApp',
      paragrafos: [
        'A conversa passa a ser tratada como qualquer atendimento do escritório: o que você contar é coberto pelo sigilo profissional da advocacia e usado apenas para analisar e conduzir o seu caso.',
      ],
    },
    {
      titulo: 'Seus direitos',
      paragrafos: [
        'A LGPD garante a você o direito de confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir a exclusão dos que forem desnecessários e revogar consentimento. Para exercer qualquer um deles, escreva para o e-mail que está no rodapé — respondemos no prazo legal.',
      ],
    },
    {
      titulo: 'Mudanças nesta política',
      paragrafos: [
        'Se as ferramentas do site mudarem, este texto muda junto, e a data de atualização no topo é alterada.',
      ],
    },
  ],
} as const;
