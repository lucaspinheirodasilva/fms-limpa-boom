import { Shield, Clock, Award, Droplets, Leaf, BadgeCheck, Wrench, Zap } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Equipamentos Industriais de Última Geração",
    description: "Extratoras importadas Kärcher e Windsor com alta pressão e temperatura controlada para remoção profunda de sujeira"
  },
  {
    icon: Zap,
    title: "Mínimo Downtime - Secagem Rápida",
    description: "Tecnologia de extração que permite secagem completa em 2-4 horas, sem paralisar suas operações"
  },
  {
    icon: BadgeCheck,
    title: "Certificações e Compliance",
    description: "Produtos e processos certificados, atendendo normas ANVISA, ISO e requisitos corporativos de qualidade"
  },
  {
    icon: Droplets,
    title: "Higienização Profunda e Sanitização",
    description: "Eliminação de 99.9% de ácaros, bactérias e fungos, garantindo ambiente mais saudável para colaboradores e clientes"
  },
  {
    icon: Leaf,
    title: "Produtos Ecológicos Certificados",
    description: "Utilizamos produtos biodegradáveis, não tóxicos e seguros para pessoas, animais e meio ambiente"
  },
  {
    icon: Shield,
    title: "Garantia Total e Pós-Venda",
    description: "Compromisso com o resultado: se não ficar satisfeito, voltamos gratuitamente até atingir a excelência esperada"
  },
  {
    icon: Award,
    title: "Experiência Corporativa",
    description: "15+ anos atendendo grandes empresas, indústrias e condomínios com padrão de excelência e pontualidade"
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description: "Atendimento 24/7 com agendamento em horários comerciais, noturnos ou finais de semana conforme sua necessidade"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a FMS Higienizações?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não somos apenas mais uma empresa de limpeza. Somos especialistas em higienização corporativa 
            com tecnologia industrial, processos certificados e compromisso total com resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
