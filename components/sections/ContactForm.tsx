'use client';

import { useId, useState, type FormEvent } from 'react';
import { Button, Input, Select, Textarea } from '@/components/ds';
import { whatsappUrl } from '@/lib/whatsapp';
import { trackLead } from '@/lib/analytics';
import { CONTATO } from '@/content/data/contato';

/**
 * Formulário sem backend: monta a mensagem e abre o WhatsApp do escritório
 * com o texto pré-preenchido (decisão de projeto — canal que mais converte).
 */
export function ContactForm() {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState<string>(CONTATO.form.areas[0]);
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<{ nome?: string; mensagem?: string }>({});
  const errorNomeId = useId();
  const errorMensagemId = useId();

  const errorStyle: React.CSSProperties = {
    font: 'var(--text-body-sm)',
    color: 'var(--feedback-error)',
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!nome.trim()) next.nome = 'Informe seu nome para o escritório saber com quem fala.';
    if (!mensagem.trim()) next.mensagem = 'Conte brevemente sua situação para agilizar o atendimento.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const texto = [
      `Olá! Meu nome é ${nome.trim()}.`,
      `Assunto: ${area}.`,
      `Situação: ${mensagem.trim()}`,
      '(Mensagem enviada pelo site do Fava e Vitorino)',
    ].join('\n');

    trackLead('form_submit', { location: 'contato', area });
    window.open(whatsappUrl(texto), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div>
        <Input
          label="Seu nome"
          placeholder="Como podemos te chamar?"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? errorNomeId : undefined}
        />
        {errors.nome && (
          <p id={errorNomeId} role="alert" style={{ ...errorStyle, margin: '6px 0 0' }}>
            {errors.nome}
          </p>
        )}
      </div>

      <Select
        label="Área ou assunto"
        options={[...CONTATO.form.areas]}
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <div>
        <Textarea
          label="Sua situação"
          placeholder="Conte em poucas linhas o que está acontecendo"
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.mensagem}
          aria-describedby={errors.mensagem ? errorMensagemId : undefined}
        />
        {errors.mensagem && (
          <p id={errorMensagemId} role="alert" style={{ ...errorStyle, margin: '6px 0 0' }}>
            {errors.mensagem}
          </p>
        )}
      </div>

      <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{CONTATO.form.hint}</p>

      <Button type="submit" variant="gold" size="lg" style={{ alignSelf: 'flex-start' }}>
        Enviar pelo WhatsApp
      </Button>
    </form>
  );
}
