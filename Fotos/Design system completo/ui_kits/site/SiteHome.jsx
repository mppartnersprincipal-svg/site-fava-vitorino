import React from 'react';
import { Button } from '../../components/forms/Button.jsx';
import { Card } from '../../components/display/Card.jsx';
import { SectionHeading } from '../../components/display/SectionHeading.jsx';
import { Badge } from '../../components/display/Badge.jsx';
import { AREAS } from './areas-data.js';

const container = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' };

export function SiteHome({ onNavigate }) {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--verde-900)', position: 'relative', overflow: 'hidden' }}>
        <img src="../../assets/logo-simbolo-transparente.png" alt="" style={{ position: 'absolute', right: -80, bottom: -120, height: 520, opacity: 0.08, pointerEvents: 'none' }} />
        <div style={{ ...container, padding: '112px 24px 120px', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 720 }}>
            <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--accent)' }}>Advocacia patrimonial</span>
            <h1 style={{ margin: 0, font: 'var(--text-display)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-on-dark)' }}>
              Estratégia jurídica para proteger o que você construiu
            </h1>
            <span style={{ width: 48, height: 2, background: 'var(--accent)' }} />
            <p style={{ margin: 0, font: 'var(--text-body-lg)', color: 'var(--text-on-dark-muted)', maxWidth: 560 }}>
              Atuação consultiva e contenciosa em demandas patrimoniais — família e sucessões, imobiliário, empresarial e bancário.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <Button variant="gold" size="lg" onClick={() => onNavigate('contato')}>Fale com o escritório</Button>
              <Button variant="outline-on-dark" size="lg" onClick={() => onNavigate('areas')}>Áreas de atuação</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas em destaque */}
      <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={{ ...container, display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          <SectionHeading overline="Áreas de atuação" title="Onde atuamos" lead="Dez frentes, um objetivo: segurança nas suas decisões patrimoniais." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {AREAS.slice(0, 6).map((a) => (
              <Card key={a.nome} interactive onClick={() => onNavigate('areas')}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 32, height: 2, background: 'var(--accent)' }} />
                  <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-title)' }}>{a.nome}</div>
                  <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{a.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <Button variant="outline" style={{ alignSelf: 'flex-start' }} onClick={() => onNavigate('areas')}>Ver todas as áreas</Button>
        </div>
      </section>

      {/* Como atuamos */}
      <section style={{ background: 'var(--verde-900)', padding: '96px 0' }}>
        <div style={{ ...container, display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          <SectionHeading onDark overline="Método" title="Como atuamos" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {[
              ['01', 'Diagnóstico', 'Entendemos o caso e o patrimônio em jogo antes de qualquer tese.'],
              ['02', 'Estratégia', 'Definimos o caminho — consultivo ou contencioso — com riscos e cenários claros.'],
              ['03', 'Condução', 'Executamos com rigor técnico e comunicação direta, do início ao desfecho.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ font: '600 40px/1 var(--font-title)', color: 'var(--accent)' }}>{n}</span>
                <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-on-dark)' }}>{t}</div>
                <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O escritório */}
      <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={{ ...container, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ background: 'var(--verde-100)', border: '1px dashed var(--verde-700)', borderRadius: 'var(--radius-md)', height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', color: 'var(--verde-700)' }}>
            FOTO DO ESCRITÓRIO
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
            <SectionHeading overline="O escritório" title="Advocacia moderna, postura estratégica" />
            <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-body)' }}>
              Falamos de resultado, não de processo. Cada caso recebe um plano com cenários, riscos e prazos — e você acompanha tudo em linguagem direta, sem juridiquês.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Badge tone="gold">Atendimento em todo o Brasil</Badge>
              <Badge tone="sand">Consultivo e contencioso</Badge>
            </div>
            <Button variant="primary" onClick={() => onNavigate('contato')}>Agendar conversa</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
