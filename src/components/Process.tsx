import { ClipboardCheck, Droplets, Wind, CheckCircle } from "lucide-react";
import processImage from "@/assets/process-cleaning.jpg";
const steps = [{
  icon: ClipboardCheck,
  title: "1. Inspeção Detalhada",
  description: "Avaliamos o estado do carpete, identificando manchas, tipo de sujeira e áreas que necessitam atenção especial."
}, {
  icon: Droplets,
  title: "2. Pré-Tratamento",
  description: "Aplicamos produtos específicos para afrouxar a sujeira incrustada e tratar manchas difíceis antes da limpeza profunda."
}, {
  icon: Wind,
  title: "3. Limpeza e Extração",
  description: "Utilizamos equipamentos industriais de alta potência para limpeza profunda e extração eficiente de resíduos e umidade."
}, {
  icon: CheckCircle,
  title: "4. Finalização",
  description: "Aplicamos proteção opcional, inspecionamos o resultado final e garantimos sua total satisfação com o serviço."
}];
const Process = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
      </div>
    </section>;
};
export default Process;