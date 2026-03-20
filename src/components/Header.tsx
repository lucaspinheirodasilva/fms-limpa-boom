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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_3px_hsl(220_30%_12%/0.04)]"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-lg sm:text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}>
              FMS
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-accent">
              Higienizações
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/"
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                isActive("/")
                  ? (scrolled ? "text-foreground" : "text-white")
                  : (scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white")
              }`}>
              Home
            </Link>

            <div className="relative group">
              <button className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-300 py-2 ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}>
                Serviços
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-[240px]">
                  {services.map((service) => (
                    <Link key={service.href} to={service.href}
                      className={`block px-5 py-2.5 text-sm transition-colors hover:bg-muted/50 ${
                        isActive(service.href) ? "text-accent font-semibold" : "text-foreground/70 hover:text-foreground"
                      }`}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/#sobre"
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
              }`}>
              Sobre
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden sm:block">
            <Button variant="accent" size="sm" onClick={() => window.open(whatsappLink, "_blank")}
              className="font-semibold text-xs tracking-wide">
              <WhatsAppIcon className="h-4 w-4 mr-1.5" />
              Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 bg-white rounded-b-xl shadow-lg">
            <nav className="flex flex-col gap-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/" ? "text-accent bg-accent/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                }`}>
                Home
              </Link>
              <button onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors text-left">
                Serviços
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link key={service.href} to={service.href} onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                        isActive(service.href) ? "text-accent font-medium" : "text-foreground/50 hover:text-foreground"
                      }`}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
              <div className="pt-3 px-4">
                <Button variant="accent" className="w-full font-semibold" onClick={() => window.open(whatsappLink, "_blank")}>
                  <WhatsAppIcon className="h-4 w-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
