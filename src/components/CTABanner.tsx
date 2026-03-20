import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Pronto para transformar seus ambientes?",
  subtitle = "Solicite um orçamento gratuito e sem compromisso."
}: CTABannerProps) => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight text-balance">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-white/50 mb-8 font-light">
          {subtitle}
        </p>
        <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')}
          className="font-semibold text-sm px-8 py-6">
          <WhatsAppIcon className="mr-2 h-5 w-5" />
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
