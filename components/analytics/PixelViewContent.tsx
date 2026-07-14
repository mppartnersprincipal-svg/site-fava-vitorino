'use client';

import { useEffect } from 'react';

/** Dispara o evento ViewContent do Meta Pixel nas páginas de serviço (PRD 2.9). */
export function PixelViewContent({ contentName }: { contentName: string }) {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: contentName });
    }
  }, [contentName]);
  return null;
}
