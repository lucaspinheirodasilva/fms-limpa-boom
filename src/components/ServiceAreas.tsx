import { MapPin, Building2, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeImage from "@/assets/commercial-office.jpg";

const areas = [
  {
    city: "Grande Florianópolis",
    districts: ["Centro", "Trindade", "Itacorubi", "João Paulo", "Beira-Mar", "Agronômica"]
  },
  {
    city: "Balneário Camboriú",
    districts: ["Centro", "Barra Sul", "Pioneiros", "Nações", "Estados"]
  },
  {
    city: "Itapema",
    districts: ["Centro", "Meia Praia", "Morretes", "Ilhota"]
  }
];

const serviceTypes = [
  {
    icon: Building2,
    title: "Escritórios Corporativos",
    description: "Limpeza profissional de carpetes em ambientes corporativos, garantindo aparência impecável para receber clientes e colaboradores."
  },
  {
    icon: Factory,
    title: "Estabelecimentos Comerciais",
    description: "Higienização especializada para lojas, restaurantes, hotéis e outros estabelecimentos que necessitam manter padrão superior de limpeza."
  }
];

const ServiceAreas = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Atendimento em Toda a Região
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Levamos nossos serviços de limpeza e higienização de carpetes para empresas 
            em toda a Grande Florianópolis e litoral catarinense.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={officeImage} 
              alt="Escritório comercial com carpetes limpos e higienizados" 
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Cidades Atendidas</h3>
            <div className="space-y-6">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h4 className="text-2xl font-bold text-card-foreground">
                      {area.city}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {area.districts.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {serviceTypes.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary text-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Região Não Está na Lista?
          </h3>
          <p className="text-xl mb-8 opacity-95">
            Entre em contato! Avaliamos atendimento em outras localidades da região.
          </p>
          <Button 
            size="lg"
            variant="hero"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
          >
            Consultar Disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
