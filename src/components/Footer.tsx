import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "/whatsapp";

  const services = [
    { label: "Higienização de Estofados", href: "/higienizacao-de-estofados" },
    { label: "Lavagem de Tapetes", href: "/lavagem-de-tapetes" },
    { label: "Limpeza de Carpetes", href: "/limpeza-de-carpetes" },
    { label: "Higienização de Colchões", href: "/higienizacao-de-colchoes" },
  ];

  const cities = [
    "Florianópolis",
    "São José",
    "Palhoça",
    "Biguaçu"
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">FMS</span>
                <span className="text-xl font-bold text-accent ml-1">Higienizações</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-4">
              Especialistas em Limpeza de Estofados e Tapetes na Grande Florianópolis. 
              Oferecemos higienização profissional de sofás, tapetes, carpetes e colchões, 
              removendo manchas, ácaros e odores.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nossos Contatos</h4>
            <div className="space-y-3">
              <p className="font-semibold text-white">FMS Higienizações</p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(48) 98805-7404</span>
              </a>
              <div className="flex items-start gap-2 text-white/80 text-sm sm:text-base">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>R. Mal. Rondon, 930 - Barreiros, São José - SC, 88117-030</span>
              </div>
            </div>
          </div>

          {/* Áreas de Atendimento */}
          <div>
            <h4 className="text-lg font-bold mb-4">Áreas de Atendimento</h4>
            <div className="flex items-start gap-2 text-white/80">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
              <div className="text-sm sm:text-base">
                {cities.map((city, index) => (
                  <p key={city} className="mb-1">{city}</p>
                ))}
                <p className="text-accent font-medium mt-2">e toda a região!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-white/70 text-xs sm:text-sm">
              © {currentYear} FMS Higienizações. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
