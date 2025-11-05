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
    description: "Limpeza pesada com equipamento industrial de alta performance para grandes áreas e carpetes industriais"
  },
  {
    icon: Building2,
    title: "Escritórios e Corporações",
    description: "Manutenção preventiva programada fora do horário comercial, preservando a rotina de trabalho"
  },
  {
    icon: Store,
    title: "Lojas e Comércio",
    description: "Limpeza rápida e eficiente que não interrompe suas vendas, mantendo a imagem profissional"
  },
  {
    icon: Hotel,
    title: "Hotéis e Hospitality",
    description: "Padrão premium de limpeza para hotéis, pousadas e resorts, com produtos hipoalergênicos"
  },
  {
    icon: HeartPulse,
    title: "Clínicas e Hospitais",
    description: "Higienização hospitalar certificada com produtos que atendem normas ANVISA e sanitárias"
  },
  {
    icon: Home,
    title: "Condomínios",
    description: "Limpeza de áreas comuns, salões de festas, halls e corredores com planos de manutenção"
  }
];

const ServiceAreas = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Tipos de Serviço */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Soluções Completas de Higienização
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise em todos os segmentos empresariais com processos customizados 
              para cada tipo de ambiente e necessidade operacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Áreas de Atendimento */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Regiões Atendidas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cobertura completa na Grande Florianópolis, Balneário Camboriú e Itapema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {city.districts.map((district, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground mb-6">
              <span className="font-bold">Não viu sua região ou segmento listado?</span>
              <br />
              Entre em contato conosco! Atendemos diversas outras localidades e setores empresariais
            </p>
            <Button 
              size="lg"
              variant="accent"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="font-bold"
            >
              Verificar Disponibilidade para Minha Região
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
