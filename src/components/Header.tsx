import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { label: "Higienização de Estofados", href: "/higienizacao-de-estofados" },
    { label: "Lavagem de Tapetes", href: "/lavagem-de-tapetes" },
    { label: "Limpeza de Carpetes", href: "/limpeza-de-carpetes" },
    { label: "Higienização de Colchões", href: "/higienizacao-de-colchoes" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className={`font-bold text-base sm:text-lg ${scrolled ? 'text-primary-foreground' : 'text-primary-foreground'}`}>F</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>FMS</span>
              <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-accent' : 'text-accent'}`}>Higienizações</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-[13px] font-medium uppercase tracking-wider transition-colors ${
                isActive("/")
                  ? (scrolled ? "text-primary" : "text-white")
                  : (scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white")
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[13px] font-medium uppercase tracking-wider transition-colors py-2 ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"
              }`}>
                Serviços
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-background rounded-xl shadow-lg border border-border py-2 min-w-[260px]">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={`block px-5 py-2.5 text-sm transition-colors hover:bg-muted ${
                        isActive(service.href) ? "text-primary font-semibold" : "text-foreground/80"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/#sobre"
              className={`text-[13px] font-medium uppercase tracking-wider transition-colors ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"
              }`}
            >
              Sobre nós
            </Link>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="accent"
              size="sm"
              onClick={() => window.open(whatsappLink, "_blank")}
              className="font-semibold text-xs uppercase tracking-wider"
            >
              <WhatsAppIcon className="h-4 w-4 mr-1.5" />
              Orçamento
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background rounded-b-xl">
            <nav className="flex flex-col gap-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/" ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-muted"
                }`}>
                Home
              </Link>
              <button onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted transition-colors text-left">
                Serviços
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link key={service.href} to={service.href} onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                        isActive(service.href) ? "text-primary bg-primary/5 font-medium" : "text-foreground/60 hover:text-primary hover:bg-muted"
                      }`}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
              <Button variant="accent" onClick={() => window.open(whatsappLink, "_blank")} className="mt-4 font-semibold">
                <WhatsAppIcon className="h-4 w-4 mr-2" />
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
