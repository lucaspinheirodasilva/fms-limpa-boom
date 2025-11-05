import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-carpet-cleaning.jpg";

const Hero = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur-sm px-6 py-2 text-sm font-semibold text-white">
            <CheckCircle2 className="h-4 w-4" />
            Atendemos toda Grande Florianópolis
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Carpetes Impecáveis,
            <span className="block text-secondary">Ambientes Mais Saudáveis</span>
          </h1>
          
          <p className="mb-8 text-xl md:text-2xl text-white/95 leading-relaxed">
            Limpeza e higienização profissional de carpetes para empresas na Grande Florianópolis, 
            Balneário Camboriú e Itapema. Equipamentos de última geração e resultados garantidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              variant="hero"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento Grátis
            </Button>
            
            <Button 
              size="lg"
              variant="hero-outline"
              onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Conheça Nossos Diferenciais
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Equipamentos Profissionais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Produtos Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Resultado Garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
