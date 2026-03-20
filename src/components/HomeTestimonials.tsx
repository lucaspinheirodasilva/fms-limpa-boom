import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";

const testimonials = [
  { name: "Lucas Pinheiro", source: "Google Reviews", content: "A melhor empresa de lavação de tapetes de Florianópolis!", rating: 5 },
  { name: "Susanne Pickler Westphal", source: "Google Reviews", content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa! Tudo muito organizado, parabéns pelo atendimento nota 1000!", rating: 5 },
  { name: "Maria das Graças Moukarzel", source: "Google Reviews", content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização do atendimento. Parabéns para a equipe!", rating: 5 },
  { name: "Juliana Rocha", source: "Local Guide Google", content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem suja. Eles conseguiram deixar com cara de novo! Ficou perfeito! Eles buscaram e entregaram super rápido!", rating: 5 },
  { name: "Vanessa Domingues", source: "Google Reviews", content: "Meu tapete ficou impecável de limpo e muito cheiroso, atendimento maravilhoso! Fiquei muito feliz com o resultado, tapete ficou novo!", rating: 5 },
  { name: "Karen Hinckel", source: "Google Reviews", content: "Maravilhosa, atendimento perfeito, tapetes limpos demais e cheirosos. Explicação, tudo que precisamos, sem pressa alguma, tiraram todas as dúvidas, e os tapetes ficaram como novos!", rating: 5 },
  { name: "Fabrício Espindola", source: "Google Reviews", content: "Sem dúvida a melhor em questões de higienização... agora, é só lá que envio meu tapete...", rating: 5 },
  { name: "Mariana Mattoso", source: "Google Reviews", content: "Trabalho de qualidade e preço justo!", rating: 5 }
];

const HomeTestimonials = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section id="depoimentos" className="py-20 sm:py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos em Florianópolis e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index}
              className="bg-card p-5 sm:p-6 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed text-sm flex-1">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Converse Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
