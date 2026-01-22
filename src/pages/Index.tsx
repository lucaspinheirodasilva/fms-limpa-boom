import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import Benefits from "@/components/Benefits";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Segments />
        <Benefits />
        <ServiceAreas />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;