import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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
