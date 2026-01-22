import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Lucas Pinheiro",
  company: "Cliente Google Reviews",
  content: "A melhor empresa de lavação de tapetes de Florianópolis!",
  rating: 5
}, {
  name: "Susanne Pickler Westphal",
  company: "Cliente Google Reviews",
  content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa! Tudo muito organizado, parabéns pelo atendimento nota 1000!",
  rating: 5
}, {
  name: "Maria das Graças Moukarzel",
  company: "Cliente Google Reviews",
  content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização do atendimento. Parabéns para a equipe!",
  rating: 5
}, {
  name: "Juliana Rocha",
  company: "Local Guide Google",
  content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem suja. Eles conseguiram deixar com cara de novo! Ficou perfeito! Eles buscaram e entregaram super rápido!",
  rating: 5
}, {
  name: "Vanessa Domingues",
  company: "Cliente Google Reviews",
  content: "Meu tapete ficou impecável de limpo e muito cheiroso, atendimento maravilhoso! Fiquei muito feliz com o resultado, tapete ficou novo!",
  rating: 5
}, {
  name: "Karen Hinckel",
  company: "Cliente Google Reviews",
  content: "Maravilhosa, atendimento perfeito, tapetes limpos demais e cheirosos. Explicação, tudo que precisamos, sem pressa alguma, tiraram todas as dúvidas, e os tapetes ficaram como novos!",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança de empresas e profissionais que escolhem a FMS Higienizações 
            para manter seus ambientes impecáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default Testimonials;