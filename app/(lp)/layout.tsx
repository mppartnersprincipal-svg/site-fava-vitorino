/**
 * Cromo das landing pages de campanha: nenhum. Sem menu, sem rodapé
 * institucional e sem o botão flutuante do site — cada LP monta o próprio
 * cabeçalho, rodapé e CTA, porque o número de WhatsApp, a mensagem
 * pré-preenchida e os eventos de analytics mudam por campanha.
 *
 * Motivo: tráfego pago chega com um objetivo só. Toda saída extra (menu,
 * links do rodapé institucional) é rota de fuga que não converte.
 */
export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main id="conteudo">{children}</main>;
}
