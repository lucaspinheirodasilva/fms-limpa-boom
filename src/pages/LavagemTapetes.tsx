import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Truck, Clock, Shield, Sparkles } from "lucide-react";
import rugsImg from "@/assets/service-rugs.jpg";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const LavagemTapetes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const services = [
    { title: "Lavanderia de Tapetes em Florianópolis e São José", description: "Sua tapete sujo ou manchado? Somos uma lavanderia especializada em limpeza e higienização de tapetes. Usamos produtos seguros e técnicas modernas para preservar as fibras e devolver a beleza do seu tapete." },
    { title: "Limpeza de Tapetes com Coleta em Domicílio", description: "Oferecemos serviço de coleta e entrega de tapetes para limpeza e higienização. Ideal para quem busca praticidade e qualidade. Atendemos condomínios, casas e empresas." },
    { title: "Tapetes Sujos por Pets? A Gente Resolve!", description: "Seu pet fez xixi no tapete ou soltou muitos pelos? Nossa lavagem especializada remove completamente odores causados por cães e gatos, sem danificar as fibras do tecido." },
    { title: "Higienização de Tapetes Completa", description: "Elimine ácaros, manchas e odores do seu tapete com nossa higienização profissional. Mais saúde e conforto para você e sua família." }
  ];

  const benefits = [
    { icon: Truck, title: "Coleta e Entrega", description: "Buscamos e devolvemos seu tapete em casa" },
    { icon: Shield, title: "Preservação das Fibras", description: "Técnicas que não danificam o tecido" },
    { icon: Sparkles, title: "Remoção de Manchas", description: "Eliminamos até as manchas mais difíceis" },
    { icon: Clock, title: "Entrega Rápida", description: "Seu tapete de volta em poucos dias" },
  ];

  return (
    <>
      <SEOHead
        title="Lavagem de Tapetes em Florianópolis | FMS Higienizações"
        description="Lavagem e higienização de tapetes em Florianópolis, São José, Palhoça e Biguaçu. Coleta em domicílio, remoção de manchas e pelos de pets. Desde 1999."
        canonical="/lavagem-de-tapetes"
        keywords="lavagem de tapetes florianópolis, lavanderia de tapetes são josé, limpeza de tapetes palhoça, higienização de tapetes biguaçu, lavagem tapete pet florianópolis, coleta tapete domicílio"
        jsonLd={{
          "@type": "Service",
          "serviceType": "Lavagem de Tapetes",
          "provider": { "@type": "LocalBusiness", "name": "FMS Higienizações" },
          "areaServed": [
            { "@type": "City", "name": "Florianópolis" },
            { "@type": "City", "name": "São José" },
            { "@type": "City", "name": "Palhoça" },
            { "@type": "City", "name": "Biguaçu" }
          ]
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${rugsImg})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,10%)] via-[hsl(215,50%,14%)/0.95] to-[hsl(215,40%,18%)/0.85]" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-28 md:py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-medium text-white/90 tracking-wider uppercase">
                <Award className="h-4 w-4 text-accent" />
                Especialistas em Lavagem de Tapetes desde 1999
              </div>
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05]">
                Lavagem de Tapetes Profissional em Florianópolis
              </h1>
              <p className="mb-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
                A FMS Higienizações é especialista em lavagem de tapetes em Florianópolis, São José, Palhoça e região.
                Trabalhamos com lavagem a seco, limpeza profunda e higienização completa, removendo ácaros, manchas, odores e sujeiras.
              </p>
              <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold px-8 py-6">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] mb-3">Nossos Serviços</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Limpeza de Tapetes em Florianópolis
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Garantimos qualidade, eficiência e cuidado para seus tapetes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:border-accent/20 transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6">
                    <div className="mx-auto mb-4 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-xs">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] mb-3">Quem Somos</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lavanderia de Tapetes na Grande Florianópolis
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Desde 1999, a FMS Higienizações é referência em limpeza profissional de tapetes em Florianópolis,
                São José, Palhoça e Biguaçu. Atendemos clientes residenciais, comerciais e condomínios com
                coleta em domicílio, agilidade e alto padrão de qualidade.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Oferecemos serviços especializados em limpeza e higienização de estofados,
                tapetes, carpetes e colchões, proporcionando ambientes mais limpos e saudáveis.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Higienização de Estofados: sofás, poltronas, cadeiras e puffs",
                  "Limpeza de Tapetes e Carpetes: remoção de pelos, poeira e manchas",
                  "Higienização de Colchões: eliminação de ácaros e odores",
                  "Soluções para Ambientes Comerciais: escritórios e comércios"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>

        <CTABanner title="Lavagem de Tapetes na Grande Florianópolis" subtitle="Rapidez, segurança e garantia de qualidade." />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default LavagemTapetes;
