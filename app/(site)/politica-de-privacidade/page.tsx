import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ds';
import { Section } from '@/components/sections/Section';
import { PRIVACIDADE } from '@/content/data/privacidade';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Fava e Vitorino Advocacia',
  description:
    'Quais dados este site coleta, para que servem e como recusar os cookies de medição.',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <Section tone="areia">
      <SectionHeading
        as="h1"
        overline={`Atualizada em ${PRIVACIDADE.atualizadoEm}`}
        title="Política de Privacidade"
        lead={PRIVACIDADE.intro}
      />

      <div className="prose" style={{ marginTop: 'var(--space-8)' }}>
        {PRIVACIDADE.blocos.map((bloco) => (
          <section key={bloco.titulo}>
            <h2>{bloco.titulo}</h2>
            {bloco.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </Section>
  );
}
