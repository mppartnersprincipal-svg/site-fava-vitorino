import Image from 'next/image';

export interface SiteWordmarkProps {
  onDark?: boolean;
  height?: number;
}

/**
 * Composição da marca. Sobre fundo escuro usa o logo horizontal transparente;
 * sobre fundo claro compõe símbolo em bloco verde + nome em Montserrat
 * (regra da marca: logos transparentes só funcionam sobre verde-escuro).
 */
export function SiteWordmark({ onDark, height = 34 }: SiteWordmarkProps) {
  if (onDark) {
    return (
      <Image
        src="/images/logos/logo-horizontal-transparente.png"
        alt="Fava e Vitorino Advocacia"
        width={Math.round((817 / 151) * height)}
        height={height}
        style={{ height, width: 'auto' }}
      />
    );
  }
  const symbolHeight = height - 10;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, flex: 'none' }}>
      <span style={{ background: 'var(--verde-900)', borderRadius: 'var(--radius-sm)', padding: 6, display: 'inline-flex' }}>
        <Image
          src="/images/logos/logo-simbolo-transparente.png"
          alt=""
          aria-hidden="true"
          width={Math.round((567 / 510) * symbolHeight)}
          height={symbolHeight}
          style={{ height: symbolHeight, width: 'auto' }}
        />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ font: '600 15px/1.2 var(--font-title)', letterSpacing: '0.14em', color: 'var(--accent-strong)', whiteSpace: 'nowrap' }}>
          FAVA E VITORINO
        </span>
        <span style={{ font: '500 9px/1.4 var(--font-title)', letterSpacing: '0.3em', color: 'var(--verde-900)', whiteSpace: 'nowrap' }}>
          ADVOCACIA
        </span>
      </span>
    </span>
  );
}
