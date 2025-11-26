import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa um projeto personalizado?",
    answer: "Cada projeto é único. Nossa abordagem começa com uma imersão para entender suas necessidades e oferecer a melhor solução com o melhor custo-benefício."
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Projetos institucionais levam em média 30 dias. Sistemas complexos e e-commerces podem variar de 45 a 90 dias, dependendo do escopo."
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer: "Sim! Oferecemos planos de manutenção e evolução contínua para garantir que seu projeto esteja sempre atualizado e seguro."
  },
  {
    question: "O site será otimizado para o Google (SEO)?",
    answer: "Absolutamente. Todos os nossos projetos são desenvolvidos seguindo as melhores práticas de SEO técnico e semântico desde a primeira linha de código."
  },
  {
    question: "Posso atualizar o conteúdo do site sozinho?",
    answer: "Sim. Desenvolvemos painéis administrativos intuitivos para que você tenha total autonomia sobre o conteúdo do seu site."
  }
];

export const FAQ = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Dúvidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">Frequentes</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tudo o que você precisa saber sobre nosso processo de trabalho e como podemos ajudar seu negócio a evoluir.
            </p>

            <div className="p-6 rounded-2xl glass-card border-primary/20 bg-primary/5">
              <h4 className="text-white font-bold mb-2">Ainda tem dúvidas?</h4>
              <p className="text-gray-400 text-sm mb-4">Nossa equipe está pronta para te ajudar.</p>
              <a href="#contato" className="text-primary font-bold hover:underline">Falar com Consultor →</a>
            </div>
          </div>

          <div className="animate-fade-in delay-200">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none rounded-2xl glass-card px-6 transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5"
                >
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};