import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const About = () => {
  const benefits = [
    "Sites profissionais e responsivos",
    "Sistemas web personalizados",
    "Landing pages de alta conversão",
    "Automação e integrações",
    "Hospedagem segura e suporte"
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                Sobre a Five
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Criamos soluções digitais que geram <span className="text-primary">resultados reais</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Somos uma agência digital focada em transformar a presença online de empresas ambiciosas. Combinamos design premium, tecnologia de ponta e estratégia para entregar projetos que não apenas impressionam visualmente, mas também impulsionam o crescimento do seu negócio.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider px-8 h-12">
              Conheça a Five
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
              <div className="aspect-video rounded-xl bg-gray-900/50 flex items-center justify-center overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Escritório Five Agência"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-card border border-white/10 rounded-xl shadow-xl backdrop-blur-md animate-float">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-400 leading-tight">
                  Anos de<br />Experiência
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};