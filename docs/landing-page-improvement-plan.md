# Plano de Melhoria da Landing Page UAPÉ

## Objetivos
- Diferenciar hierarquia visual dos textos para guiar leitura.
- Ampliar respiro entre seções e blocos de conteúdo.
- Evoluir os botões com identidade própria (altura, raio, hover).
- Introduzir blocos e elementos visuais sem perder a clareza.
- Justificar parágrafos quando fizer sentido para trechos longos.
- Explorar melhor a paleta (#00ff9d, #20d5d5, neutros) com gradientes e estados.
- Manter padrões de código consistentes, compondo na page principal.

## Princípios de UI/UX
- Clareza primeiro: evitar excesso de decoração que prejudique compreensão.
- Ritmo tipográfico: pesos e tamanhos bem definidos por nível semântico.
- Espaço como componente: padding e gaps previsíveis e responsivos.
- Acessibilidade: contraste AA/AAA e focus/hover visíveis.
- Consistência: tokens de design e variantes de componentes compartilhados.

## Intervenções por Tema

### 1) Tipografia e Pesos
- Diagnóstico: títulos e corpo aparentam peso similar.
- Ações:
  - Definir escala e pesos: H1 bold, H2 semibold, H3 medium; corpo regular.
  - Aplicar text-balance e text-pretty onde for adequado para headlines e parágrafos longos.
  - Usar variações de cor para ênfase (ex.: #00ff9d para termos-chaves).
- Critérios de aceitação:
  - Cada nível tipográfico tem peso/tamanho distinto e reconhecível.
  - Linhas por parágrafo com leading confortável (1.6–1.8).

### 2) Espaçamento Entre Seções
- Diagnóstico: seções “apertadas”.
- Ações:
  - Padronizar seções com padding vertical amplo (ex.: py-24 em desktop, py-16 em mobile).
  - Introduzir um componente Section (em components/ui) para padronizar container, max-width e espaçamento.
  - Revisar gaps internos em grids/cards.
- Critérios:
  - Espaços consistentes entre seções e entre blocos internos.
  - Sem “colagem” de títulos em conteúdos adjacentes.

### 3) Botões com Identidade
- Diagnóstico: aparência genérica.
- Ações:
  - Adicionar variante “uape” ao Button com: altura maior (size xl), bordas arredondadas (rounded-xl/2xl), hover com glow/ring visível, e estados de foco acessíveis.
  - Oferecer versões outline e solid coerentes com a paleta.
- Critérios:
  - Pelo menos duas variantes UAPÉ com estados hover/focus/active perceptíveis.
  - Altura e raio bem definidos e consistentes em toda a página.

### 4) Blocos de Conteúdo
- Diagnóstico: muito texto corrido em coluna.
- Ações:
  - Introduzir Cards e Feature Blocks para resumir pontos-chave (títulos, ícones, descrições).
  - Usar grids responsivos (1→2→3 colunas) conforme breakpoint.
  - Adicionar um bloco “Stats” (números/indicadores) com ícones/ornamentos discretos.
- Critérios:
  - Informações escaneáveis em 3–5 segundos por bloco.
  - Layout responsivo sem colapsar densidade de conteúdo.

### 5) Layout, Colunas e Fluxo de Leitura
- Diagnóstico: texto longo em uma coluna única.
- Ações:
  - Split em duas colunas para trechos extensos (em desktop), mantendo uma coluna em mobile.
  - Hierarquizar com subtítulos, listas e “callouts”.
- Critérios:
  - Leitura fluida, com pontos de parada visuais e variação de ritmo.

### 6) Elementos Visuais
- Diagnóstico: visual muito clean, arrisca ficar sem graça.
- Ações:
  - Adicionar ornamentos geométricos e linhas técnicas (compatíveis com o tema “engenharia/saúde”), com baixa opacidade e leve parallax.
  - Inserir gradientes sutis (ex.: verde→ciano) em backgrounds/ornamentos.
  - Ícones minimalistas para reforçar blocos de conteúdo.
- Critérios:
  - Elementos discretos que enriquecem sem competir com o conteúdo.
  - Performance preservada (sem sobrecarga visual ou reflows excessivos).

### 7) Parágrafos Justificados
- Diagnóstico: pedido de justificar trechos.
- Ações:
  - Aplicar justificativa em parágrafos longos específicos (text-align: justify), não em headlines.
  - Evitar “rivers” com largura de linha confortável e hyphenation quando necessário.
- Critérios:
  - Trechos longos justificados com boa legibilidade; títulos e listas não justificados.

### 8) Paleta de Cores
- Diagnóstico: pouca exploração das cores de marca.
- Ações:
  - Criar tokens CSS (ex.: --uape-primary: #00ff9d; --uape-secondary: #20d5d5; --uape-bg: #0a0a0f; neutros complementares).
  - Introduzir gradientes discretos e estados (hover/focus/active) usando a paleta.
  - Garantir contraste mínimo AA.
- Critérios:
  - Paleta aplicada de forma consistente em componentes e fundos.
  - Estados de interação perceptíveis e harmônicos com a marca.

## Padrões de Código e Arquitetura
- Componentes: `export function Nome() {}` para todos os componentes React.
- Lógicas internas dos componentes: usar arrow functions para handlers e utilitários.
- Composição na página: `src/app/page.tsx` reúne e exporta a página com os componentes de seção.
- Organização:
  - `src/components/uape/` para seções e componentes específicos da marca.
  - `src/components/ui/` para primitivos reutilizáveis (Button, Card, Section, etc.).
- Animações: padronizar framer-motion com presets (initial/animate/transition/viewport) e reutilizar variantes.
- Estilos: preferir classes utilitárias e tokens; evitar estilos inline quando possível.

## Roadmap de Implementação
- Fase 1: Tipografia, espaçamento e variantes de Botão (uape/outline/solid).
- Fase 2: Blocos (Cards, Features, Stats), grids e fluxo de leitura.
- Fase 3: Ornamentos visuais, gradientes, parágrafos justificados e revisão de acessibilidade.
- Fase 4: Refino de movimento, performance e QA visual responsivo.

## Critérios de Aceitação Globais
- Hierarquia tipográfica clara, com pesos variados.
- Espaçamento consistente entre seções/blocos.
- Botões com identidade UAPÉ e estados perceptíveis.
- Conteúdo estruturado em blocos, leitura rápida e responsiva.
- Elementos visuais discretos e coerentes com a marca.
- Parágrafos longos justificados apenas onde fizer sentido.
- Paleta aplicada com contraste e estados.
- Código seguindo padrões definidos e organização por pastas.

## Referências de Código (atuais)
- Página principal: [page.tsx](file:///c:/Users/Peterson/Desktop/work/uape/uape-landig-page/src/app/page.tsx)
- Seções:
  - [hero-section.tsx](file:///c:/Users/Peterson/Desktop/work/uape/uape-landig-page/src/components/uape/hero-section.tsx)
  - [experience-section.tsx](file:///c:/Users/Peterson/Desktop/work/uape/uape-landig-page/src/components/uape/experience-section.tsx)
- UI:
  - [button.tsx](file:///c:/Users/Peterson/Desktop/work/uape/uape-landig-page/src/components/ui/button.tsx)
  - [card.tsx](file:///c:/Users/Peterson/Desktop/work/uape/uape-landig-page/src/components/ui/card.tsx)

## Checklist de Revisão
- Títulos/descrições com pesos diferentes e contraste adequado.
- Seções com respiro e alinhamento consistente.
- Botões com altura/raio/hover padronizados.
- Conteúdo principal dividido em blocos e grids.
- Ornamentos presentes em baixa opacidade e sem poluição visual.
- Parágrafos longos justificados seletivamente.
- Paleta aplicada com tokens e gradientes discretos.
- Componentes nomeados e separados entre uape e ui, montados em page.tsx.

## Métricas de Validação
- Lighthouse/CLS e contrastes AA/AAA quando aplicável.
- Tempo de leitura por seção e taxa de scroll (UX observacional).
- Consistência de estados de interação (hover/focus/active) em toda a página.

