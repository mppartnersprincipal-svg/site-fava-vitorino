import type { Metadata } from 'next';
import { Card, SectionHeading } from '@/components/ds';
import { Section } from '@/components/sections/Section';
import { Reveal } from '@/components/sections/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { WhatsAppCta } from '@/components/sections/WhatsAppCta';
import { CONTATO } from '@/content/data/contato';
import { SITE } from '@/content/data/site';
import { PENDING } from '@/content/data/pending';

export const metadata: Metadata = {
  title: 'Contato — Fava e Vitorino Advocacia',
  description:
    'Fale com o escritório Fava e Vitorino. Atendimento de segunda a sexta, das 9h às 18h. WhatsApp, e-mail e agendamento online.',
};

const channelLabel: React.CSSProperties = {
  font: 'var(--text-overline)',
  letterSpacing: 'var(--tracking-overline)',
  textTransform: 'uppercase',
  color: 'var(--accent)',
};

const channelValue: React.CSSProperties = {
  font: 'var(--text-body-md)',
  color: 'var(--text-on-dark-muted)',
  textDecoration: 'none',
  overflowWrap: 'anywhere',
};

export default function ContatoPage() {
  return (
    <Section tone="areia" containerStyle={{ paddingBlock: 'clamp(48px, 7vw, 80px)' }}>
      <Reveal>
        <SectionHeading as="h1" overline="Contato" title={CONTATO.titulo} lead={CONTATO.texto} />
      </Reveal>

      <div className="split" style={{ marginTop: 'var(--space-7)', alignItems: 'stretch', gridTemplateColumns: undefined }}>
        <Reveal>
          <Card tone="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h2
              style={{
                margin: 0,
                font: 'var(--text-h3)',
                letterSpacing: 'var(--tracking-title)',
                textTransform: 'uppercase',
                color: 'var(--text-on-dark)',
              }}
            >
              Canais de atendimento
            </h2>
            <span aria-hidden="true" style={{ width: 32, height: 2, background: 'var(--accent)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={channelLabel}>WhatsApp</span>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" style={channelValue}>
                {SITE.whatsappDisplay}
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={channelLabel}>E-mail</span>
              {SITE.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} style={channelValue}>
                  {email}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={channelLabel}>Horário de atendimento</span>
              <span style={channelValue}>{SITE.horario}</span>
              <span style={channelValue}>Canais digitais disponíveis 24h (retorno em horário comercial)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={channelLabel}>Atendimento presencial</span>
              <span style={channelValue}>{SITE.atendimentoPresencial}</span>
              <span style={channelValue}>{PENDING.endereco}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={channelLabel}>Redes sociais</span>
              <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" style={channelValue}>
                Instagram {SITE.instagram.handle}
              </a>
              {PENDING.facebookUrl && (
                <a href={PENDING.facebookUrl} target="_blank" rel="noopener noreferrer" style={channelValue}>
                  Facebook
                </a>
              )}
            </div>

            <div style={{ marginTop: 'auto' }}>
              <WhatsAppCta
                message="Olá! Vim pelo site do Fava e Vitorino e gostaria de uma orientação."
                location="contato_card"
                variant="gold"
              >
                Falar no WhatsApp agora
              </WhatsAppCta>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card style={{ height: '100%' }}>
            <h2
              style={{
                margin: '0 0 var(--space-5)',
                font: 'var(--text-h3)',
                letterSpacing: 'var(--tracking-title)',
                textTransform: 'uppercase',
                color: 'var(--text-title)',
              }}
            >
              {CONTATO.form.titulo}
            </h2>
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
