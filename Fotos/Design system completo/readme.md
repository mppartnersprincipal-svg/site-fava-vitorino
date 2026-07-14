# Fava e Vitorino Advocacia — Design System

Sistema de design do escritório **Fava e Vitorino Advocacia**, construído a partir do Manual da Marca (PDF em `uploads/Manual da Marca Fava e Vitorino Advocacia.pdf`) e dos logos oficiais fornecidos pelo cliente.

**Contexto**: escritório de advocacia brasileiro, atuação em demandas patrimoniais em geral — Direito de Família e Sucessões, Civil, Planejamento Patrimonial e Sucessório, Empresarial, Contratual, do Consumidor (incl. Consumidor Imobiliário), Imobiliário, Bancário (Revisional Bancária PF/PJ) e Administrativo. Tom desejado: **moderno e estratégico**. Idioma: português (Brasil).

**Superfície coberta**: site institucional (`ui_kits/site/`).

## Fontes (sources)
- `uploads/Manual da Marca Fava e Vitorino Advocacia.pdf` — paleta (#efebe5, #e5b775, #083224) e tipografia (Montserrat).
- `uploads/Logo Escritório Escrita (1).png` — logo horizontal (símbolo + escrita).
- `uploads/Logo Escritório Única (1).png` — símbolo isolado.

## CONTENT FUNDAMENTALS
- Português formal-contemporâneo: frases curtas, voz ativa, sem juridiquês desnecessário. "Você" para o cliente; o escritório fala como "nós".
- Postura **estratégica**: fala de resultado e proteção patrimonial, não de processos. Ex.: "Protegemos o que você construiu." / "Estratégia jurídica para decisões patrimoniais." Evitar clichês ("excelência", "soluções jurídicas completas").
- Títulos em CAIXA-ALTA com tracking largo (eco do logotipo). Overlines curtas em caixa-alta acima de títulos: "ÁREAS DE ATUAÇÃO".
- Sem emoji. Números escritos com padrão brasileiro (R$ 1.500,00).
- CTAs diretos e de baixo atrito: "Fale com o escritório", "Agendar conversa".

## VISUAL FOUNDATIONS
- **Paleta**: verde-escuro `#083224` (institucional, superfícies de destaque), dourado `#e5b775` (acento, detalhes, nunca grandes áreas), areia `#efebe5` (fundo de página). Branco puro só em cards. Escalas derivadas em `tokens/colors.css` (oklch-harmônicas).
- **Tipografia**: Montserrat em tudo (manual: "Montserrat Classic" para títulos, Montserrat para textos/números — servida via Google Fonts; ver Caveats). Títulos SemiBold 600 em caixa-alta com `letter-spacing: 0.08em`; corpo Regular 400, line-height 1.7. Overlines 600, tracking 0.22em, douradas sobre verde / verde-escuras sobre areia.
- **Superfícies**: página em areia; seções alternam areia ↔ verde-escuro (nunca dois verdes seguidos). Cards brancos, raio 4px, borda sutil `#ddd6cb` OU sombra `--shadow-card`, nunca ambos fortes.
- **Cantos**: superfícies quase retas — 2/4/8px. **Botões, Badge e Tag em pílula** (`--radius-pill`).
- **Dourado como fio**: linhas de 2–3px, sublinhados curtos (32–48px) sob títulos, ícones e keylines. É acento, não fundo.
- **Sombras**: raras e frias (tingidas do verde). Cards `--shadow-card`; diálogos `--shadow-dialog`. Sem inner shadows.
- **Animação**: contida — transições 160ms ease em cor/opacidade; sem bounces, sem parallax.
- **Hover**: links e botões escurecem (dourado→`--dourado-600`; verde→`--verde-800`); cards elevam sombra levemente. Press: sem escala, só cor.
- **Imagens**: fotografia arquitetônica/urbana sóbria, tons quentes-neutros ou P&B com leve calor; nunca fotos de banco genéricas de "aperto de mão". Sobre fotos, véu verde-escuro (`rgba(8,50,36,.55+)`) para proteger texto areia.
- **Layout**: container 1120px; seções com respiro generoso (`--space-8/9` vertical); grid 12 col implícito.
- **Foco**: `box-shadow: 0 0 0 3px var(--focus-ring)` (dourado translúcido).

## ICONOGRAFIA
- O manual não define sistema de ícones. **Adoção documentada**: [Lucide](https://lucide.dev) via CDN, stroke 1.5, tamanho 20/24px, cor herdada do texto (verde sobre claro, areia/dourado sobre escuro). Carregar com `<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`, ou copiar SVGs pontuais.
- Sem emoji, sem unicode decorativo. O símbolo da marca (triângulo FV) NÃO é ícone utilitário — só como assinatura/marca d'água.

## Logos (`assets/`)
- `logo-horizontal.png` / `logo-simbolo.png` — originais sobre fundo verde `#083224`.
- `logo-horizontal-transparente.png` / `logo-simbolo-transparente.png` — recortes com fundo transparente, derivados programaticamente dos originais. **Uso: apenas sobre superfícies verde-escuras** (as partes areia somem sobre fundo claro). Sobre areia/branco, usar o símbolo dentro de um bloco verde, ou compor o nome em Montserrat (caixa-alta, dourado `#d4a25c` + "ADVOCACIA" em verde, tracking largo).

## Índice
- `styles.css` — entrada global (importa tokens).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`.
- `guidelines/` — specimen cards das fundações.
- `components/forms/` — Button, Input, Select, Textarea, Checkbox, Radio, Switch.
- `components/display/` — Card, Badge, Tag, Tabs, SectionHeading, Accordion.
- `components/feedback/` — Toast, Tooltip.
- `components/overlay/` — Dialog.
- `ui_kits/site/` — site institucional (home interativa).
- `assets/` — logos.

### Intentional additions
- `SectionHeading` — padrão overline + título + fio dourado repetido em todo o site; extraído como primitivo.
- Conjunto de componentes padrão autorado do zero: o manual não define componentes de UI.

## Caveats
- Manual cita "Montserrat Classic" para títulos; sem arquivo de fonte fornecido, uso Montserrat (Google Fonts) em todos os pesos. **Se houver arquivos da fonte oficial, anexar para substituição.**
- Páginas 3–4 do manual (aplicações visuais) não puderam ser rasterizadas; fundações derivadas das páginas de paleta/tipografia + logos.
