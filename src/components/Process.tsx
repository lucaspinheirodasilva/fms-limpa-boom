import { ClipboardCheck, Droplets, Wind, CheckCircle } from "lucide-react";
import processImage from "@/assets/process-cleaning.jpg";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Inspeção Detalhada",
    description: "Avaliamos o estado do carpete, identificando manchas, tipo de sujeira e áreas que necessitam atenção especial."
  },
  {
    icon: Droplets,
    title: "2. Pré-Tratamento",
    description: "Aplicamos produtos específicos para afrouxar a sujeira incrustada e tratar manchas difíceis antes da limpeza profunda."
  },
  {
    icon: Wind,
    title: "3. Limpeza e Extração",
    description: "Utilizamos equipamentos industriais de alta potência para limpeza profunda e extração eficiente de resíduos e umidade."
  },
  {
    icon: CheckCircle,
    title: "4. Finalização",
    description: "Aplicamos proteção opcional, inspecionamos o resultado final e garantimos sua total satisfação com o serviço."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nosso Processo de Limpeza Profissional
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Seguimos um protocolo rigoroso de higienização que garante resultados 
              superiores e durabilidade para seus carpetes corporativos.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={processImage} 
                alt="Processo profissional de limpeza de carpetes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">Anos de experiência em higienização profissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
