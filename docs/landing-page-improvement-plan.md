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
**Foco:** Tirar o aspecto "chapado" e destacar ações importantes.

- [ ] **Variação de Fundo (Backgrounds)**
  - Alternar seções entre:
    - Fundo Padrão (quase preto/azul profundo).
    - Fundo Secundário (tom levemente mais claro ou com tint de ciano/verde).
    - Fundo com Gradiente Sutil (radial ou linear suave).

- [ ] **Cor Exclusiva de CTA**
  - Definir uma cor de destaque "quente" ou de alto contraste (ex: um tom específico do gradiente ou branco puro com glow) EXCLUSIVA para botões de ação principal.
  - Diferenciar do verde/ciano usados em textos decorativos.

## Fase 3: Elementos Gráficos e Ícones (Pausas Visuais)
**Foco:** Ilustrar conceitos abstratos e quebrar blocos de texto.

- [ ] **Ícones (Lucide React)**
  - Adicionar ícones aos cards de "Stack" e "Why Us".
  - Usar ícones grandes e com traço fino (`stroke-1`) para manter elegância técnica.

- [ ] **Diagramas / Elementos Abstratos**
  - Criar representações visuais simples para processos (ex: conectores, linhas de fluxo).
  - Usar borders/divisores estilizados entre seções.

## Fase 4: Humanização e Contexto ("Quem somos")
**Foco:** Trazer calor e prova social para a página "fria".

- [ ] **Imagens de Contexto**
  - Inserir imagens de fundo com overlay forte (laboratório, mapa, dados, engenharia) em seções chave.
  - Garantir que o texto sobreposto continue legível.

- [ ] **Seção "Experience" em Números**
  - Transformar texto corrido em "Big Numbers" (ex: "10+ Years", "50+ Projects").
  - Layout de grid para exibir estatísticas.

- [ ] **Redesign "Who we are"**
  - Layout mais editorial (foto + texto ou grid visual).
  - Adicionar elemento visual que represente a equipe ou a missão.

---

## Padrões de Código
- Manter uso de `export function Nome()` para componentes.
- Usar Tailwind v4 (utilitários arbitrários quando necessário).
- Manter acessibilidade (contraste e foco) em todas as novas implementações.
