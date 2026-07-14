import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { SITE } from '@/content/data/site';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { RevealObserver } from '@/components/sections/RevealObserver';
import { Analytics } from '@/components/analytics/Analytics';
import { JsonLd } from '@/components/analytics/JsonLd';
import { legalServiceSchema } from '@/lib/schema';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Fava e Vitorino Advocacia — Estratégia jurídica para proteger tudo o que você construiu',
  description: SITE.descricao,
  openGraph: {
    siteName: SITE.nome,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og/og-default.png', width: 1200, height: 630, alt: SITE.tagline }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <RevealObserver />
        <Analytics />
        <JsonLd data={legalServiceSchema()} />
      </body>
    </html>
  );
}
