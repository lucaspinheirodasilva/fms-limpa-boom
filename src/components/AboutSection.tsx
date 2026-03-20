import { Button } from "@/components/ui/button";
import processImg from "@/assets/process-cleaning.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const AboutSection = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section id="sobre" className="py-24 sm:py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img src={processImg} alt="Equipe FMS Higienizações" loading="lazy"
                className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">25+</p>
              <p className="text-xs text-primary-foreground/60 mt-1 uppercase tracking-wider">Anos</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Sobre Nós
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Especialistas na Grande Florianópolis
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Desde 1999, a FMS Higienizações atua na Grande Florianópolis com serviços de limpeza e higienização de estofados, tapetes, carpetes e colchões para clientes residenciais e comerciais.
              </p>
              <p>
                Utilizamos técnicas modernas, equipamentos profissionais e produtos que preservam os materiais — garantindo ambientes mais limpos, confortáveis e saudáveis.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Estofados & Sofás",
                "Tapetes & Carpetes",
                "Colchões",
                "Ambientes Comerciais",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold text-sm px-8 py-6">
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
