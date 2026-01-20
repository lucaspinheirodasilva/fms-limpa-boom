import { Shield, Clock, Award, Droplets, Leaf, BadgeCheck, Wrench, Zap } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Equipamentos Profissionais de Qualidade",
    description: "Equipamentos profissionais de lavagem com produtos de qualidade para remoção profunda de sujeira e manchas"
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
    description: "25 anos atendendo empresas, hotéis e clínicas com padrão de excelência e pontualidade"
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description: "Atendimento 24/7 com agendamento em horários comerciais, noturnos ou finais de semana conforme sua necessidade"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Por Que Escolher a FMS Higienizações?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Especialistas em higienização corporativa com tecnologia industrial e compromisso total com resultados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
