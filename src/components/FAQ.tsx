import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para o carpete secar após a limpeza?",
    answer: "Com nossos equipamentos profissionais de alta extração, o tempo médio de secagem é de 4 a 6 horas. Recomendamos agendar o serviço no final do expediente para que o ambiente esteja pronto para uso no dia seguinte. Em dias mais secos, a secagem pode ser ainda mais rápida."
  },
  {
    question: "A limpeza profissional remove manchas difíceis e odores?",
    answer: "Sim! Nosso processo inclui pré-tratamento específico para manchas resistentes como café, vinho, graxa e outras substâncias. Para odores, utilizamos produtos neutralizadores de última geração que eliminam não apenas o cheiro, mas também as bactérias causadoras. Casos extremos podem requerer tratamentos adicionais."
  },
  {
    question: "Com que frequência devo realizar a limpeza profissional dos carpetes?",
    answer: "Para ambientes corporativos com tráfego médio a intenso, recomendamos limpeza profissional a cada 3-6 meses. Escritórios com menor movimento podem optar por limpeza semestral ou anual. A manutenção regular prolonga significativamente a vida útil do carpete e mantém o ambiente saudável."
  },
  {
    question: "Os produtos utilizados são seguros para funcionários e clientes?",
    answer: "Absolutamente! Utilizamos exclusivamente produtos certificados, biodegradáveis e não-tóxicos. São seguros para pessoas, animais e meio ambiente. Todos os nossos produtos são aprovados por órgãos reguladores e não deixam resíduos químicos nocivos."
  },
  {
    question: "Como funciona o orçamento e agendamento?",
    answer: "Você pode solicitar um orçamento gratuito através do WhatsApp. Avaliamos a metragem, tipo de carpete e condições gerais para fornecer um valor preciso. O agendamento é flexível, podemos atender durante o expediente, após o horário comercial ou finais de semana, conforme sua necessidade."
  },
  {
    question: "Vocês atendem empresas de pequeno e grande porte?",
    answer: "Sim! Atendemos desde pequenos escritórios até grandes corporações e estabelecimentos comerciais. Nossa equipe e equipamentos são dimensionados conforme o tamanho do projeto, sempre mantendo o mesmo padrão de qualidade e profissionalismo."
  },
  {
    question: "Qual a área de cobertura dos serviços?",
    answer: "Atendemos toda a Grande Florianópolis, incluindo Florianópolis, São José, Palhoça e Biguaçu, além de Balneário Camboriú, Itapema e região. Para outras localidades próximas, consulte-nos sobre disponibilidade de atendimento."
  },
  {
    question: "A limpeza profissional danifica ou desgasta o carpete?",
    answer: "Pelo contrário! Nossa limpeza profissional, quando realizada corretamente com equipamentos adequados, remove partículas abrasivas que causam desgaste prematuro das fibras. O processo prolonga a vida útil do carpete e mantém sua aparência e textura originais por muito mais tempo."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de limpeza e higienização de carpetes.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
