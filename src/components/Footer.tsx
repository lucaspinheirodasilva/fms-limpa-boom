import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FMS Higienizações</h3>
            <p className="text-white/90 leading-relaxed">
              Especialistas em limpeza e higienização profissional de carpetes para empresas. 
              Qualidade, confiança e resultados garantidos.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(48) 99834-3320</span>
              </a>
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="h-5 w-5" />
                <span>contato@fmshigienizacoes.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Áreas de Atendimento</h4>
            <div className="flex items-start gap-2 text-white/90">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <div>
                <p className="mb-1">Grande Florianópolis</p>
                <p className="mb-1">Balneário Camboriú</p>
                <p className="mb-1">Itapema</p>
                <p className="text-sm">E região</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} FMS Higienizações. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/80">
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
