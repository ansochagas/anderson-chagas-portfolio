# Plano de Implementacao

## Diagnostico Inicial

- A pasta do projeto estava vazia no momento da analise.
- Nao existe estrutura previa de aplicacao para preservar.
- Nao foi encontrado `.openai/hosting.json` nem configuracao anterior de deploy.

## Objetivo da Primeira Entrega

Construir a base de um portfolio profissional em ingles, com identidade visual premium e estrutura pronta para evolucao de conteudo, priorizando:

- posicionamento claro para recrutadores e clientes internacionais;
- home page objetiva e forte visualmente;
- componentes reutilizaveis;
- responsividade;
- acessibilidade;
- SEO basico;
- deploy simples na Vercel.

## Arquitetura Proposta

### Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- ESLint
- estrutura pronta para Vercel

### Organizacao

- `app/`
  - rotas principais
  - `layout.tsx` global
  - `page.tsx` para a Home inicial
- `components/`
  - componentes reutilizaveis de layout e secoes
- `data/`
  - dados temporarios da home e dos cases
- `public/`
  - assets estaticos e futuros arquivos de curriculo/imagens
- `app/globals.css`
  - tokens visuais, tema, tipografia e utilitarios globais

### Estrategia de Conteudo

- textos reais onde ja houver definicao no briefing;
- placeholders explicitamente marcados onde faltarem informacoes;
- cases em estrutura resumida nesta fase, sem desenvolver conteudo completo.

## Estrutura de Paginas da V1

### Implementacao imediata

- `/`
  - Hero
  - apresentacao profissional
  - selected work
  - competencias
  - contato
  - rodape

### Preparacao estrutural para proximas fases

- `/about`
  - pagina dedicada para narrativa profissional expandida
- `/work`
  - indice de cases
- `/work/[slug]`
  - estrutura pronta para paginas individuais de case

Observacao: nesta primeira etapa, a implementacao visual principal sera concentrada na Home, com rotas adicionais criadas apenas se agregarem organizacao sem desviar o foco do escopo.

## Etapas de Desenvolvimento

1. Gerar o scaffold base do projeto com Next.js, TypeScript e Tailwind.
2. Ajustar configuracoes globais de layout, metadata e estilo.
3. Definir tokens visuais iniciais: paleta, espacos, containers, tipografia e superficies.
4. Construir componentes reutilizaveis para header, footer, section wrapper e cards.
5. Implementar a Home com as secoes priorizadas no briefing.
6. Preparar dados temporarios dos cases e das competencias com placeholders claros.
7. Validar compilacao, navegacao, responsividade e consistencia visual.
8. Deixar a base pronta para inclusao posterior dos cases completos e assets reais.

## Criterios de Qualidade

- layout forte e legivel em mobile e desktop;
- navegacao simples e clara;
- sem excesso de elementos decorativos;
- boa semantica HTML;
- contraste e foco de teclado razoaveis;
- carregamento rapido;
- codigo organizado para iteracoes futuras.

## Informacoes que Serao Necessarias Depois

- links finais de LinkedIn, GitHub e Upwork;
- email de contato publico;
- arquivo do curriculo;
- textos finais da apresentacao profissional;
- conteudo real dos 3 ou 4 cases;
- screenshots, mockups ou diagramas autorizados;
- empresa/experiencia que precisara ser anonimizada no case corporativo.
