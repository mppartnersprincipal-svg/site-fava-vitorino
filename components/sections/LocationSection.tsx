import { Card, SectionHeading } from '@/components/ds';
import { ButtonLink } from '@/components/ds/forms/ButtonLink';
import { Reveal } from './Reveal';
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

/** Endereço físico do escritório em Curitiba, com link para o Google Maps. */
export function LocationSection({ titulo, nota, botao }: LocationSectionProps) {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <Reveal>
        <SectionHeading overline="Onde estamos" title={titulo} lead={nota} />
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
}
