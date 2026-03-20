import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Truck, Clock, Shield, Sparkles, Leaf, Users, MapPin, ChevronRight } from "lucide-react";
import rugsImg from "@/assets/service-rugs.jpg";
import lavanderiaImg from "@/assets/tapete-lavanderia.jpg";
import coletaImg from "@/assets/tapete-coleta.jpg";
import petsImg from "@/assets/tapete-pets.jpg";
import higienizacaoImg from "@/assets/tapete-higienizacao.jpg";
import tapeteLimpoImg from "@/assets/tapete-limpo.jpg";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LavagemTapetes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const services = [
    {
      title: "Lavanderia de Tapetes Profissional",
      subtitle: "Florianópolis e São José",
      description: "Somos uma lavanderia especializada em limpeza e higienização de tapetes com equipamentos industriais e produtos profissionais.",
      highlights: [
        "Lavagem profunda com equipamentos industriais",
        "Todos os tipos: persas, orientais, shaggy, sisal e sintéticos",
        "Preservação das fibras e cores originais",
        "Secagem controlada em ambiente adequado"
      ],
      image: lavanderiaImg,
    },
    {
      title: "Coleta e Entrega em Domicílio",
      subtitle: "Praticidade para você",
      description: "Não precisa se preocupar com o transporte. Buscamos e devolvemos seu tapete limpo e higienizado no conforto da sua casa.",
      highlights: [
        "Coleta agendada pelo WhatsApp",
        "Atendemos casas, apartamentos e condomínios",
        "Entrega rápida após a limpeza",
        "Cobertura em toda a Grande Florianópolis"
      ],
      image: coletaImg,
    },
    {
      title: "Tapetes Sujos por Pets?",
      subtitle: "A gente resolve!",
      description: "Seu pet fez xixi no tapete ou soltou muitos pelos? Nossa lavagem especializada remove completamente odores e manchas de animais.",
      highlights: [
        "Produtos enzimáticos que eliminam o odor na raiz",
        "Remoção completa de pelos e sujeiras",
        "Seguro para todas as fibras do tapete",
        "Resultado garantido contra odores"
      ],
      image: petsImg,
    },
    {
      title: "Higienização Completa de Tapetes",
      subtitle: "Saúde e conforto",
      description: "Elimine ácaros, bactérias, manchas e odores do seu tapete com nosso processo profissional de higienização completa.",
      highlights: [
        "Aspiração profunda e pré-tratamento de manchas",
        "Lavagem com extração a quente",
        "Eliminação de ácaros e bactérias",
        "Secagem controlada e inspeção final"
      ],
      image: higienizacaoImg,
    }
  ];

  const benefits = [
    { icon: Truck, title: "Coleta e Entrega", description: "Buscamos e devolvemos seu tapete em casa" },
    { icon: Shield, title: "Preservação das Fibras", description: "Técnicas que não danificam o tecido" },
    { icon: Sparkles, title: "Remoção de Manchas", description: "Eliminamos até as manchas mais difíceis" },
    { icon: Clock, title: "Entrega Rápida", description: "Seu tapete de volta em poucos dias" },
    { icon: Leaf, title: "Produtos Ecológicos", description: "Seguros para crianças, pets e alérgicos" },
    { icon: Users, title: "Profissionais Treinados", description: "Equipe capacitada com +27 anos de experiência" },
  ];

  const neighborhoods = [
    {
      city: "Florianópolis",
      areas: "Centro, Trindade, Estreito, Coqueiros, Santa Mônica, Abraão, Capoeiras, Itacorubi, Córrego Grande, Lagoa da Conceição, Campeche, Ingleses, Canasvieiras"
    },
    {
      city: "São José",
      areas: "Kobrasol, Campinas, Barreiros, Jardim Atlântico, Areias, Forquilhinhas, Ipiranga, Serraria, Bela Vista"
    },
    {
      city: "Palhoça",
      areas: "Pedra Branca, Pagani, Aririu, Centro, Passa Vinte, Caminho Novo"
    },
    {
      city: "Biguaçu",
      areas: "Centro, Fundos, Vendaval, Jardim Janaína"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${rugsImg})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span>Especialistas em Lavagem de Tapetes desde 1999</span>
              </div>
              
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Lavagem e Higienização de Tapetes Completa <span className="text-accent">em Florianópolis</span>
              </h1>
              
              <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl">
                A FMS Higienizações é especialista em lavagem de tapetes em Florianópolis, São José, Palhoça e região. 
                Trabalhamos com lavagem a seco, limpeza profunda e higienização completa, 
                removendo ácaros, manchas, odores e sujeiras acumuladas.
              </p>
              
              <p className="mb-6 sm:mb-8 text-sm sm:text-base text-white/90">
                Atendemos <strong>residências e empresas</strong> com eficiência, segurança e garantia de qualidade.
              </p>
              
              <Button 
                size="lg" 
                variant="accent" 
                onClick={() => window.open(whatsappLink, '_blank')} 
                className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* Services with Alternating Images */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
                Nossos Serviços
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Limpeza de Tapetes e Higienização em Florianópolis
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Conheça nossos serviços especializados com equipamentos profissionais e equipe treinada.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300`}
                >
                  <div className="w-full md:w-5/12 h-56 sm:h-64 md:h-auto md:min-h-[320px]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wide mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-5">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Button 
                        variant="accent" 
                        onClick={() => window.open(whatsappLink, '_blank')}
                        className="font-semibold"
                      >
                        <WhatsAppIcon className="mr-2 h-4 w-4" />
                        Solicitar Orçamento
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
                Por que escolher a FMS?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Vantagens do Nosso Serviço
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-5 sm:p-7 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                    </div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-1">{benefit.title}</h4>
                    <p className="text-white/70 text-xs sm:text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
                  ━ Quem Somos
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Referência em Lavagem de Tapetes na Grande Florianópolis
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
                  Desde 1999, a FMS Higienizações é referência em limpeza profissional de tapetes em Florianópolis, 
                  São José, Palhoça e Biguaçu. Atendemos clientes residenciais, comerciais e condomínios com 
                  coleta em domicílio, agilidade e alto padrão de qualidade.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                  Oferecemos serviços especializados em limpeza e higienização de estofados, 
                  tapetes, carpetes e colchões, proporcionando ambientes mais limpos, 
                  confortáveis e saudáveis.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Higienização de Estofados: sofás, poltronas, cadeiras e puffs",
                    "Limpeza de Tapetes e Carpetes: remoção de pelos, poeira e manchas",
                    "Higienização de Colchões: eliminação de ácaros e odores",
                    "Soluções Comerciais: escritórios, hotéis e clínicas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  variant="accent"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="font-bold"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Conheça Nossos Serviços
                </Button>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <img 
                  src={tapeteLimpoImg} 
                  alt="Tapete limpo e higienizado pela FMS Higienizações" 
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />

                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Bairros Atendidos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {neighborhoods.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{item.city}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{item.areas}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-0 items-stretch bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="w-full md:w-5/12 h-64 md:h-auto">
                <img 
                  src={tapeteLimpoImg} 
                  alt="Tapete limpo - FMS Higienizações" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Para mais informações sobre nossos serviços
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  Entre em contato pelo WhatsApp e solicite um orçamento sem compromisso. 
                  Atendemos toda a Grande Florianópolis com coleta e entrega!
                </p>
                <div>
                  <Button 
                    size="lg"
                    variant="accent"
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="font-bold text-base sm:text-lg px-8 py-6"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    Fale Conosco Agora!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner 
          title="Lavagem de Tapetes e Limpeza de Estofados na Grande Florianópolis"
          subtitle="com rapidez, segurança e garantia de qualidade!"
        />

        {/* YouTube Video */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wide mb-2 block">
                Veja na Prática
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Veja a FMS Higienizações em Ação
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Confira nosso trabalho de impermeabilização e higienização em 
                Florianópolis, São José, Palhoça e Biguaçu.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/RvMpGo3Fzpg"
                  title="FMS Higienizações - Impermeabilização de Estofados"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default LavagemTapetes;
