
## Plano: Adicionar Auditórios ao Site

Adicionar "Auditórios" em três locais do site, com imagem estilo parlamento político para o card de Segmentos.

---

### 1. Hero (src/components/Hero.tsx)

**Adicionar "Auditórios" na lista de segmentos (linha 29-48):**

Inserir novo item após "Cinemas e Teatros":
```jsx
<span className="hidden sm:inline text-white/40">•</span>
<span className="flex items-center gap-1.5 sm:gap-2">
  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
  Auditórios
</span>
```

---

### 2. Segmentos Atendidos (src/components/Segments.tsx)

**Gerar nova imagem:**
- Criar `src/assets/segment-auditorium.jpg` com visual de parlamento/auditório político
- Estilo: salão amplo com poltronas dispostas em semicírculo, carpete elegante, ambiente institucional

**Adicionar import:**
```javascript
import { Presentation } from "lucide-react"; // ícone de apresentação/auditório
import auditoriumImg from "@/assets/segment-auditorium.jpg";
```

**Adicionar novo card ao array `segments` (após Teatros):**
```javascript
{
  icon: Presentation,
  title: "Auditórios",
  image: auditoriumImg,
  benefits: [
    "Espaços corporativos e institucionais",
    "Limpeza para eventos e convenções",
    "Manutenção de carpetes de alto padrão"
  ]
}
```

---

### 3. Soluções Completas de Higienização (src/components/ServiceAreas.tsx)

**Adicionar import:**
```javascript
import { Presentation } from "lucide-react";
```

**Adicionar novo item ao array `serviceTypes` (após Teatros):**
```javascript
{
  icon: Presentation,
  title: "Auditórios",
  description: "Espaços corporativos e institucionais com limpeza para eventos"
}
```

---

### 4. Resumo das Alterações

| Arquivo | Alteração |
|---------|-----------|
| `src/components/Hero.tsx` | Adicionar "Auditórios" à lista de segmentos |
| `src/components/Segments.tsx` | Novo card com imagem + ícone + benefícios |
| `src/components/ServiceAreas.tsx` | Novo item na lista de soluções |
| `src/assets/segment-auditorium.jpg` | Nova imagem estilo parlamento político |

---

### 5. Detalhes Técnicos

**Ícone escolhido:** `Presentation` do lucide-react (representa apresentações/auditórios)

**Imagem a ser gerada:** Auditório estilo parlamento com:
- Poltronas em semicírculo
- Carpete vermelho ou azul escuro
- Ambiente amplo e institucional
- Iluminação profissional

**Grid resultante:**
- Segmentos Atendidos: 6 cards (layout 3x2 em desktop)
- Soluções Completas: 6 itens (layout 3x2 em desktop)
