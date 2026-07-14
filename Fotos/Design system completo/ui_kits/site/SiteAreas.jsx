import React from 'react';
import { Card } from '../../components/display/Card.jsx';
import { SectionHeading } from '../../components/display/SectionHeading.jsx';
import { Button } from '../../components/forms/Button.jsx';
import { AREAS } from './areas-data.js';

export function SiteAreas({ onNavigate }) {
  return (
    <main style={{ background: 'var(--surface-page)' }}>
      <section style={{ background: 'var(--verde-900)', padding: '72px 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading onDark overline="Áreas de atuação" title="Dez frentes de atuação" lead="Consultivo e contencioso, para pessoas físicas e jurídicas." />
        </div>
      </section>
      <section style={{ padding: '72px 0 96px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {AREAS.map((a) => (
              <Card key={a.nome}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 32, height: 2, background: 'var(--accent)' }} />
                  <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-title)' }}>{a.nome}</div>
                  <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{a.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card tone="dark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-on-dark)', marginBottom: 8 }}>Não encontrou o seu caso?</div>
              <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>Conte a situação — indicamos o caminho, mesmo que não seja conosco.</p>
            </div>
            <Button variant="gold" onClick={() => onNavigate('contato')}>Fale com o escritório</Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
