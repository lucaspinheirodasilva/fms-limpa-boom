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
    <section id="servicos" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Nossos Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluções em Higienização Profissional
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especializada em limpeza de tapetes, carpetes e estofados em Florianópolis e região.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-lg">
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img src={service.image} alt={service.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,50%,12%)/0.9] via-[hsl(215,50%,12%)/0.3] to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-accent rounded-lg p-2.5">
                        <Icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/70">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button className="flex-1 text-sm" variant="accent" size="sm"
                      onClick={() => window.open(whatsappLink, '_blank')}>
                      Orçamento
                    </Button>
                    <Button className="flex-1 text-sm group/btn" variant="outline" size="sm" asChild>
                      <Link to={service.link}>
                        Saiba mais
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Converse Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
