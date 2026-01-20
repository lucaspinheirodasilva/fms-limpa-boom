import { Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://fmshigienizacao.com.br/whatsapp";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
