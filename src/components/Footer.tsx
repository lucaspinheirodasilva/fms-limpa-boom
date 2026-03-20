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

  const cities = ["Florianópolis", "São José", "Palhoça", "Biguaçu"];

  return (
    <footer className="bg-[hsl(215,50%,10%)] text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-base">F</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">FMS</span>
                <span className="text-lg font-bold text-accent ml-1">Higienizações</span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              Especialistas em higienização profissional de estofados, tapetes, carpetes e colchões na Grande Florianópolis desde 1999.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/90">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-white/50 hover:text-accent transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/90">Contato</h4>
            <div className="space-y-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (48) 98805-7404
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>R. Mal. Rondon, 930 - Barreiros, São José - SC, 88117-030</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/90">Atendimento</h4>
            <div className="space-y-2">
              {cities.map((city) => (
                <p key={city} className="text-white/50 text-sm">{city}</p>
              ))}
              <p className="text-accent text-sm font-medium mt-3">e toda a região</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/40 text-xs">
              © {currentYear} FMS Higienizações. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white/70 transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
