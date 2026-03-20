import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  const services = [
    { label: "Higienização de Estofados", href: "/higienizacao-de-estofados" },
    { label: "Lavagem de Tapetes", href: "/lavagem-de-tapetes" },
    { label: "Limpeza de Carpetes", href: "/limpeza-de-carpetes" },
    { label: "Higienização de Colchões", href: "/higienizacao-de-colchoes" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-14 sm:py-18 md:py-22">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg font-extrabold text-white tracking-tight">FMS</span>
              <span className="text-lg font-extrabold text-accent tracking-tight">Higienizações</span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm">
              Especialistas em higienização profissional na Grande Florianópolis desde 1999.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-white/70">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-white/40 hover:text-accent transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-white/70">Contato</h4>
            <div className="space-y-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-accent transition-colors text-sm">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                (48) 98805-7404
              </a>
              <div className="flex items-start gap-2.5 text-white/40 text-sm">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span>R. Mal. Rondon, 930 - Barreiros<br />São José - SC, 88117-030</span>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-white/70">Atendimento</h4>
            <div className="space-y-2">
              {["Florianópolis", "São José", "Palhoça", "Biguaçu"].map((city) => (
                <p key={city} className="text-white/40 text-sm">{city}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-4 py-5">
          <p className="text-white/25 text-xs text-center">
            © {currentYear} FMS Higienizações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
