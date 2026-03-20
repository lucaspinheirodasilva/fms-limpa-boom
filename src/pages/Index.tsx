import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="FMS Higienizações | Limpeza de Estofados e Tapetes em Florianópolis"
        description="Higienização profissional de estofados, tapetes, carpetes e colchões em Florianópolis, São José, Palhoça e Biguaçu. Desde 1999. +3.000 clientes satisfeitos. Solicite orçamento."
        canonical="/"
        keywords="higienização de estofados florianópolis, lavagem de tapetes florianópolis, limpeza de carpetes são josé, higienização de colchões palhoça, limpeza de sofá florianópolis, lavanderia de tapetes biguaçu"
        jsonLd={{
          "@type": "LocalBusiness",
          "name": "FMS Higienizações",
          "serviceType": [
            "Higienização de Estofados",
            "Lavagem de Tapetes",
            "Limpeza de Carpetes",
            "Higienização de Colchões"
          ],
          "url": "https://fms-higienizacoes.lovable.app"
        }}
      />
      <Header />
      <main>
        <HomeHero />
        <HomeServices />
        <AboutSection />
        <CTABanner />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default Index;
