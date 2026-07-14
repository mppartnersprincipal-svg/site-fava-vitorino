/**
 * ÚNICO arquivo com conteúdo pendente de coleta junto ao escritório.
 * Regra: nenhum literal "[PENDENTE" pode existir fora deste arquivo —
 * `grep "\[PENDENTE"` localiza 100% dos pontos de substituição.
 *
 * Itens `null` simplesmente não são renderizados até existirem.
 */
export const PENDING = {
  /** Endereço completo em texto (rua, número, cidade, UF, CEP). Fica FORA do JSON-LD até existir. */
  endereco: '[PENDENTE: endereço completo do escritório]',

  /** Link funcional do Google Maps (o briefing trouxe só um share.google inacessível). */
  googleMapsUrl: null as string | null,

  /** Número da OAB de Jessica Vitorino Martins (em branco no briefing). */
  oabJessica: '[PENDENTE: OAB de Jessica Vitorino]',

  /** Resposta da FAQ 5 da Home: o atendimento inicial é gratuito ou pago? */
  custoAtendimento:
    '[PENDENTE: definir com o escritório se o atendimento inicial é gratuito ou tem custo]',

  /** Depoimentos reais autorizados (3–4 slots). Enquanto não existirem, a seção não renderiza. */
  depoimentos: [] as Array<{
    texto: string;
    nome: string;
    cidadeUf: string;
    servico: string;
  }>,

  /** URL do Facebook (briefing informou só o nome da página, sem link). */
  facebookUrl: null as string | null,

  /** URL do LinkedIn (em branco no briefing). */
  linkedinUrl: null as string | null,
} as const;
