# Site — Fava e Vitorino Advocacia

Site institucional construído com **Next.js 16 (App Router) + TypeScript**, portando o design system da marca (pasta `Fotos/Design system completo/`) — tokens CSS, 15 componentes React e regras visuais.

## Rodando localmente

```bash
npm install
npm run dev    # desenvolvimento em http://localhost:3000
npm run build  # build de produção
npm start      # serve o build
```

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `app/` | Layout raiz (fonte, tokens, analytics) + `sitemap.ts`/`robots.ts` |
| `app/(site)/` | Páginas do site — Home, `/sobre`, `/revisional-bancaria-pf`, `/revisional-bancaria-pj`, `/autismo`, `/blog`, `/contato`, `/politica-de-privacidade`. O layout do grupo traz header, rodapé e botão flutuante |
| `components/ds/` | Design system portado (Button, Card, Accordion, Dialog, etc.) |
| `components/layout/` | Header (menu mobile), Footer, botão flutuante de WhatsApp |
| `components/sections/` | Seções reutilizáveis (Hero, StepList, FaqSection, CtaSection…) |
| `components/lp/` | Peças da página /autismo (CTAs de WhatsApp com UTM, barra fixa, cards, ícones, foto em duotone) |
| `content/data/` | **Toda a copy do site**, tipada — nada de texto hardcoded em JSX |
| `content/blog/` | Posts em MDX (frontmatter: `title`, `description`, `date`, `author`, `tags`) |
| `lib/` | `whatsapp.ts`, `analytics.ts` (GA4+Pixel), `utm.ts`, `schema.ts` (JSON-LD), `blog.ts` |
| `Fotos/` | Assets originais do cliente (fonte — não entra no build) |

> Grupos de rota como `(site)` **não aparecem na URL**: `app/(site)/sobre` continua servindo `/sobre`.

## Página /autismo

`/autismo` — "Direitos da criança autista". Página do site, no menu como as revisionais, com
objetivo único de abrir conversa no WhatsApp (sem formulário, sem captura de e-mail, sem download).

- Copy em `content/data/autismo.ts` — **a equipe edita ali, sem tocar em JSX**.
- Número próprio da campanha (**diferente** do institucional), definido em `AUTISMO.meta.whatsapp`.
  Nesta página o botão do header e o do menu mobile também usam esse número (`whatsappForPath`
  em `lib/whatsapp.ts`); o flutuante do site é trocado pela barra fixa da página.
- Paleta fechada em três cores (verde/dourado/creme), escopada em `.lp` no fim do `globals.css`.
- Símbolo do autismo: **infinito** (`components/lp/InfinityMark.tsx`). Nunca peça de quebra-cabeça.
- Regras de conteúdo (nada de promessa de resultado, honorários ou urgência) estão
  documentadas no topo de `content/data/autismo.ts`. Texto que fala de direito passa
  por aprovação do escritório antes de publicar.

Para criar outra página nesse formato: nova pasta em `app/(site)/`, novo arquivo em `content/data/`,
reaproveitando `components/lp/`, e o link em `components/layout/nav-links.ts`.

## Publicar um post no blog

Criar `content/blog/meu-post.mdx` com frontmatter e fazer deploy. A listagem, a rota, o sitemap e o JSON-LD Article são gerados automaticamente.

## Variáveis de ambiente (`.env.example`)

- `NEXT_PUBLIC_SITE_URL` — URL pública (metadata, sitemap, JSON-LD)
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 (sem valor, script não renderiza)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (idem)

Eventos disparados: `whatsapp_click` (header, float, heros, CTAs — com `location`), `form_submit` (contato) — ambos também como `Lead` no Pixel — e `ViewContent` nas páginas de serviço.

Nas landing pages, o `location` identifica a posição do botão (`hero_autismo`, `direitos_autismo`,
`card_direito_autismo`, `final_autismo`, `float_autismo`) e os cards de direito disparam também
`direito_click` com o slug do tema — é o dado que diz qual tema merece página própria depois.
As UTMs da URL são capturadas em `lib/utm.ts`, entram em todos os eventos e viajam como uma
linha de origem no fim da mensagem pré-preenchida do WhatsApp.

## Deploy (Vercel)

1. Subir o repositório para GitHub/GitLab.
2. Importar na Vercel (framework auto-detectado).
3. Configurar as 3 env vars acima.
4. Apontar o domínio (provável `favaevitorino.com.br`).

## Pendências de conteúdo

Todos os placeholders vivem em **`content/data/pending.ts`** (único arquivo com literais `[PENDENTE`). Para localizar os pontos de exibição: `grep -r "PENDING" --include=*.tsx`.

Falta coletar com o escritório:
1. Endereço completo em texto + link do Google Maps funcional
2. Número da OAB de Jessica Vitorino
3. 3–4 depoimentos de clientes autorizados (a seção da Home só renderiza quando existirem)
4. Custo do atendimento inicial (resposta da FAQ 5 da Home)
5. URL do Facebook (e LinkedIn, se houver)
6. IDs do GA4 e do Meta Pixel
7. Substituir os 2 posts de exemplo do blog por conteúdo revisado
8. Endereço completo da sede de Goiânia (a LP `/autismo` cita "Curitiba e Goiânia")
9. PDF do guia "Direitos da criança autista" — fonte do bloco "Como funciona a conversa"
10. Aprovação do escritório para `content/data/privacidade.ts` (texto jurídico)

## Nota de acessibilidade

**Falso positivo conhecido no Lighthouse (color-contrast):** o wordmark dourado do header é o logotipo da marca composto em texto. A WCAG 1.4.3 isenta explicitamente "texto que faz parte de um logotipo ou nome de marca" da exigência de contraste — a ferramenta automática não tem como saber disso. Todos os demais textos do site passam em AA.


Dois ajustes de cor sobre o manual da marca para cumprir WCAG 2.1 AA (exigência do PRD), mantendo o matiz: texto dourado sobre fundo claro usa `--accent-text #836439` (dourado-600 `#d4a25c` tem contraste 1.9:1) e `--text-muted` foi escurecido para `#606e66` (4.5:1 sobre areia). Superfícies e acentos gráficos seguem os tokens originais.
