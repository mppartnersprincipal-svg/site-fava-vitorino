'use client';

// Página temporária da Fase 2 para validação visual do design system portado.
// Removida na Fase 9 (fechamento).

import { useState } from 'react';
import {
  Accordion, Badge, Button, Card, Checkbox, Dialog, Input, Radio, Select,
  SectionHeading, Switch, Tabs, Tag, Textarea, Toast, Tooltip,
} from '@/components/ds';

function Specimen({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <h2 style={{ font: 'var(--text-h2)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-title)' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'flex-start' }}>{children}</div>
    </section>
  );
}

export default function Styleguide() {
  const [tab, setTab] = useState('familia');
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState<string | undefined>('pf');
  const [on, setOn] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', paddingBlock: 'var(--space-8)' }}>
      <SectionHeading
        as="h1"
        overline="Design system"
        title="Styleguide"
        lead="Validação visual dos 15 componentes portados do design system Fava e Vitorino."
      />

      <Specimen title="Button">
        <Button>Primary</Button>
        <Button variant="gold">Gold</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <span style={{ background: 'var(--verde-900)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)' }}>
          <Button variant="outline-on-dark">Outline on dark</Button>
        </span>
      </Specimen>

      <Specimen title="Card">
        <Card style={{ maxWidth: 280 }}>Card light — conteúdo sobre superfície branca.</Card>
        <Card tone="sand" style={{ maxWidth: 280 }}>Card sand — superfície areia clara.</Card>
        <Card tone="dark" style={{ maxWidth: 280 }}>Card dark — superfície verde escura.</Card>
        <Card interactive style={{ maxWidth: 280 }}>Card interativo — sombra no hover.</Card>
      </Specimen>

      <Specimen title="SectionHeading">
        <SectionHeading overline="Overline" title="Título de seção" lead="Lead da seção com texto de apoio." />
      </Specimen>

      <Specimen title="Badge e Tag">
        <Badge>Gold</Badge>
        <Badge tone="green">Green</Badge>
        <Badge tone="sand">Sand</Badge>
        <Tag>Tag simples</Tag>
        <Tag onRemove={() => undefined}>Removível</Tag>
      </Specimen>

      <Specimen title="Tabs">
        <Tabs
          tabs={[{ value: 'familia', label: 'Família' }, { value: 'patrimonial', label: 'Patrimonial' }, { value: 'bancario', label: 'Bancário' }]}
          value={tab}
          onChange={setTab}
        />
      </Specimen>

      <Specimen title="Accordion (com ARIA)">
        <div style={{ width: '100%', maxWidth: 560 }}>
          <Accordion
            items={[
              { title: 'Como funciona o atendimento?', content: 'Todo o atendimento é digital, por videochamada, WhatsApp e e-mail.' },
              { title: 'Atendem em todo o Brasil?', content: 'Sim. Estrutura 100% digital com atuação nacional.' },
              { title: 'O que é Visual Law?', content: 'Metodologia que usa recursos visuais para tornar documentos jurídicos mais claros.' },
            ]}
          />
        </div>
      </Specimen>

      <Specimen title="Formulários">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: '100%', maxWidth: 420 }}>
          <Input label="Nome" placeholder="Seu nome completo" hint="Como você prefere ser chamado." />
          <Select label="Área" options={['Direito de Família', 'Revisional Bancária', 'Planejamento Patrimonial']} />
          <Textarea label="Mensagem" placeholder="Conte sua situação" />
          <Checkbox checked={checked} onChange={setChecked} label="Li e aceito a política de privacidade" />
          <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
            <Radio name="tipo" value="pf" checked={radio === 'pf'} onChange={setRadio} label="Pessoa física" />
            <Radio name="tipo" value="pj" checked={radio === 'pj'} onChange={setRadio} label="Pessoa jurídica" />
          </div>
          <Switch checked={on} onChange={setOn} label="Receber novidades" />
        </div>
      </Specimen>

      <Specimen title="Toast">
        <Toast title="Mensagem enviada">Retornaremos em até 24 horas úteis.</Toast>
        <Toast tone="error" title="Erro" onClose={() => undefined}>Não foi possível enviar. Tente novamente.</Toast>
        <Toast tone="info" title="Informação">Atendimento presencial somente com hora marcada.</Toast>
      </Specimen>

      <Specimen title="Tooltip">
        <Tooltip text="Fale com o escritório">
          <Button variant="gold">Passe o mouse</Button>
        </Tooltip>
      </Specimen>

      <Specimen title="Dialog">
        <Button onClick={() => setDialogOpen(true)}>Abrir dialog</Button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Mensagem enviada"
          footer={<Button variant="gold" onClick={() => setDialogOpen(false)}>Fechar</Button>}
        >
          Recebemos sua mensagem e retornaremos em até 24 horas úteis.
        </Dialog>
      </Specimen>
    </main>
  );
}
