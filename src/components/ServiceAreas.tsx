import { Button } from "@/components/ui/button";
import { MapPin, Building2, Factory, Store, Hotel, HeartPulse, Home } from "lucide-react";

const cities = [
  {
    name: "Florianópolis",
    districts: ["Centro", "Trindade", "Itacorubi", "Córrego Grande", "João Paulo", "Cacupé"]
  },
  {
    name: "São José",
    districts: ["Centro", "Kobrasol", "Campinas", "Forquilhinhas", "Barreiros"]
  },
  {
    name: "Palhoça",
    districts: ["Pedra Branca", "Pagani", "Centro", "Bela Vista", "Ponte Imaruim"]
  },
  {
    name: "Biguaçu",
    districts: ["Centro", "Fundos", "Tijuquinhas", "São Miguel", "Três Riachos"]
  },
  {
    name: "Balneário Camboriú",
    districts: ["Centro", "Barra Sul", "Nações", "Estados", "Pioneiros", "dos Municípios"]
  },
  {
    name: "Itapema",
    districts: ["Centro", "Meia Praia", "Morretes", "Ilhota", "Perequê"]
  }
];

const serviceTypes = [
  {
    icon: Factory,
    title: "Galpões e Indústrias",
    description: "Limpeza pesada com equipamento industrial de alta performance para grandes áreas"
  },
  {
    icon: Building2,
    title: "Escritórios e Corporações",
    description: "Manutenção preventiva programada fora do horário comercial"
  },
  {
    icon: Store,
    title: "Lojas e Comércio",
    description: "Limpeza rápida e eficiente que não interrompe suas vendas"
  },
  {
    icon: Hotel,
    title: "Hotéis e Hospitality",
    description: "Padrão premium de limpeza com produtos hipoalergênicos"
  },
  {
    icon: HeartPulse,
    title: "Clínicas e Hospitais",
    description: "Higienização hospitalar certificada conforme normas ANVISA"
  },
  {
    icon: Home,
    title: "Condomínios",
    description: "Limpeza de áreas comuns com planos de manutenção"
  }
];

const ServiceAreas = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Tipos de Serviço */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Soluções Completas de Higienização
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Expertise em todos os segmentos empresariais com processos customizados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-accent mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Áreas de Atendimento */}
        <div>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Regiões Atendidas
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Cobertura completa na Grande Florianópolis, Balneário Camboriú e Itapema
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{city.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {city.districts.map((district, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs bg-muted px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-muted-foreground"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center">
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 px-2">
              <span className="font-bold">Não viu sua região?</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Entre em contato conosco!
            </p>
            <Button 
              size="lg"
              variant="accent"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="font-bold text-sm sm:text-base"
            >
              <span className="sm:hidden">Verificar Disponibilidade</span>
              <span className="hidden sm:inline">Verificar Disponibilidade para Minha Região</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
