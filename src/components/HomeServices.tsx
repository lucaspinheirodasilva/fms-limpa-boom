import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sofa, Sparkles, Home, Bed, ArrowRight } from "lucide-react";
import upholsteryImg from "@/assets/service-upholstery.jpg";
import rugsImg from "@/assets/service-rugs.jpg";
import carpetImg from "@/assets/hero-carpet-cleaning.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const services = [
  {
    icon: Sofa,
    title: "Estofados",
    subtitle: "Sofás, Poltronas & Cadeiras",
    description: "Remoção de manchas, odores e ácaros com técnicas que preservam o tecido.",
    image: upholsteryImg,
    link: "/higienizacao-de-estofados",
  },
  {
    icon: Sparkles,
    title: "Tapetes",
    subtitle: "Lavagem & Higienização",
    description: "Coleta e entrega em domicílio. Limpeza profunda que preserva fibras e cores.",
    image: rugsImg,
    link: "/lavagem-de-tapetes",
  },
  {
    icon: Home,
    title: "Carpetes",
    subtitle: "Residencial & Corporativo",
    description: "Tecnologia industrial com secagem rápida. Ideal para empresas e escritórios.",
    image: carpetImg,
    link: "/limpeza-de-carpetes",
  },
  {
    icon: Bed,
    title: "Colchões",
    subtitle: "Higienização Profunda",
    description: "Elimine 99% dos ácaros e bactérias. Mais saúde e conforto para sua família.",
    image: upholsteryImg,
    link: "/higienizacao-de-colchoes",
  }
];

const HomeServices = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section id="servicos" className="py-24 sm:py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-xl mb-16 sm:mb-20">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
            Soluções em Higienização
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.link}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] flex items-end cursor-pointer">
                <img src={service.image} alt={service.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,50%,8%)] via-[hsl(215,50%,8%)/0.4] to-transparent" />
                
                <div className="relative z-10 p-6 sm:p-8 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-medium">{service.subtitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-sm">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    Ver detalhes
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold text-sm px-8 py-6">
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
