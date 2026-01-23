import { Button } from "@/components/ui/button";
import { Building2, Hotel, Headphones, Film, Drama } from "lucide-react";
import officeImg from "@/assets/segment-office.jpg";
import hotelImg from "@/assets/segment-hotel.jpg";
import callcenterImg from "@/assets/segment-callcenter.jpg";
import cinemaImg from "@/assets/segment-cinema.jpg";
import theaterImg from "@/assets/segment-theater.jpg";

const segments = [
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
    icon: Hotel,
    title: "Hotéis e Pousadas",
    image: hotelImg,
    benefits: [
      "Padrão hospitality de limpeza",
      "Renovação de carpetes de alto padrão",
      "Eliminação de odores e ácaros"
    ]
  },
  {
    icon: Headphones,
    title: "Call Centers",
    image: callcenterImg,
    benefits: [
      "Grandes áreas com alto tráfego",
      "Manutenção de ambiente saudável",
      "Limpeza em horários flexíveis"
    ]
  },
  {
    icon: Film,
    title: "Cinemas",
    image: cinemaImg,
    benefits: [
      "Carpetes vermelhos tradicionais",
      "Grandes salas com alto tráfego",
      "Limpeza pós-sessões"
    ]
  },
  {
    icon: Drama,
    title: "Teatros",
    image: theaterImg,
    benefits: [
      "Carpetes de auditório e palco",
      "Limpeza pós-espetáculos",
      "Preservação de tecidos nobres"
    ]
  }
];

const Segments = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section id="segmentos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Segmentos Atendidos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Soluções especializadas de higienização de carpetes para cada tipo de negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-border"
              >
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 sm:gap-3">
                    <div className="bg-accent/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {segment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full text-sm sm:text-base"
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

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
            Não encontrou seu segmento? Atendemos diversos outros setores empresariais
          </p>
          <Button 
            size="lg"
            variant="accent"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="font-bold text-sm sm:text-base"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Segments;