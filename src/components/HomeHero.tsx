import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const HomeHero = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with refined overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,50%,8%)] via-[hsl(215,50%,10%)/0.97] to-[hsl(215,50%,14%)/0.80]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Subtle trust badge */}
          <div className="mb-8 inline-flex items-center gap-2 text-white/60 text-xs tracking-[0.15em] uppercase font-medium">
            <Award className="h-3.5 w-3.5 text-accent" />
            Desde 1999 · Grande Florianópolis
          </div>

          {/* Clean, impactful headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            Higienização
            <br />
            <span className="text-accent">Profissional</span>
          </h1>

          <p className="mb-10 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg font-light">
            Estofados, carpetes, tapetes e colchões. Qualidade e eficiência em
            Florianópolis, São José, Palhoça e Biguaçu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-20 sm:mb-24">
            <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')}
              className="text-sm px-8 py-6 font-semibold tracking-wide">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="hero-outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm px-8 py-6 font-medium tracking-wide group">
              Conheça Nossos Serviços
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Stats — minimal, elegant */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-white/10">
            {[
              { value: "+25", label: "Anos" },
              { value: "3.000+", label: "Clientes" },
              { value: "1.5mi", label: "m² Limpos" },
              { value: "98%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
