import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Award, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-carpet-cleaning.jpg";
const Hero = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";
  return <section className="relative min-h-[90vh] sm:min-h-[95vh] flex items-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:py-12 md:py-20 py-0">
        <div className="max-w-4xl">
          {/* Badge de Credibilidade */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
            <span>
              <span className="sm:hidden">15+ Anos | 500+ Empresas</span>
              <span className="hidden sm:inline">27+ Anos de Experiência | 3000+ Empresas Atendidas | Resultados Garantidos</span>
            </span>
          </div>
          
          {/* Headline Principal */}
          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Higienização Profissional de Carpetes
            <span className="block text-accent mt-1 sm:mt-2">para Empresas</span>
          </h1>
          
          {/* Segmentos Atendidos - Grid em mobile */}
          <div className="mb-4 sm:mb-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl font-semibold text-white/95">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              Escritórios
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              Hotéis
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              Cinemas e Teatros
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              Auditórios
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
              Residenciais
            </span>
          </div>
          
          {/* Subheadline com Proof Points */}
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium">
            <span className="hidden sm:inline"></span>
            <span className="sm:hidden">Tecnologia Industrial | Secagem em 2-4h | </span>
            Atendimento em Florianópolis, São José, Palhoça e Biguaçu
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 font-bold transition-all duration-300 hover:scale-105 shadow-xl">
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sm:hidden">Solicitar Orçamento</span>
              <span className="hidden sm:inline">Solicitar Orçamento Sem Compromisso</span>
            </Button>
            
            <Button size="lg" variant="hero-outline" onClick={() => document.getElementById('segmentos')?.scrollIntoView({
            behavior: 'smooth'
          })} className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 font-semibold">
              Conheça Nossos Serviços
            </Button>
          </div>
          
          {/* Estatísticas Visuais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">+15</div>
              <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">+3.000</div>
              <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">+1.5mi</div>
              <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">m² Higienizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">Satisfação</div>
            </div>
          </div>
          
          {/* Badges Visuais de Diferenciais - Escondidos em mobile pequeno */}
          <div className="mt-6 sm:mt-10 hidden sm:flex flex-wrap gap-3 sm:gap-6 text-white">
            
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
