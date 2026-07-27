import Image from 'next/image';
import { Card, SectionHeading } from '@/components/ds';
import { ButtonLink } from '@/components/ds/forms/ButtonLink';
import { Reveal } from './Reveal';
import { Section } from './Section';
import { SITE } from '@/content/data/site';
import { PENDING } from '@/content/data/pending';

export interface LocationSectionProps {
  titulo: string;
  /** Frase de destaque (ex.: "Atendimento presencial somente com hora marcada."). */
  nota: string;
  botao: string;
}

function InfoLabel({ children }: { children: string }) {
  return (
    <span
      style={{
        font: 'var(--text-overline)',
        letterSpacing: 'var(--tracking-overline)',
        textTransform: 'uppercase',
        color: 'var(--accent-text)',
      }}
    >
      {children}
    </span>
  );
}

/**
 * Endereço físico do escritório em Curitiba, com link para o Google Maps.
 * Renderiza a própria <section>: com PENDING.fotoEscritorio definida, usa a foto
 * do prédio como fundo (com sobreposição verde para legibilidade); sem foto,
 * mantém o fundo areia padrão.
 */
export function LocationSection({ titulo, nota, botao }: LocationSectionProps) {
  const foto = PENDING.fotoEscritorio;
  const content = (
    <div className="split" style={{ alignItems: 'start' }}>
      <Reveal>
        <SectionHeading overline="Onde estamos" title={titulo} lead={nota} onDark={Boolean(foto)} />
      </Reveal>
      <Reveal delay={100}>
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', padding: 'clamp(24px, 4vw, 40px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <InfoLabel>Endereço</InfoLabel>
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>
              {SITE.endereco.logradouro}
              <br />
              {SITE.endereco.cidade} - {SITE.endereco.uf}, {SITE.endereco.cep}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <InfoLabel>Horário de atendimento</InfoLabel>
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>{SITE.horario}</p>
          </div>
          {PENDING.googleMapsUrl && (
            <div>
              <ButtonLink href={PENDING.googleMapsUrl} variant="outline">
                {botao} →
              </ButtonLink>
            </div>
          )}
        </Card>
      </Reveal>
    </div>
  );

  if (!foto) return <Section tone="areia">{content}</Section>;

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-dark)', color: 'var(--text-on-dark)' }}>
      <Image
        src={foto}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8, 50, 36, 0.92) 0%, rgba(8, 50, 36, 0.72) 55%, rgba(8, 50, 36, 0.5) 100%)',
        }}
      />
      <div className="container" style={{ position: 'relative', paddingBlock: 'clamp(48px, 8vw, 96px)' }}>
        {content}
      </div>
    </section>
  );
}
