import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sofa, Sparkles, Home, Bed } from "lucide-react";
import upholsteryImg from "@/assets/service-upholstery.jpg";
import rugsImg from "@/assets/service-rugs.jpg";
import carpetImg from "@/assets/hero-carpet-cleaning.jpg";

const services = [
  {
    icon: Sofa,
    title: "Higienização de Sofás e Estofados",
    description: "Limpeza especializada de sofás, poltronas e estofados em Florianópolis e região. Livre-se de manchas, odores e ácaros.",
    image: upholsteryImg,
    link: "/higienizacao-de-estofados",
    benefits: ["Remoção de manchas", "Eliminação de odores", "Tratamento anti-ácaro"]
  },
  {
    icon: Sparkles,
    title: "Lavagem de Tapetes",
    description: "Lavagem de tapetes com remoção de pelos, odores e manchas causados por pets. Tapetes higienizados e livres de sujeira.",
    image: rugsImg,
    link: "/lavagem-de-tapetes",
    benefits: ["Coleta em domicílio", "Limpeza profunda", "Preservação das fibras"]
  },
  {
    icon: Home,
    title: "Limpeza de Carpetes",
    description: "Higienização profissional de carpetes para empresas, escritórios e residências. Tecnologia industrial com secagem rápida.",
    image: carpetImg,
    link: "/limpeza-de-carpetes",
    benefits: ["Secagem em 2-4h", "Atendimento noturno", "Manutenção preventiva"]
  },
  {
    icon: Bed,
    title: "Higienização de Colchões",
    description: "Elimine ácaros, manchas e odores do seu colchão com nossa higienização profissional. Mais saúde e conforto para você.",
    image: upholsteryImg,
    link: "/higienizacao-de-colchoes",
    benefits: ["Elimina 99% dos ácaros", "Remove manchas", "Ambiente saudável"]
  }
];

const HomeServices = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Limpeza de Tapetes e Higienização de Estofados
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Especializada em limpeza de tapetes, carpetes e estofados em Florianópolis e região. 
            Garantimos qualidade, eficiência e cuidado para seus ambientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-border"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="bg-accent/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-accent">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2 sm:gap-3">
                    <Button 
                      className="flex-1 text-sm sm:text-base"
                      variant="accent"
                      onClick={() => window.open(whatsappLink, '_blank')}
                    >
                      Orçamento
                    </Button>
                    <Button 
                      className="flex-1 text-sm sm:text-base"
                      variant="outline"
                      asChild
                    >
                      <Link to={service.link}>Veja mais</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            size="lg"
            variant="accent"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="font-bold text-sm sm:text-base"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Converse Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
