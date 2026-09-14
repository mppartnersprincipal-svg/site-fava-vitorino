import type { Metadata } from 'next';
import { AUTISMO } from '@/content/data/autismo';
import { SITE } from '@/content/data/site';
import { GOOGLE_REVIEWS } from '@/content/data/reviews';
import { JsonLd } from '@/components/analytics/JsonLd';
import { PixelViewContent } from '@/components/analytics/PixelViewContent';
import { faqPageSchema, serviceSchema } from '@/lib/schema';
import { LpWhatsAppCta } from '@/components/lp/LpWhatsAppCta';
import { LpWhatsAppBar } from '@/components/lp/LpWhatsAppBar';
import { DireitoCard } from '@/components/lp/DireitoCard';
import { InfinityMark } from '@/components/lp/InfinityMark';
import { LpFoto } from '@/components/lp/LpFoto';

const { meta, hero, dores, direitos, comoFunciona, quemSomos, faq, ctaFinal, float, rodape } = AUTISMO;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.path },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.path,
    type: 'website',
  },
};

/** ✕ das frases que ela já ouviu — decorativo, o sentido está no texto. */
function XMark() {
  return (
    <svg className="lp-quote__x" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Landing page "Direitos da criança autista" — /autismo.
 *
 * Objetivo único: abrir conversa no WhatsApp. Sem formulário, sem captura de
 * e-mail, sem download. Cinco blocos, botão de WhatsApp em três posições mais
 * a barra fixa. Ver o briefing e content/data/autismo.ts antes de editar.
 */
export default function AutismoPage() {
  return (
    <div className="lp">

      {/* 01. Topo — cabe na primeira tela do celular */}
      <section className="lp-hero">
        <InfinityMark className="lp-hero__mark" />
        <div className="lp-container">
          <h1 className="lp-h1">{hero.headline}</h1>
          <span className="lp-rule" aria-hidden="true" />
          <p className="lp-lead">{hero.sub}</p>
          <LpWhatsAppCta phone={meta.whatsapp} message={hero.mensagem} location="hero_autismo">
            {hero.cta}
          </LpWhatsAppCta>
        </div>
      </section>

      {/* 02. Reconhecimento da dor */}
      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">{dores.titulo}</h2>
          <ul className="lp-quotes" role="list">
            {dores.frases.map((frase) => (
              <li key={frase}>
                <p className="lp-quote">
                  <XMark />
                  <span>“{frase}”</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="lp-fecho">{dores.fecho}</p>
        </div>
      </section>

      {/* 03. Os direitos — o coração da página. Cada card abre o WhatsApp com
          a mensagem do tema, e o clique é medido por tema. */}
      <section className="lp-section lp-section--verde" id="direitos">
        <div className="lp-container">
          <span className="lp-overline">{direitos.overline}</span>
          <h2 className="lp-h2" style={{ marginTop: 12 }}>
            {direitos.titulo}
          </h2>
          <span className="lp-rule" aria-hidden="true" style={{ margin: '16px 0' }} />
          <p className="lp-lead">{direitos.intro}</p>

          <ul className="lp-direitos" role="list">
            {direitos.itens.map((direito, i) => (
              <DireitoCard key={direito.id} direito={direito} posicao={i + 1} phone={meta.whatsapp} />
            ))}
          </ul>

          <p className="lp-nota">{direitos.nota}</p>

          <div style={{ marginTop: 24 }}>
            <LpWhatsAppCta
              phone={meta.whatsapp}
              message={direitos.mensagem}
              location="direitos_autismo"
            >
              {direitos.cta}
            </LpWhatsAppCta>
          </div>
        </div>
      </section>

      {/* 04. Como funciona a conversa */}
      <section className="lp-section">
        <div className="lp-container">
          <span className="lp-overline">{comoFunciona.overline}</span>
          <h2 className="lp-h2" style={{ marginTop: 12 }}>
            {comoFunciona.titulo}
          </h2>
          <span className="lp-rule" aria-hidden="true" style={{ margin: '16px 0' }} />
          <p className="lp-lead">{comoFunciona.intro}</p>

          <ol className="lp-steps">
            {comoFunciona.etapas.map((etapa, i) => (
              <li className="lp-step" key={etapa.titulo}>
                <span className="lp-step__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="lp-step__titulo">{etapa.titulo}</h3>
                  <p className="lp-step__desc">{etapa.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05a. Quem somos e provas */}
      <section className="lp-section lp-section--verde">
        <div className="lp-container">
          <span className="lp-overline">{quemSomos.overline}</span>
          <h2 className="lp-h2" style={{ marginTop: 12 }}>
            {quemSomos.titulo}
          </h2>
          <span className="lp-rule" aria-hidden="true" style={{ margin: '16px 0' }} />

          <div className="lp-quemsomos">
            <div>
              <LpFoto src={quemSomos.foto.src} alt={quemSomos.foto.alt} />
              <p className="lp-foto__legenda">{quemSomos.foto.legenda}</p>
            </div>

            <div>
              <p className="lp-lead">{quemSomos.texto}</p>

              <ul className="lp-stats" role="list">
                {quemSomos.stats.map((stat) => (
                  <li key={stat.label}>
                    <span className="lp-stat__valor">{stat.valor}</span>
                    <span className="lp-stat__label">{stat.label}</span>
                  </li>
                ))}
              </ul>

              <p className="lp-nota">
                <a
                  href={GOOGLE_REVIEWS.meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textUnderlineOffset: 3 }}
                >
                  Ver as avaliações no Google
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05b. Dúvidas — <details> nativo: abre sem JS e sem custo de hidratação */}
      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">{faq.titulo}</h2>
          <div className="lp-faq">
            {faq.itens.map((item) => (
              <details className="lp-faq__item" key={item.question}>
                <summary className="lp-faq__q">
                  {item.question}
                  <svg
                    className="lp-faq__sinal"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="lp-faq__a">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 05c. Fechamento */}
      <section className="lp-section lp-section--verde" style={{ position: 'relative', overflow: 'hidden' }}>
        <InfinityMark className="lp-cta-mark" />
        <div className="lp-container" style={{ position: 'relative' }}>
          <h2 className="lp-h2">{ctaFinal.titulo}</h2>
          <span className="lp-rule" aria-hidden="true" style={{ margin: '16px 0' }} />
          <p className="lp-lead">{ctaFinal.texto}</p>
          <div style={{ marginTop: 24 }}>
            <LpWhatsAppCta phone={meta.whatsapp} message={ctaFinal.mensagem} location="final_autismo">
              {ctaFinal.cta}
            </LpWhatsAppCta>
          </div>
        </div>
      </section>

      {/* Aviso obrigatório do Provimento 205/2021 — o rodapé do site não o traz */}
      <section className="lp-section">
        <div className="lp-container lp-aviso">
          <p className="lp-aviso__texto">{rodape.aviso}</p>
        </div>
      </section>

      <LpWhatsAppBar
        phone={meta.whatsapp}
        message={float.mensagem}
        label={float.label}
        ariaLabel={float.ariaLabel}
        location="float_autismo"
      />

      <JsonLd
        data={serviceSchema({
          name: meta.serviceName,
          description: meta.description,
          url: `${SITE.url}${meta.path}`,
        })}
      />
      <JsonLd data={faqPageSchema([...faq.itens])} />
      <PixelViewContent contentName={meta.serviceName} />
    </div>
  );
}
