'use client';

import { ButtonLink, type ButtonLinkProps } from '@/components/ds/forms/ButtonLink';
import { WhatsAppIcon } from '@/components/ds/display/WhatsAppIcon';
import { whatsappUrl } from '@/lib/whatsapp';
import { trackLead } from '@/lib/analytics';

export interface WhatsAppCtaProps extends Omit<ButtonLinkProps, 'href'> {
  /** Mensagem pré-preenchida no WhatsApp. */
  message: string;
  /** Identificador do ponto de clique para analytics (ex.: 'hero_home'). */
  location: string;
}

export function WhatsAppCta({ message, location, children, ...rest }: WhatsAppCtaProps) {
  return (
    <ButtonLink
      href={whatsappUrl(message)}
      onClick={() => trackLead('whatsapp_click', { location })}
      {...rest}
    >
      <WhatsAppIcon />
      {children}
    </ButtonLink>
  );
}
