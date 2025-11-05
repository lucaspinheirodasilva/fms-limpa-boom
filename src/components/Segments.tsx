import { Button } from "@/components/ui/button";
import { Warehouse, Building2, ShoppingBag, Hotel, HeartPulse, Building } from "lucide-react";
import warehouseImg from "@/assets/segment-warehouse.jpg";
import officeImg from "@/assets/segment-office.jpg";
import retailImg from "@/assets/segment-retail.jpg";
import hotelImg from "@/assets/segment-hotel.jpg";
import clinicImg from "@/assets/segment-clinic.jpg";
import condominiumImg from "@/assets/segment-condominium.jpg";

const segments = [
  {
    icon: Warehouse,
    title: "Galpões e Centros Logísticos",
    image: warehouseImg,
    benefits: [
      "Limpeza de grandes áreas com equipamento industrial",
      "Mínimo downtime operacional",
      "Remoção de sujeira pesada e oleosidade"
    ]
  },
  {
    icon: Building2,
    title: "Escritórios Corporativos",
    image: officeImg,
    benefits: [
      "Manutenção preventiva programada",
      "Ambiente profissional e saudável",
      "Limpeza fora do horário comercial"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Lojas e Shopping Centers",
    image: retailImg,
    benefits: [
      "Preservação da imagem comercial",
      "Limpeza sem interrupção das vendas",
      "Remoção de manchas de alto tráfego"
    ]
  },
  {
    icon: Hotel,
    title: "Hotéis, Pousadas e Resorts",
    image: hotelImg,
    benefits: [
      "Padrão hospitality de limpeza",
      "Renovação de carpetes de alto padrão",
      "Eliminação de odores e ácaros"
    ]
  },
  {
    icon: HeartPulse,
    title: "Clínicas, Hospitais e Laboratórios",
    image: clinicImg,
    benefits: [
      "Higienização com produtos certificados",
      "Conformidade ANVISA e normas sanitárias",
      "Eliminação de alérgenos e bactérias"
    ]
  },
  {
    icon: Building,
    title: "Condomínios Empresariais",
    image: condominiumImg,
    benefits: [
      "Manutenção de áreas comuns",
      "Valorização do patrimônio",
      "Planos de manutenção periódica"
    ]
  }
];

const Segments = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section id="segmentos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Segmentos Atendidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções especializadas de higienização de carpetes para cada tipo de negócio, 
            com equipamentos e técnicas adequadas às necessidades específicas do seu setor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-accent/90 backdrop-blur-sm rounded-full p-3">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {segment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou seu segmento? Atendemos diversos outros setores empresariais
          </p>
          <Button 
            size="lg"
            variant="accent"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="font-bold"
          >
            Falar com Especialista do Meu Setor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Segments;
