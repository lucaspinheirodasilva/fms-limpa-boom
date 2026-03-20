import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Building2, Hotel, Headphones, Film, Drama, Presentation, MapPin, Wrench, Zap, Droplets, Leaf, Clock, Star, Quote } from "lucide-react";
import carpetImg from "@/assets/hero-carpet-cleaning.jpg";
import officeImg from "@/assets/segment-office.jpg";
import hotelImg from "@/assets/segment-hotel.jpg";
import callcenterImg from "@/assets/segment-callcenter.jpg";
import cinemaImg from "@/assets/segment-cinema.jpg";
import theaterImg from "@/assets/segment-theater.jpg";
import auditoriumImg from "@/assets/segment-auditorium.jpg";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const LimpezaCarpetes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const segments = [
    { icon: Building2, title: "Escritórios Corporativos", image: officeImg, benefits: ["Manutenção preventiva programada", "Ambiente profissional e saudável", "Limpeza fora do horário comercial"] },
    { icon: Hotel, title: "Hotéis e Pousadas", image: hotelImg, benefits: ["Padrão hospitality de limpeza", "Renovação de carpetes de alto padrão", "Eliminação de odores e ácaros"] },
    { icon: Headphones, title: "Call Centers", image: callcenterImg, benefits: ["Grandes áreas com alto tráfego", "Manutenção de ambiente saudável", "Limpeza em horários flexíveis"] },
    { icon: Film, title: "Cinemas", image: cinemaImg, benefits: ["Carpetes vermelhos tradicionais", "Grandes salas com alto tráfego", "Limpeza pós-sessões"] },
    { icon: Drama, title: "Teatros", image: theaterImg, benefits: ["Carpetes de auditório e palco", "Limpeza pós-espetáculos", "Preservação de tecidos nobres"] },
    { icon: Presentation, title: "Auditórios", image: auditoriumImg, benefits: ["Espaços corporativos e institucionais", "Limpeza para eventos e convenções", "Manutenção de carpetes de alto padrão"] }
  ];

  const benefits = [
    { icon: Wrench, title: "Equipamentos Profissionais", description: "Equipamentos profissionais de lavagem com produtos de qualidade para remoção profunda de sujeira e manchas" },
    { icon: Zap, title: "Secagem Rápida", description: "Tecnologia de extração que permite secagem completa em 2-4 horas, sem paralisar suas operações" },
    { icon: Droplets, title: "Higienização e Sanitização", description: "Eliminação de 99.9% de ácaros, bactérias e fungos, garantindo ambiente mais saudável" },
    { icon: Leaf, title: "Produtos Ecológicos", description: "Produtos biodegradáveis, não tóxicos e seguros para pessoas, animais e meio ambiente" },
    { icon: Award, title: "Experiência Corporativa", description: "25 anos atendendo empresas, hotéis e clínicas com padrão de excelência" },
    { icon: Clock, title: "Horários Flexíveis", description: "Atendimento em horários comerciais, noturnos ou finais de semana" }
  ];

  const serviceTypes = [
    { icon: Building2, title: "Escritórios e Corporações", description: "Manutenção preventiva programada fora do horário comercial" },
    { icon: Hotel, title: "Hotéis e Hospitality", description: "Padrão premium de limpeza com produtos hipoalergênicos" },
    { icon: Headphones, title: "Call Centers", description: "Grandes áreas com alto tráfego e manutenção de ambiente saudável" },
    { icon: Film, title: "Cinemas", description: "Grandes salas com carpetes vermelhos e limpeza pós-sessões" },
    { icon: Drama, title: "Teatros", description: "Carpetes de auditório com limpeza pós-espetáculos e eventos" },
    { icon: Presentation, title: "Auditórios", description: "Espaços corporativos e institucionais com limpeza para eventos" }
  ];

  const cities = [
    { name: "Florianópolis", districts: ["Centro", "Trindade", "Itacorubi", "Córrego Grande", "João Paulo", "Cacupé"] },
    { name: "São José", districts: ["Centro", "Kobrasol", "Campinas", "Forquilhinhas", "Barreiros"] },
    { name: "Palhoça", districts: ["Pedra Branca", "Pagani", "Centro", "Bela Vista", "Ponte Imaruim"] },
    { name: "Biguaçu", districts: ["Centro", "Fundos", "Tijuquinhas", "São Miguel", "Três Riachos"] },
  ];

  const testimonials = [
    { name: "Lucas Pinheiro", source: "Google Reviews", content: "A melhor empresa de lavação de tapetes de Florianópolis!", rating: 5 },
    { name: "Susanne Pickler Westphal", source: "Google Reviews", content: "O atendimento deles é excelente! Muito ágil e direto. Mandei meu tapete para lavar e eles buscaram e devolveram em casa! Tudo muito organizado, parabéns pelo atendimento nota 1000!", rating: 5 },
    { name: "Maria das Graças Moukarzel", source: "Google Reviews", content: "Trabalho perfeito, muito bem realizado. Gentileza, agilidade e competência desde o contato inicial até a finalização do atendimento. Parabéns para a equipe!", rating: 5 },
    { name: "Juliana Rocha", source: "Local Guide Google", content: "Limpeza maravilhosa! Meu tapete nunca tinha sido lavado, estava bem suja. Eles conseguiram deixar com cara de novo! Ficou perfeito! Eles buscaram e entregaram super rápido!", rating: 5 },
    { name: "Vanessa Domingues", source: "Google Reviews", content: "Meu tapete ficou impecável de limpo e muito cheiroso, atendimento maravilhoso! Fiquei muito feliz com o resultado, tapete ficou novo!", rating: 5 },
    { name: "Karen Hinckel", source: "Google Reviews", content: "Maravilhosa, atendimento perfeito, tapetes limpos demais e cheirosos. Explicação, tudo que precisamos, sem pressa alguma, tiraram todas as dúvidas, e os tapetes ficaram como novos!", rating: 5 }
  ];

  return (
    <>
      <SEOHead
        title="Limpeza de Carpetes Profissional em Florianópolis | FMS Higienizações"
        description="Higienização profissional de carpetes para escritórios, hotéis, cinemas e auditórios em Florianópolis, São José, Palhoça e Biguaçu. 25+ anos de experiência. Secagem em 2-4h."
        canonical="/limpeza-de-carpetes"
        keywords="limpeza de carpete florianópolis, higienização de carpete são josé, limpeza carpete escritório, limpeza carpete hotel, lavagem carpete comercial palhoça, limpeza carpete biguaçu"
        jsonLd={{
          "@type": "Service",
          "serviceType": "Limpeza de Carpetes",
          "provider": { "@type": "LocalBusiness", "name": "FMS Higienizações" }
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${carpetImg})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,10%)] via-[hsl(215,50%,14%)/0.95] to-[hsl(215,40%,18%)/0.85]" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-28 md:py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-medium text-white/90 tracking-wider uppercase">
                <Award className="h-4 w-4 text-accent" />
                27+ Anos · 3000+ Empresas Atendidas
              </div>

              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                Higienização Profissional de Carpetes para Empresas
              </h1>

              <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base text-white/80">
                {["Escritórios", "Hotéis", "Cinemas e Teatros", "Auditórios", "Residenciais"].map((seg) => (
                  <span key={seg} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {seg}
                  </span>
                ))}
              </div>

              <p className="mb-8 text-sm sm:text-base text-white/60 font-light">
                Tecnologia Industrial · Secagem em 2-4h · Florianópolis, São José, Palhoça e Biguaçu
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-16 sm:mb-20">
                <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold px-8 py-6">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Button>
                <Button size="lg" variant="hero-outline" onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-6">
                  Conheça Nossos Serviços
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                {[
                  { value: "+15", label: "Anos de Experiência" },
                  { value: "+3.000", label: "Empresas Atendidas" },
                  { value: "+1.5mi", label: "m² Higienizados" },
                  { value: "98%", label: "Satisfação" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Segmentos */}
        <section id="segmentos" className="py-20 sm:py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] mb-3">Segmentos</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Segmentos Atendidos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluções especializadas de higienização de carpetes para cada tipo de negócio
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment, index) => {
                const Icon = segment.icon;
                return (
                  <div key={index} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-lg">
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img src={segment.image} alt={`Limpeza de carpete para ${segment.title} em Florianópolis`} loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,50%,12%)/0.9] via-[hsl(215,50%,12%)/0.3] to-transparent" />
                      <div className="absolute bottom-4 left-5 flex items-center gap-3">
                        <div className="bg-accent rounded-lg p-2.5">
                          <Icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">{segment.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-2 mb-5">
                        {segment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/70">
                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full text-sm" variant="outline" onClick={() => window.open(whatsappLink, '_blank')}>
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-5">Não encontrou seu segmento? Atendemos diversos setores.</p>
              <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 sm:py-24 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Por Que Escolher a FMS?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Especialistas em higienização corporativa com tecnologia industrial
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group bg-card p-6 rounded-xl border border-border hover:border-accent/20 transition-all duration-300">
                    <div className="mb-4 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Soluções e Regiões */}
        <section className="py-20 sm:py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Soluções Completas de Higienização
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Expertise em todos os segmentos empresariais com processos customizados
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceTypes.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-accent/20 transition-all">
                      <Icon className="h-8 w-8 text-accent mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Regiões */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Regiões Atendidas
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Cobertura completa na Grande Florianópolis
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {cities.map((city, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-2.5 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">{city.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {city.districts.map((district, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 border border-border rounded-xl p-6 sm:p-8 text-center">
                <p className="text-foreground mb-5">
                  <strong>Não viu sua região?</strong> Entre em contato conosco!
                </p>
                <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
                  Verificar Disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 sm:py-24 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A confiança de empresas e profissionais que escolhem a FMS Higienizações.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 sm:p-8 rounded-xl border border-border relative flex flex-col">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{testimonial.source}</p>
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
