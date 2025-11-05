import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Award, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-carpet-cleaning.jpg";

const Hero = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge de Credibilidade */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 px-6 py-3 text-sm font-semibold text-white shadow-lg">
            <Award className="h-5 w-5 text-accent" />
            <span>15+ Anos de Experiência | 500+ Empresas Atendidas | Resultados Garantidos</span>
          </div>
          
          {/* Headline Principal */}
          <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Higienização Profissional de Carpetes
            <span className="block text-accent mt-2">para Empresas</span>
          </h1>
          
          {/* Segmentos Atendidos */}
          <div className="mb-6 flex flex-wrap gap-3 text-lg md:text-xl font-semibold text-white/95">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Galpões
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Escritórios
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Indústrias
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Condomínios
            </span>
          </div>
          
          {/* Subheadline com Proof Points */}
          <p className="mb-8 text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
            Tecnologia Industrial de Extração a Vapor | Secagem em 2-4h | 
            Equipamentos Importados Kärcher & Windsor | Atendimento Grande Florianópolis, Balneário Camboriú e Itapema
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg"
              variant="accent"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Phone className="mr-2 h-6 w-6" />
              Solicitar Orçamento Sem Compromisso
            </Button>
            
            <Button 
              size="lg"
              variant="hero-outline"
              onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-10 py-7 font-semibold"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
          
          {/* Estatísticas Visuais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+15</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+500</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">+50k</div>
              <div className="text-sm md:text-base text-white/90 font-medium">m² Higienizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Satisfação</div>
            </div>
          </div>
          
          {/* Badges Visuais de Diferenciais */}
          <div className="mt-10 flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-semibold">Equipamentos Industriais</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
              <Clock className="h-6 w-6 text-accent" />
              <span className="font-semibold">Secagem Rápida 2-4h</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="font-semibold">Garantia de Resultado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
