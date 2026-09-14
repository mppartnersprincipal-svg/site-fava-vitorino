import Image from 'next/image';

/**
 * Topo da landing page: só o logo. Sem menu — tráfego pago chega com um
 * objetivo só, e todo link de navegação é rota de fuga.
 *
 * O logo NÃO é link: sair daqui para a home é perder a conversa.
 */
export function LpHeader() {
  return (
    <header className="lp-header">
      <div className="lp-header__inner">
        <Image
          src="/images/logos/logo-horizontal-transparente.png"
          alt="Fava e Vitorino Advocacia"
          width={216}
          height={40}
          priority
          style={{ height: 34, width: 'auto' }}
        />
      </div>
    </header>
  );
}
