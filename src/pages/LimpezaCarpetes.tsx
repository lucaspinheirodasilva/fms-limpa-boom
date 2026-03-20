import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Building2, Hotel, Headphones, Film, Drama, Presentation, MapPin, Wrench, Zap, Droplets, Leaf, Clock, Star, Quote } from "lucide-react";
import carpetImg from "@/assets/hero-carpet-cleaning.jpg";
import officeImg from "@/assets/segment-office.jpg";
import hotelImg from "@/assets/segment-hotel.jpg";
import callcenterImg from "@/assets/segment-callcenter.jpg";
import cinemaImg from "@/assets/segment-cinema.jpg";
import theaterImg from "@/assets/segment-theater.jpg";
import auditoriumImg from "@/assets/segment-auditorium.jpg";

const LimpezaCarpetes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const segments = [
    {
      icon: Building2,
      title: "Escritórios Corporativos",
      image: officeImg,
      benefits: [
        "Manutenção preventiva programada",
        "Ambiente profissional e saudável",
        "Limpeza fora do horário comercial"
      ]
    },
    {
      icon: Hotel,
      title: "Hotéis e Pousadas",
      image: hotelImg,
      benefits: [
        "Padrão hospitality de limpeza",
        "Renovação de carpetes de alto padrão",
        "Eliminação de odores e ácaros"
      ]
    },
    {
      icon: Headphones,
      title: "Call Centers",
      image: callcenterImg,
      benefits: [
        "Grandes áreas com alto tráfego",
        "Manutenção de ambiente saudável",
        "Limpeza em horários flexíveis"
      ]
    },
    {
      icon: Film,
      title: "Cinemas",
      image: cinemaImg,
      benefits: [
        "Carpetes vermelhos tradicionais",
        "Grandes salas com alto tráfego",
        "Limpeza pós-sessões"
      ]
    },
    {
      icon: Drama,
      title: "Teatros",
      image: theaterImg,
      benefits: [
        "Carpetes de auditório e palco",
        "Limpeza pós-espetáculos",
        "Preservação de tecidos nobres"
      ]
    },
    {
      icon: Presentation,
      title: "Auditórios",
      image: auditoriumImg,
      benefits: [
        "Espaços corporativos e institucionais",
        "Limpeza para eventos e convenções",
        "Manutenção de carpetes de alto padrão"
      ]
    }
  ];

  const benefits = [
    {
      icon: Wrench,
      title: "Equipamentos Profissionais de Qualidade",
      description: "Equipamentos profissionais de lavagem com produtos de qualidade para remoção profunda de sujeira e manchas"
    },
    {
      icon: Zap,
      title: "Mínimo Downtime - Secagem Rápida",
      description: "Tecnologia de extração que permite secagem completa em 2-4 horas, sem paralisar suas operações"
    },
    {
      icon: Droplets,
      title: "Higienização Profunda e Sanitização",
      description: "Eliminação de 99.9% de ácaros, bactérias e fungos, garantindo ambiente mais saudável para colaboradores e clientes"
    },
    {
      icon: Leaf,
      title: "Produtos Ecológicos Certificados",
      description: "Utilizamos produtos biodegradáveis, não tóxicos e seguros para pessoas, animais e meio ambiente"
    },
    {
      icon: Award,
      title: "Experiência Corporativa",
      description: "25 anos atendendo empresas, hotéis e clínicas com padrão de excelência e pontualidade"
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description: "Horários flexíveis a combinar, com atendimento em horários comerciais, noturnos ou finais de semana conforme sua necessidade"
    }
  ];

  const serviceTypes = [
    {
      icon: Building2,
      title: "Escritórios e Corporações",
      description: "Manutenção preventiva programada fora do horário comercial"
    },
    {
      icon: Hotel,
      title: "Hotéis e Hospitality",
      description: "Padrão premium de limpeza com produtos hipoalergênicos"
    },
    {
      icon: Headphones,
      title: "Call Centers",
      description: "Grandes áreas com alto tráfego e manutenção de ambiente saudável"
    },
    {
      icon: Film,
      title: "Cinemas",
      description: "Grandes salas com carpetes vermelhos e limpeza pós-sessões"
    },
    {
      icon: Drama,
      title: "Teatros",
      description: "Carpetes de auditório com limpeza pós-espetáculos e eventos"
    },
    {
      icon: Presentation,
      title: "Auditórios",
      description: "Espaços corporativos e institucionais com limpeza para eventos"
    }
  ];

  const cities = [
    {
      name: "Florianópolis",
      districts: ["Centro", "Trindade", "Itacorubi", "Córrego Grande", "João Paulo", "Cacupé"]
    },
    {
      name: "São José",
      districts: ["Centro", "Kobrasol", "Campinas", "Forquilhinhas", "Barreiros"]
    },
    {
      name: "Palhoça",
      districts: ["Pedra Branca", "Pagani", "Centro", "Bela Vista", "Ponte Imaruim"]
    },
    {
      name: "Biguaçu",
      districts: ["Centro", "Fundos", "Tijuquinhas", "São Miguel", "Três Riachos"]
    },
  ];

  const testimonials = [
    {
      name: "Lucas Pinheiro",
      source: "Cliente Google Reviews",
      content: "A melhor empresa de lavação de tapetes de Florianópolis!",
      rating: 5
    },
    {
      name: "Susanne Pickler Westphal",
      source: "Cliente Google Reviews",
      content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa! Tudo muito organizado, parabéns pelo atendimento nota 1000!",
      rating: 5
    },
    {
      name: "Maria das Graças Moukarzel",
      source: "Cliente Google Reviews",
      content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização do atendimento. Parabéns para a equipe!",
      rating: 5
    },
    {
      name: "Juliana Rocha",
      source: "Local Guide Google",
      content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem suja. Eles conseguiram deixar com cara de novo! Ficou perfeito! Eles buscaram e entregaram super rápido!",
      rating: 5
    },
    {
      name: "Vanessa Domingues",
      source: "Cliente Google Reviews",
      content: "Meu tapete ficou impecável de limpo e muito cheiroso, atendimento maravilhoso! Fiquei muito feliz com o resultado, tapete ficou novo!",
      rating: 5
    },
    {
      name: "Karen Hinckel",
      source: "Cliente Google Reviews",
      content: "Maravilhosa, atendimento perfeito, tapetes limpos demais e cheirosos. Explicação, tudo que precisamos, sem pressa alguma, tiraram todas as dúvidas, e os tapetes ficaram como novos!",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-[95vh] flex items-center overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${carpetImg})`
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:py-12 md:py-20 py-0">
            <div className="max-w-4xl">
              {/* Badge de Credibilidade */}
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span>
                  <span className="sm:hidden">27+ Anos | 3000+ Empresas</span>
                  <span className="hidden sm:inline">27+ Anos de Experiência | 3000+ Empresas Atendidas | Resultados Garantidos</span>
                </span>
              </div>
              
              {/* Headline Principal */}
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Higienização Profissional de Carpetes <span className="text-accent">para Empresas</span>
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
                <span className="sm:hidden">Tecnologia Industrial | Secagem em 2-4h | </span>
                <span className="hidden sm:inline">Tecnologia Industrial | Secagem em 2-4h | </span>
                Atendimento em Florianópolis, São José, Palhoça e Biguaçu
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 font-bold transition-all duration-300 hover:scale-105 shadow-xl">
                  <svg className="mr-2 h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar Orçamento
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
            </div>
          </div>
        </section>

        {/* Segmentos Atendidos */}
        <section id="segmentos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Segmentos Atendidos
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                Soluções especializadas de higienização de carpetes para cada tipo de negócio
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {segments.map((segment, index) => {
                const Icon = segment.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-border"
                  >
                    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                      <img 
                        src={segment.image} 
                        alt={segment.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 sm:gap-3">
                        <div className="bg-accent/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent-foreground" />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
                          {segment.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6">
                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {segment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="text-accent mt-0.5">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full text-sm sm:text-base"
                        variant="outline"
                        onClick={() => window.open(whatsappLink, '_blank')}
                      >
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                Não encontrou seu segmento? Atendemos diversos outros setores empresariais
              </p>
              <Button 
                size="lg"
                variant="accent"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="font-bold text-sm sm:text-base"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Por Que Escolher */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Por Que Escolher a FMS Higienizações?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                Especialistas em higienização corporativa com tecnologia industrial e compromisso total com resultados
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Soluções Completas */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            {/* Tipos de Serviço */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Soluções Completas de Higienização
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                  Expertise em todos os segmentos empresariais com processos customizados
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {serviceTypes.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                    >
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-accent mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Áreas de Atendimento */}
            <div>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Regiões Atendidas
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                  Cobertura completa na Grande Florianópolis
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 sm:p-5 md:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{city.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {city.districts.map((district, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs bg-muted px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-muted-foreground"
                        >
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center">
                <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 px-2">
                  <span className="font-bold">Não viu sua região?</span>
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  Entre em contato conosco!
                </p>
                <Button 
                  size="lg"
                  variant="accent"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="font-bold text-sm sm:text-base"
                >
                  <span className="sm:hidden">Verificar Disponibilidade</span>
                  <span className="hidden sm:inline">Verificar Disponibilidade para Minha Região</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                A confiança de empresas e profissionais que escolhem a FMS Higienizações 
                para manter seus ambientes impecáveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative border border-border"
                >
                  <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 text-primary/20" />
                  
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border pt-3 sm:pt-4">
                    <p className="font-bold text-card-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LimpezaCarpetes;
