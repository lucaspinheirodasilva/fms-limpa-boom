import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Award, Heart, Shield, Sparkles, Home } from "lucide-react";
import upholsteryImg from "@/assets/service-upholstery.jpg";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const HigienizacaoColchoes = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const services = [
    { title: "Higienização Profunda de Colchões", description: "Remoção completa de ácaros, fungos e bactérias que se acumulam no colchão ao longo do tempo. Processo seguro e eficaz." },
    { title: "Remoção de Manchas", description: "Eliminamos manchas de suor, urina, sangue e outros líquidos. Seu colchão fica limpo e com aparência renovada." },
    { title: "Eliminação de Odores", description: "Tratamento especializado para remover odores desagradáveis e deixar seu colchão fresco e cheiroso." },
    { title: "Tratamento Anti-Ácaro", description: "Aplicação de produtos que eliminam e previnem a proliferação de ácaros, ideal para pessoas alérgicas." }
  ];

  const benefits = [
    { icon: Heart, title: "Mais Saúde", description: "Noites de sono mais saudáveis" },
    { icon: Shield, title: "Anti-Alérgico", description: "Elimina 99% dos ácaros" },
    { icon: Sparkles, title: "Renovação", description: "Colchão como novo" },
    { icon: Home, title: "Em Casa", description: "Atendimento domiciliar" },
  ];

  return (
    <>
      <SEOHead
        title="Higienização de Colchões em Florianópolis | FMS Higienizações"
        description="Higienização profissional de colchões em Florianópolis, São José, Palhoça e Biguaçu. Eliminação de ácaros, manchas e odores. Atendimento domiciliar. Desde 1999."
        canonical="/higienizacao-de-colchoes"
        keywords="higienização de colchão florianópolis, limpeza de colchão são josé, higienização colchão palhoça, limpeza colchão biguaçu, remoção ácaros colchão florianópolis"
        jsonLd={{
          "@type": "Service",
          "serviceType": "Higienização de Colchões",
          "provider": { "@type": "LocalBusiness", "name": "FMS Higienizações" }
        }}
      />
      <Header />
      <main>
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${upholsteryImg})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,10%)] via-[hsl(215,50%,14%)/0.95] to-[hsl(215,40%,18%)/0.85]" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-28 md:py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-medium text-white/90 tracking-wider uppercase">
                <Award className="h-4 w-4 text-accent" />
                Especialistas em Colchões
              </div>
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05]">
                Higienização de Colchões em Florianópolis
              </h1>
              <p className="mb-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
                Elimine ácaros, manchas e odores do seu colchão com nossa higienização profissional.
                Mais saúde e conforto para você e sua família em toda a Grande Florianópolis.
              </p>
              <Button size="lg" variant="accent" onClick={() => window.open(whatsappLink, '_blank')} className="font-semibold px-8 py-6">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] mb-3">Nossos Serviços</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Higienização Profissional de Colchões
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Garantimos noites de sono mais tranquilas e um ambiente saudável para toda a família.
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

        <CTABanner title="Higienização de Colchões na Grande Florianópolis" subtitle="Mais saúde e conforto para você!" />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default HigienizacaoColchoes;
