# Plano de Evolução Visual e UX - UAPÉ

Este documento guia a transformação visual da Landing Page da UAPÉ, focado em resolver a falta de elementos gráficos, melhorar a tipografia, utilizar melhor a paleta de cores e humanizar a interface.

## Objetivos Principais
1. **Quebrar a Monotonia**: Introduzir elementos gráficos (ícones, diagramas, imagens) para dar pausas na leitura.
2. **Refinar Tipografia**: Melhorar hierarquia, legibilidade e ritmo (pesos variados, entrelinha maior, largura máxima).
3. **Potencializar a Paleta**: Variar fundos de seção e definir cor exclusiva para CTA.
4. **Humanizar**: Trazer contexto visual (fotos sutis) e destacar números/pessoas.

---

## Fase 1: Tipografia e Layout (Leitura Confortável)
**Foco:** Resolver a sensação de cansaço na leitura e o aspecto de "texto corrido". (Concluído)

- [x] **Restrição de Largura (Max-Width)**
  - Limitar containers de texto (ex: `max-w-prose` ou `max-w-3xl`) para que nunca ocupem 100% da tela em desktop.
  - Centralizar blocos de texto limitados.

- [x] **Ajuste de Tipografia**
  - **Pesos**: Definir uso claro de Light (detalhes), Regular (corpo) e Bold (títulos/destaques).
  - **Line-Height**: Aumentar entrelinha dos parágrafos (ex: `leading-relaxed` ou `leading-loose`).
  - **Justificativa**: Manter hífens (`hyphens-auto`) e justificar apenas onde não criar "rios" de espaço.

- [x] **Respiro (Whitespace)**
  - Aumentar padding vertical entre seções (`py-24` ou `py-32`).
  - Aumentar gap entre elementos de lista e parágrafos.

## Fase 2: Paleta e Contraste (Profundidade Visual)
**Foco:** Tirar o aspecto "chapado" e destacar ações importantes. (Mantendo a paleta original, sem adicionar novas cores) - **Concluído**

- [x] **Variação de Fundo (Backgrounds)**
  - (Revertido a pedido do usuário: manter fundo padrão consistente).

- [x] **Cor Exclusiva de CTA**
  - Usar a variante **Solid Primary** (`bg-primary text-background`) para botões de ação principal, garantindo destaque máximo sem introduzir novas cores.
  - Diferenciar de botões secundários (Outline).

## Fase 3: Elementos Gráficos e Ícones (Pausas Visuais)
**Foco:** Ilustrar conceitos abstratos e quebrar blocos de texto. (Concluído)

- [x] **Ícones (Lucide React)**
  - Adicionar ícones aos cards de "Stack" e "Why Us".
  - Usar ícones grandes e com traço fino (`stroke-1`) para manter elegância técnica.

- [x] **Diagramas / Elementos Abstratos**
  - Criar representações visuais simples para processos (ex: conectores, linhas de fluxo).
  - Usar borders/divisores estilizados entre seções.

## Fase 4: Humanização e Prova Social
**Foco:** Conectar a tecnologia com pessoas e impacto real. (Concluído)

- [x] **Imagens de Contexto**
  - Adicionar elemento visual "Global Network" (Globo giratório + Cards flutuantes) na seção "Who We Are".
  - Substituir listas por visualizações gráficas onde possível.

- [x] **Big Numbers (Experience Section)**
  - Transformar a lista de bullet points em um grid de estatísticas (ex: "20+ Anos", "50+ Países").
  - Usar tipografia grande e bold para os números.
  - Atualizado para fonte Sans-Serif Bold (mais limpa) e tamanho equilibrado (5xl) para elegância.

## Fase 5: Refinamento Final (Concluído)
**Foco:** Polimento visual e interatividade.

- [x] **Melhoria nos Botões (CTA)**
  - Redesign completo: Formato de pílula (rounded-full), texto em caixa alta (uppercase tracking-widest) e efeito de glow neon.
  - Remoção de elementos visuais "sujos" (colchetes) para um visual mais premium.
  - Interatividade refinada com shadows e lift.

---

## Padrões de Código
- Manter uso de `export function Nome()` para componentes.
- Usar Tailwind v4 (utilitários arbitrários quando necessário).
- Manter acessibilidade (contraste e foco) em todas as novas implementações.
