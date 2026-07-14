import React from 'react';
import { Button } from '../../components/forms/Button.jsx';
import { Input, Textarea } from '../../components/forms/Input.jsx';
import { Select } from '../../components/forms/Select.jsx';
import { Checkbox } from '../../components/forms/Checkbox.jsx';
import { Card } from '../../components/display/Card.jsx';
import { SectionHeading } from '../../components/display/SectionHeading.jsx';
import { Dialog } from '../../components/overlay/Dialog.jsx';
import { AREAS } from './areas-data.js';

export function SiteContato() {
  const [ok, setOk] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return (
    <main style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <SectionHeading overline="Contato" title="Fale com o escritório" lead="Resposta em até um dia útil. A primeira conversa serve para entender o caso — sem compromisso." />
          <Card tone="dark">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' }}>
              <span style={{ font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--accent)' }}>Canais</span>
              <span>contato@favaevitorino.adv.br</span>
              <span>(41) 99999-9999 — WhatsApp</span>
              <span>Atendimento em todo o Brasil</span>
            </div>
          </Card>
        </div>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Nome" placeholder="Seu nome completo" />
              <Input label="Telefone" placeholder="(41) 99999-9999" />
            </div>
            <Input label="E-mail" type="email" placeholder="voce@email.com" />
            <Select label="Área de interesse" options={AREAS.map((a) => a.nome)} />
            <Textarea label="Mensagem" hint="Descreva brevemente a situação." rows={5} placeholder="Conte o essencial do caso" />
            <Checkbox checked={ok} onChange={setOk} label="Li e concordo com a política de privacidade" />
            <Button variant="gold" size="lg" disabled={!ok} onClick={() => setSent(true)} style={{ alignSelf: 'flex-start' }}>Enviar mensagem</Button>
          </div>
        </Card>
      </div>
      <Dialog open={sent} onClose={() => setSent(false)} title="Mensagem enviada" footer={<Button variant="primary" size="sm" onClick={() => setSent(false)}>Fechar</Button>}>
        Recebemos a sua mensagem. O escritório responde em até um dia útil.
      </Dialog>
    </main>
  );
}
