'use client';

import { useEffect, useState } from 'react';
import { whatsappUrl } from '@/lib/whatsapp';
import { trackEvent, trackLead } from '@/lib/analytics';
import { captureUtms, utmSuffix, type Utms } from '@/lib/utm';

/**
 * Link de WhatsApp de landing page: número da campanha, mensagem
 * pré-preenchida e UTMs preservadas até o texto que a pessoa envia.
 *
 * No servidor (e no primeiro render do cliente) o href sai sem a linha de
 * origem — é o mesmo HTML dos dois lados, sem erro de hidratação. Logo após o
 * mount as UTMs entram. Sem JS o botão continua funcionando, só sem a origem.
 */
export function useWhatsAppLink(phone: string, message: string) {
  const [utms, setUtms] = useState<Utms>({});

  useEffect(() => {
    setUtms(captureUtms());
  }, []);

  return {
    href: whatsappUrl(message + utmSuffix(utms), phone),

    /**
     * Conversão: evento GA4 nomeado por posição do botão (é o que dirá qual
     * bloco converte) + evento padrão `Lead` do Pixel da Meta.
     */
    trackClick(location: string, extra?: Record<string, string>) {
      trackLead('whatsapp_click', { location, ...utms, ...extra });
    },

    /** Evento auxiliar, sem peso de conversão (ex.: qual card de direito puxa clique). */
    trackAux(name: string, params?: Record<string, string>) {
      trackEvent(name, { ...utms, ...params });
    },
  };
}
