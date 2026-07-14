import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { SITE } from '@/content/data/site';
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
