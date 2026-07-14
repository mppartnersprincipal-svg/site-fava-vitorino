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
| `app/` | Rotas: Home, `/sobre`, `/revisional-bancaria-pf`, `/revisional-bancaria-pj`, `/blog`, `/contato` + `sitemap.ts`/`robots.ts` |
| `components/ds/` | Design system portado (Button, Card, Accordion, Dialog, etc.) |
| `components/layout/` | Header (menu mobile), Footer, botão flutuante de WhatsApp |
| `components/sections/` | Seções reutilizáveis (Hero, StepList, FaqSection, CtaSection…) |
| `content/data/` | **Toda a copy do site**, tipada — nada de texto hardcoded em JSX |
| `content/blog/` | Posts em MDX (frontmatter: `title`, `description`, `date`, `author`, `tags`) |
| `lib/` | `whatsapp.ts`, `analytics.ts` (GA4+Pixel), `schema.ts` (JSON-LD), `blog.ts` |
| `Fotos/` | Assets originais do cliente (fonte — não entra no build) |

## Publicar um post no blog

Criar `content/blog/meu-post.mdx` com frontmatter e fazer deploy. A listagem, a rota, o sitemap e o JSON-LD Article são gerados automaticamente.

## Variáveis de ambiente (`.env.example`)

- `NEXT_PUBLIC_SITE_URL` — URL pública (metadata, sitemap, JSON-LD)
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 (sem valor, script não renderiza)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (idem)

Eventos disparados: `whatsapp_click` (header, float, heros, CTAs — com `location`), `form_submit` (contato) — ambos também como `Lead` no Pixel — e `ViewContent` nas páginas de serviço.

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

## Nota de acessibilidade

**Falso positivo conhecido no Lighthouse (color-contrast):** o wordmark dourado do header é o logotipo da marca composto em texto. A WCAG 1.4.3 isenta explicitamente "texto que faz parte de um logotipo ou nome de marca" da exigência de contraste — a ferramenta automática não tem como saber disso. Todos os demais textos do site passam em AA.


Dois ajustes de cor sobre o manual da marca para cumprir WCAG 2.1 AA (exigência do PRD), mantendo o matiz: texto dourado sobre fundo claro usa `--accent-text #836439` (dourado-600 `#d4a25c` tem contraste 1.9:1) e `--text-muted` foi escurecido para `#606e66` (4.5:1 sobre areia). Superfícies e acentos gráficos seguem os tokens originais.
