import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Lucas Pinheiro",
    source: "Google Reviews",
    content: "A melhor empresa de lavação de tapetes de Florianópolis!",
    rating: 5
  },
  {
    name: "Susanne Pickler Westphal",
    source: "Google Reviews",
    content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa! Tudo muito organizado, parabéns pelo atendimento nota 1000!",
    rating: 5
  },
  {
    name: "Maria das Graças Moukarzel",
    source: "Google Reviews",
    content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização do atendimento. Parabéns para a equipe!",
    rating: 5
  },
  {
    name: "Juliana Rocha",
    source: "Local Guide Google",
    content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem suja. Eles conseguiram deixar com cara de novo! Ficou perfeito! Eles buscaram e entregaram super rápido!",
    rating: 5
  },
  {
    name: "Vanessa Domingues",
    source: "Google Reviews",
    content: "Meu tapete ficou impecável de limpo e muito cheiroso, atendimento maravilhoso! Fiquei muito feliz com o resultado, tapete ficou novo!",
    rating: 5
  },
  {
    name: "Karen Hinckel",
    source: "Google Reviews",
    content: "Maravilhosa, atendimento perfeito, tapetes limpos demais e cheirosos. Explicação, tudo que precisamos, sem pressa alguma, tiraram todas as dúvidas, e os tapetes ficaram como novos!",
    rating: 5
  },
  {
    name: "Fabrício Espindola",
    source: "Google Reviews",
    content: "Sem dúvida a melhor em questões de higienização... agora, é só lá que envio meu tapete...",
    rating: 5
  },
  {
    name: "Mariana Mattoso",
    source: "Google Reviews",
    content: "Trabalho de qualidade e preço justo!",
    rating: 5
  }
];

const HomeTestimonials = () => {
  const whatsappLink = "/whatsapp";

  return (
    <section id="depoimentos" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Depoimentos de Clientes Satisfeitos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de higienização em Florianópolis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative border border-border"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 sm:h-10 sm:w-10 text-primary/10" />
              
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-bold text-foreground text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button 
            size="lg"
            variant="accent"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="font-bold"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Converse Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
