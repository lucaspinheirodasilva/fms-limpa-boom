import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Segments />
        <Benefits />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
