'use client';

/**
 * Captura e preservação de UTMs até o link do WhatsApp.
 *
 * O wa.me só carrega um parâmetro útil (`text`), então a origem viaja em duas
 * frentes: nos parâmetros do evento de analytics (GA4 + Pixel) e como uma linha
 * discreta no fim da mensagem pré-preenchida, para quem atende saber de onde a
 * pessoa veio sem precisar perguntar.
 *
 * Persistimos em sessionStorage porque o clique pode acontecer depois de uma
 * navegação interna, quando a query string original já não está mais na URL.
 */

const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'fv_utm';

export type Utms = Partial<Record<(typeof KEYS)[number], string>>;

/** Lê UTMs da URL atual e guarda na sessão. Chamar uma vez, no mount da LP. */
export function captureUtms(): Utms {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Utms = {};
  for (const key of KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value.slice(0, 120);
  }

  if (Object.keys(fromUrl).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // Modo privado / storage bloqueado: seguimos só com o que está na URL.
    }
    return fromUrl;
  }

  return readUtms();
}

/** UTMs já capturadas nesta sessão (vazio se a pessoa entrou sem campanha). */
export function readUtms(): Utms {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Utms) : {};
  } catch {
    return {};
  }
}

/**
 * Linha de origem anexada à mensagem do WhatsApp. Vazia quando não há campanha,
 * para que o tráfego orgânico veja só o texto limpo.
 */
export function utmSuffix(utms: Utms): string {
  const parts = [utms.utm_source, utms.utm_campaign, utms.utm_content].filter(Boolean);
  return parts.length > 0 ? `\n\n(origem: ${parts.join(' · ')})` : '';
}
