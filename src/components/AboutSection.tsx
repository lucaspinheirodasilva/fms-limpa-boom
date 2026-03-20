import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import processImg from "@/assets/process-cleaning.jpg";

const AboutSection = () => {
  const whatsappLink = "/whatsapp";

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
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <img 
              src={processImg} 
              alt="Equipe FMS Higienizações em ação"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
              <p className="text-2xl sm:text-3xl font-bold">Desde 1999</p>
              <p className="text-sm sm:text-base">Na Grande Florianópolis</p>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
              ━ Quem Somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Especialistas em Higienização de Estofados e Tapetes na Grande Florianópolis
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Na FMS Higienizações, oferecemos serviços especializados em limpeza e higienização de estofados, tapetes, carpetes e colchões. Desde 1999, nossa empresa atua na Grande Florianópolis, proporcionando ambientes mais limpos, confortáveis e saudáveis para nossos clientes residenciais e comerciais.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Nosso objetivo é oferecer <strong>higienização de alta qualidade</strong>, com técnicas modernas, equipamentos profissionais e produtos que preservam os materiais e garantem resultados duradouros. Atendemos bairros como Kobrasol, Campinas, Estreito, Coqueiros, Barreiros e toda a região.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{service.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              variant="accent"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="font-bold"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
