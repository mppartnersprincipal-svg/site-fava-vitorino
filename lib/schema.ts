import { SITE } from '@/content/data/site';
import { PENDING } from '@/content/data/pending';

/**
 * Builders de JSON-LD (schema.org).
 */

export function legalServiceSchema() {
  const sameAs = [
    SITE.instagram.url,
    PENDING.facebookUrl,
    PENDING.linkedinUrl,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE.nome,
    alternateName: SITE.razaoSocial,
    url: SITE.url,
    telephone: '+55-62-99281-5221',
    email: SITE.emails[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.endereco.logradouro,
      addressLocality: SITE.endereco.cidade,
      addressRegion: SITE.endereco.uf,
      postalCode: SITE.endereco.cep,
      addressCountry: 'BR',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    areaServed: { '@type': 'Country', name: 'Brasil' },
    description: SITE.descricao,
    sameAs,
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    provider: { '@type': 'LegalService', name: SITE.nome },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    description: opts.description,
    url: opts.url,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@type': 'Organization', name: SITE.nome },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    url: opts.url,
  };
}
