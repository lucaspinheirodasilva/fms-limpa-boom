import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";
import equipmentImage from "@/assets/equipment-professional.jpg";

const CTA = () => {
  const whatsappLink = "http://wa.me/5548998343320";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforme Seus Carpetes Hoje Mesmo
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Não espere a sujeira acumulada comprometer a aparência e saúde do seu ambiente. 
              Entre em contato agora e receba um orçamento personalizado sem compromisso.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Atendimento Rápido</h3>
                  <p className="text-muted-foreground">Resposta em minutos via WhatsApp. Tire suas dúvidas e receba seu orçamento rapidamente.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Horários Flexíveis</h3>
                  <p className="text-muted-foreground">Agendamento conforme sua disponibilidade. Atendemos fora do horário comercial e finais de semana.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Orçamento Gratuito</h3>
                  <p className="text-muted-foreground">Avaliação sem custo e valores transparentes. Você decide se aprovamos o serviço.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              variant="hero"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="text-xl px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-3 h-6 w-6" />
              Falar com Especialista Agora
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">
              📱 WhatsApp: (48) 99834-3320 • Atendimento de segunda a sábado
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={equipmentImage} 
                alt="Equipamentos profissionais de limpeza de carpetes da FMS Higienizações" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-2xl max-w-sm">
              <p className="text-3xl font-bold mb-2">+500</p>
              <p className="text-lg">Empresas atendidas com excelência na região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
