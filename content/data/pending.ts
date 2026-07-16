/**
 * ÚNICO arquivo com conteúdo pendente de coleta junto ao escritório.
 * Regra: nenhum literal "[PENDENTE" pode existir fora deste arquivo —
 * `grep "\[PENDENTE"` localiza 100% dos pontos de substituição.
 *
 * Itens `null` simplesmente não são renderizados até existirem.
 */
/** true se o texto ainda contém marcador de pendência (usado para filtrar JSON-LD, etc.). */
export function isPending(text: string): boolean {
  return text.includes('[PENDENTE');
}

export const PENDING = {
  /** Link funcional do Google Maps (CID da ficha extraído do Maps em 16/07/2026). */
  googleMapsUrl: 'https://maps.google.com/?cid=15812551867850209934' as string | null,

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
