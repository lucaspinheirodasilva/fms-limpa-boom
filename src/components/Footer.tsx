import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <footer className="bg-primary text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">FMS Higienizações</h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              Especialistas em limpeza e higienização profissional de carpetes para empresas. 
              Qualidade, confiança e resultados garantidos.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>(48) 99834-3320</span>
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90 text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="break-all">contato@fmshigienizacoes.com.br</span>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Áreas de Atendimento</h4>
            <div className="flex items-start justify-center sm:justify-start gap-2 text-white/90">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base">
                <p className="mb-0.5 sm:mb-1">Grande Florianópolis</p>
                <p className="mb-0.5 sm:mb-1">Balneário Camboriú</p>
                <p className="mb-0.5 sm:mb-1">Itapema</p>
                <p className="text-xs sm:text-sm">E região</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
            <p className="text-white/80 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} FMS Higienizações. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
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
