## Objetivo

Substituir as imagens genéricas/fracas do site por fotos hiper-realistas no mesmo padrão das de tapetes (equipamentos industriais, equipe uniformizada, cenários reais da Grande Florianópolis), aumentando credibilidade e conversão.

## Diagnóstico das imagens atuais

Pontos fracos identificados:
- **Hero da home** (`hero-home.jpg`) — visual genérico, não mostra a operação real
- **AboutSection / Quem Somos** (`process-cleaning.jpg`) — pouco realista
- **Serviço Estofados** (`service-upholstery.jpg`) — usado em 2 cards (estofados E colchões), parece estoque
- **Serviço Carpetes** (`hero-carpet-cleaning.jpg`) — reaproveitada do hero
- **Páginas internas de Estofados, Colchões e Carpetes** — provavelmente reutilizam os mesmos assets fracos
- **Segmentos** (escritório, hotel, cinema, teatro, auditório, call center) — visual de banco de imagens

## Plano de novas imagens (12 fotos novas)

Todas seguindo o padrão já aprovado: **equipamentos industriais visíveis, 1-2 profissionais uniformizados (uniforme azul FMS), iluminação natural, ambientes realistas brasileiros, sem aspirador doméstico**.

### 1. Home + Institucional (3 imagens)
| Arquivo | Cena |
|---|---|
| `hero-home.jpg` (substituir) | Profissional uniformizado higienizando sofá em sala de estar ampla e iluminada, com extratora industrial visível |
| `process-cleaning.jpg` (substituir) | Dupla de técnicos FMS trabalhando em equipe — um na extratora, outro escovando estofado |
| `equipment-professional.jpg` (substituir) | Close dos equipamentos profissionais (extratora, escova rotativa, produtos) organizados |

### 2. Serviços principais (4 imagens)
| Arquivo | Cena |
|---|---|
| `service-upholstery.jpg` (substituir) | Higienização de sofá de tecido claro com extração de água suja visível (efeito "antes/depois") |
| `service-mattress.jpg` (novo) | Higienização de colchão king com equipamento UV/extratora — substitui o reuso do `service-upholstery` no card de colchões |
| `service-rugs.jpg` (substituir) | Lavagem de tapete em lavanderia industrial com máquina rotativa |
| `hero-carpet-cleaning.jpg` (substituir) | Limpeza de carpete corporativo com extratora industrial em escritório vazio |

### 3. Segmentos atendidos (5 imagens-chave)
Foco nos nichos válidos da memória (Escritórios, Hotéis, Cinemas, Auditórios, Residencial). Vamos refinar os 5 mais visíveis:

| Arquivo | Cena |
|---|---|
| `segment-office.jpg` (substituir) | Escritório corporativo moderno com carpete sendo higienizado fora do horário comercial |
| `segment-hotel.jpg` (substituir) | Lobby de hotel com profissional higienizando poltronas/carpete vermelho |
| `segment-cinema.jpg` (substituir) | Sala de cinema com poltronas vermelhas sendo aspiradas com extratora |
| `segment-auditorium.jpg` (substituir) | Auditório com fileiras de cadeiras estofadas em higienização |
| `segment-callcenter.jpg` (substituir) | Open space corporativo com cadeiras office sendo higienizadas |

Os arquivos `segment-clinic.jpg`, `segment-gym.jpg`, `segment-church.jpg`, `segment-condominium.jpg`, `segment-warehouse.jpg`, `segment-retail.jpg`, `segment-theater.jpg` ficam como estão (não são prioridade ou não estão sendo exibidos nos componentes ativos).

## Geração

- Modelo: **Nano Banana Pro** (`google/gemini-3-pro-image-preview`) para máxima qualidade fotorrealista
- Dimensões: 1280x832 (heros) e 1024x768 (cards)
- Estilo unificado: luz natural, paleta neutra, **uniforme azul** combinando com a marca (#003d82), equipamentos industriais reais
- Sem texto, sem logos sobrepostos

## O que NÃO será alterado

- Logo, ícones, layout dos componentes
- Imagens já aprovadas: `tapete-*.jpg`, `fms-van.webp`, `logo.png`
- Segmentos não exibidos no site atual (clínica, academia, igreja etc.)

## Confirmação antes de executar

Posso seguir com as **12 imagens** acima ou você prefere começar só por um grupo (ex: só a Home, ou só os Segmentos)?