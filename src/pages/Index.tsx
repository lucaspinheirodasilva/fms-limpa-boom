import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Process />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
