import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Higienização Profissional na Grande Florianópolis",
  subtitle = "Rapidez, segurança e garantia de qualidade."
}: CTABannerProps) => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,14%)] to-[hsl(215,40%,22%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-white/70 mb-8 font-light">
          {subtitle}
        </p>
        <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')}
          className="font-semibold text-sm sm:text-base px-8 py-6">
          <WhatsAppIcon className="mr-2 h-5 w-5" />
          Fale Conosco
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
