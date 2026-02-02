import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Building2, Clock, Zap, Shield } from "lucide-react";
import carpetImg from "@/assets/hero-carpet-cleaning.jpg";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";

const LimpezaCarpetes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const segments = [
    { title: "Escritórios Corporativos", description: "Manutenção preventiva programada fora do horário comercial" },
    { title: "Hotéis e Pousadas", description: "Padrão hospitality de limpeza com produtos premium" },
    { title: "Call Centers", description: "Grandes áreas com alto tráfego e manutenção de ambiente saudável" },
    { title: "Cinemas e Teatros", description: "Carpetes de salas e auditórios com limpeza pós-eventos" },
    { title: "Auditórios", description: "Espaços corporativos e institucionais com limpeza para eventos" },
    { title: "Residências", description: "Limpeza de carpetes residenciais com coleta em domicílio" },
  ];

  const benefits = [
    { icon: Zap, title: "Secagem Rápida", description: "Secagem em 2-4 horas" },
    { icon: Clock, title: "Horário Flexível", description: "Atendimento noturno e fins de semana" },
    { icon: Building2, title: "Empresas", description: "Atendimento corporativo especializado" },
    { icon: Shield, title: "Garantia", description: "Resultados garantidos" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${carpetImg})`
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span>Especialistas em Limpeza de Carpetes desde 1999</span>
              </div>
              
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Higienização Profissional de Carpetes <span className="text-accent">para Empresas</span>
              </h1>
              
              <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed">
                Tecnologia industrial com secagem rápida em 2-4 horas. Atendemos escritórios, hotéis, 
                call centers, cinemas, teatros e residências em toda a Grande Florianópolis.
              </p>
              
              <Button 
                size="lg" 
                variant="accent" 
                onClick={() => window.open(whatsappLink, '_blank')} 
                className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <svg className="mr-2 h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* Segments Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
                Segmentos Atendidos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Soluções Especializadas para Cada Negócio
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Expertise em todos os segmentos empresariais com processos customizados.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {segments.map((segment, index) => (
                <div key={index} className="bg-card p-5 sm:p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{segment.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{segment.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner 
          title="Limpeza de Carpetes Corporativos"
          subtitle="Tecnologia industrial com mínimo downtime!"
        />

        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default LimpezaCarpetes;
