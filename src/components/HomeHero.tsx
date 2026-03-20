import { Button } from "@/components/ui/button";
import { Award, Sofa, Sparkles, Home } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const HomeHero = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,10%)] via-[hsl(215,50%,14%)/0.95] to-[hsl(215,40%,18%)/0.85]" />
      </div>

      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/3 right-1/6 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-medium text-white/90 tracking-wider uppercase">
            <Award className="h-4 w-4 text-accent flex-shrink-0" />
            Desde 1999 · Grande Florianópolis
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance">
            Higienização Profissional de Estofados e Tapetes
          </h1>

          <p className="mb-8 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl font-light">
            Lavagem e higienização de estofados, carpetes e tapetes com qualidade e eficiência em{" "}
            <span className="text-white font-medium">Florianópolis, São José, Palhoça e Biguaçu</span>.
          </p>

          <div className="mb-10 sm:mb-12 flex flex-wrap gap-3">
            {[
              { icon: Sofa, label: "Estofados" },
              { icon: Sparkles, label: "Tapetes" },
              { icon: Home, label: "Carpetes" },
              { icon: Sparkles, label: "Colchões" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm rounded-full px-4 py-2 border border-white/[0.08]">
                <item.icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-white/90 text-xs sm:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16 sm:mb-20">
            <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')}
              className="text-sm sm:text-base px-8 py-6 font-semibold tracking-wide">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="hero-outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm sm:text-base px-8 py-6 font-medium tracking-wide">
              Conheça Nossos Serviços
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {[
              { value: "+25", label: "Anos de Experiência" },
              { value: "+3.000", label: "Clientes Atendidos" },
              { value: "+1.5mi", label: "m² Higienizados" },
              { value: "98%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
