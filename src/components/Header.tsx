import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const navLinks = [
    { label: "Segmentos", href: "#segmentos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="text-xl sm:text-2xl font-bold text-white">
            FMS <span className="text-accent">Higienizações</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 hover:text-white font-medium transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              size="sm"
              variant="accent"
              onClick={() => window.open(whatsappLink, "_blank")}
              className="font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">(48) 99834-3320</span>
              <span className="md:hidden">Ligar</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="accent"
                onClick={() => window.open(whatsappLink, "_blank")}
                className="mt-4 font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
