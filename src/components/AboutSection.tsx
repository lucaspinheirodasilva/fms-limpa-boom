import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import processImg from "@/assets/process-cleaning.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const AboutSection = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const services = [
    {
      title: "Higienização de Estofados",
      description: "Cuidamos da limpeza de sofás, poltronas, cadeiras e puffs, removendo manchas, odores, ácaros e sujeiras acumuladas. Atendemos Florianópolis e São José, com destaque para bairros como Trindade, Jardim Atlântico, Areias e Balneário."
    },
    {
      title: "Limpeza de Tapetes e Carpetes",
      description: "Especializados na remoção de pelos, poeira, manchas e odores, garantimos tapetes e carpetes limpos e higienizados. Nossos serviços cobrem residências e empresas em Palhoça, Biguaçu e bairros como Capoeiras, Santa Mônica e Abraão."
    },
    {
      title: "Higienização de Colchões",
      description: "Elimine ácaros, odores e sujeiras do seu colchão, garantindo noites de sono mais tranquilas e um ambiente saudável. Ideal para clientes em toda a Grande Florianópolis."
    },
    {
      title: "Soluções para Ambientes Comerciais",
      description: "Oferecemos higienização profissional para empresas, escritórios e comércios, com atenção especial para a conservação de estofados e carpetes em áreas de grande circulação."
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={processImg} alt="Equipe FMS Higienizações realizando higienização profissional em Florianópolis" loading="lazy"
                className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold leading-none">1999</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Desde</p>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
              Quem Somos
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Especialistas em Higienização na Grande Florianópolis
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
              Na FMS Higienizações, oferecemos serviços especializados em limpeza e higienização de estofados, tapetes, carpetes e colchões. Desde 1999, nossa empresa atua na Grande Florianópolis, proporcionando ambientes mais limpos, confortáveis e saudáveis para nossos clientes residenciais e comerciais.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
              Nosso objetivo é oferecer <strong className="text-foreground">higienização de alta qualidade</strong>, com técnicas modernas, equipamentos profissionais e produtos que preservam os materiais. Atendemos bairros como Kobrasol, Campinas, Estreito, Coqueiros, Barreiros e toda a região.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{service.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-0.5">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
