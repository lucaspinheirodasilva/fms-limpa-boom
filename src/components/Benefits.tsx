import { Shield, Sparkles, Clock, Award, Leaf, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Proteção e Durabilidade",
    description: "Nosso processo de limpeza profunda remove sujeira e bactérias, prolongando a vida útil do seu carpete e protegendo seu investimento."
  },
  {
    icon: Sparkles,
    title: "Limpeza Profunda",
    description: "Eliminamos manchas difíceis, odores e ácaros com equipamentos industriais de última geração e produtos especializados."
  },
  {
    icon: Clock,
    title: "Rápida Secagem",
    description: "Tecnologia avançada de extração garante secagem rápida, permitindo que você retome suas atividades em poucas horas."
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Mais de 15 anos de experiência no mercado de higienização profissional. Sua satisfação é nossa prioridade."
  },
  {
    icon: Leaf,
    title: "Produtos Ecológicos",
    description: "Utilizamos produtos biodegradáveis e seguros para sua equipe, clientes e meio ambiente. Higienização responsável."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Técnicos treinados e certificados, preparados para atender pequenas e grandes empresas com o mesmo padrão de excelência."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a FMS Higienizações?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas em limpeza de carpetes comerciais e corporativos, 
            oferecendo soluções completas para manter seu ambiente profissional e saudável.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
