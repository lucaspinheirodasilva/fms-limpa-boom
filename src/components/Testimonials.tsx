import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Silva",
    company: "Diretor Administrativo - Grupo Empresarial SC",
    content: "Contratamos a FMS para higienização dos carpetes de nossos escritórios e o resultado superou nossas expectativas. Profissionais extremamente competentes, pontualidade impecável e carpetes que ficaram como novos!",
    rating: 5
  },
  {
    name: "Juliana Mendes",
    company: "Gerente de Facilities - Tech Solutions",
    content: "Trabalho excepcional! A equipe da FMS demonstrou muito profissionalismo, utilizaram equipamentos de ponta e não deixaram nenhum resíduo. Nossos colaboradores notaram imediatamente a diferença na qualidade do ar.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    company: "Proprietário - Hotel Orla Mar",
    content: "Após testar vários serviços de limpeza, finalmente encontramos um parceiro de confiança. A FMS Higienizações entende as necessidades do setor hoteleiro e entrega resultados consistentes. Recomendo sem hesitar!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-accent px-8 py-4 rounded-xl">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">Avaliação 5.0</p>
              <p className="text-sm text-muted-foreground">Baseado em +150 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
