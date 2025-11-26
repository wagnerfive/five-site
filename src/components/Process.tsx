import { Search, PenTool, Code2, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descoberta e Imersão",
    description: "Mergulhamos no seu universo para entender desafios e oportunidades.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadow: "shadow-blue-500/20",
    details: ["Análise de Mercado", "UX Research", "Definição de KPIs"]
  },
  {
    number: "02",
    title: "Prototipação Inteligente",
    description: "Validamos ideias com protótipos interativos de alta fidelidade.",
    icon: PenTool,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    shadow: "shadow-purple-500/20",
    details: ["Wireframes", "UI Design", "Testes de Usabilidade"]
  },
  {
    number: "03",
    title: "Desenvolvimento Avançado",
    description: "Código limpo, escalável e otimizado com as melhores tecnologias.",
    icon: Code2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    shadow: "shadow-green-500/20",
    details: ["Frontend Moderno", "API Integration", "Performance"]
  },
  {
    number: "04",
    title: "Entrega e Evolução",
    description: "Lançamento estratégico e acompanhamento contínuo de resultados.",
    icon: Rocket,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    shadow: "shadow-cyan-500/20",
    details: ["Deploy CI/CD", "Analytics", "Suporte Contínuo"]
  }
];

export const Process = () => {
  return (
    <section id="processo" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Processo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 neon-text">Futurista</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma jornada estruturada para transformar visão em realidade.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block rounded-full">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse-glow opacity-50" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 group">
                  <div className={`p-8 rounded-3xl glass-card border border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>

                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-${step.color.split('-')[1]}-500/10`} />

                    <div className={`text-6xl font-black mb-4 opacity-10 group-hover:opacity-20 transition-opacity ${step.color}`}>
                      {step.number}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-lg mb-6">
                      {step.description}
                    </p>

                    {/* Details Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      {step.details.map((detail, i) => (
                        <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 flex items-center gap-1 group-hover:border-primary/20 group-hover:text-white transition-colors`}>
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Icon Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full glass-card flex items-center justify-center border-2 border-white/10 ${step.bg} ${step.border} shadow-[0_0_30px_rgba(0,0,0,0.5)] group transition-all duration-500 hover:scale-110`}>
                    <step.icon className={`w-8 h-8 ${step.color} transition-transform duration-500 group-hover:rotate-12`} />
                    <div className={`absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-50 ${step.shadow}`} />
                  </div>

                  {/* Connector Line (Mobile) */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent md:hidden" />
                  )}
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};