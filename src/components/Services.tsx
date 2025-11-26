import { Layout, Rocket, Code2, BarChart3, Palette, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layout,
    title: "Sites Futuristas",
    description: "Experiências web imersivas com WebGL e animações avançadas.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Landing Pages Cinemáticas",
    description: "Páginas de alta conversão com storytelling visual impactante.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code2,
    title: "Sistemas Web Inteligentes",
    description: "Aplicações robustas e escaláveis focadas em performance.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Dashboards e Automação",
    description: "Visualização de dados em tempo real e processos automáticos.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "Identidade Visual Moderna",
    description: "Branding que conecta marcas ao futuro digital.",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: Bot,
    title: "Social Media com IA",
    description: "Gestão de conteúdo impulsionada por inteligência artificial.",
    color: "from-teal-500 to-cyan-500"
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-32 bg-background relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            O Que Nós <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">Fazemos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploramos os limites da tecnologia para criar soluções digitais únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-1 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${index % 2 === 1 ? "lg:translate-y-12" : ""
                }`}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

              <div className="relative h-full p-8 rounded-2xl glass-card border-white/5 overflow-hidden group-hover:border-white/20 transition-colors">
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.color} p-0.5`}>
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};