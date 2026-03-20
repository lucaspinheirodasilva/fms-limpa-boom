

## Plano: Melhorar Página de Lavagem de Tapetes

Comparando o site original com a implementação atual, faltam estas seções/melhorias:

---

### O que falta / pode melhorar

| Seção | Original | Atual |
|-------|----------|-------|
| Cards de serviço com imagens | Cada card tem imagem ao lado | Apenas texto simples |
| Detalhes por bairro no "Quem Somos" | Lista bairros específicos por cidade | Genérico |
| Seção "Para mais informações" | Imagem + CTA WhatsApp | Não existe |
| Vídeo YouTube | Embed de vídeo de impermeabilização | Não existe |
| Serviços detalhados com bairros | Cada serviço lista bairros atendidos | Apenas descrição genérica |

---

### Alterações em `src/pages/LavagemTapetes.tsx`

**1. Cards de serviço com imagens (lado a lado)**
- Gerar 4 imagens para os serviços (lavanderia, coleta domicílio, pets, higienização completa)
- Layout alternado: imagem à esquerda/direita em cada card
- Adicionar botão "Veja mais" linkando para páginas internas relevantes

**2. Expandir seção "Quem Somos" com bairros**
- Adicionar texto sobre bairros atendidos por cidade:
  - Florianópolis: Trindade, Estreito, Coqueiros, Santa Mônica, Abraão, Capoeiras
  - São José: Kobrasol, Campinas, Barreiros, Jardim Atlântico, Areias
  - Palhoça e Biguaçu
- Detalhar cada serviço (Estofados, Tapetes/Carpetes, Colchões, Comercial) com bairros específicos
- Adicionar imagem de tapete limpo ao lado do texto

**3. Nova seção "Para mais informações"**
- Bloco com imagem + texto convidando a falar pelo WhatsApp
- CTA "Fale Conosco Agora!"

**4. Nova seção de Vídeo**
- Título: "Veja a FMS Higienizações em Ação"
- Subtítulo com cobertura regional
- Embed do YouTube Shorts (impermeabilização de estofados)

**5. Mais benefícios**
- Expandir de 4 para 6 benefícios (adicionar "Produtos Ecológicos" e "Profissionais Treinados")

---

### Arquivos afetados

| Arquivo | Alteração |
|---------|-----------|
| `src/pages/LavagemTapetes.tsx` | Reescrever com todas as seções acima |
| `src/assets/` | Gerar 4 imagens para cards de serviço + 1 imagem tapete limpo |

### Ordem das seções na página final

1. Hero (manter atual)
2. Serviços com imagens alternadas
3. Benefícios expandidos (6 itens)
4. Quem Somos detalhado com bairros + imagem
5. Para mais informações (CTA)
6. CTABanner (manter)
7. Vídeo YouTube
8. Depoimentos (manter)
9. Footer

