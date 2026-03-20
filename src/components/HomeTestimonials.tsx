import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Lucas Pinheiro", content: "A melhor empresa de lavação de tapetes de Florianópolis!" },
  { name: "Susanne Westphal", content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa!" },
  { name: "Maria das Graças M.", content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização." },
  { name: "Juliana Rocha", content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem sujo. Eles conseguiram deixar com cara de novo!" },
  { name: "Vanessa Domingues", content: "Meu tapete ficou impecável de limpo e muito cheiroso. Fiquei muito feliz com o resultado, tapete ficou novo!" },
  { name: "Karen Hinckel", content: "Atendimento perfeito, tapetes limpos demais e cheirosos. Tiraram todas as dúvidas, e os tapetes ficaram como novos!" },
];

const HomeTestimonials = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-xl mb-16 sm:mb-20">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className="group bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-accent/20 transition-all duration-300 flex flex-col">
              <Quote className="h-5 w-5 text-accent/30 mb-4" />
              
              <p className="text-foreground/70 mb-6 leading-relaxed text-sm flex-1">
                {t.content}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Google Reviews</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
