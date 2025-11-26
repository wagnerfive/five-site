import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px] animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] animate-spin-slow" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary tracking-wide">AGÊNCIA DO FUTURO</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight animate-fade-in-up">
              Criamos Experiências Digitais que parecem vindas do <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary neon-text">Futuro.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100">
              Sistemas inteligentes, sites de alto impacto e designs que transformam marcas em experiências memoráveis.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-base shadow-[0_0_20px_rgba(0,179,66,0.4)] hover:shadow-[0_0_40px_rgba(0,179,66,0.6)] transition-all duration-300 rounded-xl"
              >
                Iniciar Meu Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto glass-card border-white/10 text-white hover:bg-white/10 hover:border-white/30 font-medium h-14 px-8 text-base backdrop-blur-md rounded-xl"
              >
                Explorar Portfólio
              </Button>
            </div>

            {/* Stats Chips */}
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up delay-300">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-card border-white/5 hover:border-primary/30 transition-colors">
                <Code2 className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-300"><strong className="text-white">+200</strong> Projetos</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-card border-white/5 hover:border-primary/30 transition-colors">
                <Layers className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-300"><strong className="text-white">8 Anos</strong> de XP</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-card border-white/5 hover:border-primary/30 transition-colors">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">Soluções Exclusivas</span>
              </div>
            </div>
          </div>

          {/* Visual Element (3D Panel) */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="relative w-full aspect-square animate-float">
              {/* Main Card - Futuristic Dashboard */}
              <div className="absolute inset-0 glass-card rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transform rotate-y-12 rotate-x-6 shadow-2xl overflow-hidden">
                {/* Background Grid & Glow */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

                {/* Header: System Status */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono text-primary/80 tracking-widest">SYSTEM ONLINE</span>
                  </div>
                  <div className="text-xs font-mono text-white/40">V.2.0.24</div>
                </div>

                {/* Central Visual: Animated Metrics */}
                <div className="space-y-4 mb-8 relative z-10">
                  {/* Metric 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-white/60 font-mono">
                      <span>PERFORMANCE</span>
                      <span>98%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[98%] shadow-[0_0_10px_rgba(0,179,66,0.5)] animate-pulse" />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-white/60 font-mono">
                      <span>UPTIME</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-full shadow-[0_0_10px_rgba(12,119,255,0.5)]" />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-white/60 font-mono">
                      <span>PROJECTS</span>
                      <span>LOADING...</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[75%] animate-pulse-glow" />
                    </div>
                  </div>
                </div>

                {/* Visual: Network Traffic (Data Stream) */}
                <div className="mb-6 relative z-10">
                  <div className="flex justify-between text-xs text-white/60 font-mono mb-2">
                    <span>NETWORK TRAFFIC</span>
                    <span className="text-primary animate-pulse">LIVE</span>
                  </div>
                  <div className="flex items-end justify-between h-16 gap-1 p-2 rounded-lg bg-white/5 border border-white/5">
                    {[40, 70, 30, 85, 50, 90, 60, 40, 75, 55, 95, 35].map((height, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-primary/20 to-primary/60 rounded-sm animate-pulse"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Visual: Active Projects Map (Global Reach) */}
                <div className="mb-6 relative z-10">
                  <div className="flex justify-between text-xs text-white/60 font-mono mb-2">
                    <span>GLOBAL REACH</span>
                    <span className="text-secondary animate-pulse">4 ACTIVE REGIONS</span>
                  </div>
                  <div className="h-24 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

                    {/* Pulsating Dots representing clients */}
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full" />

                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full animate-ping delay-700" />
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full" />

                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-1000" />
                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent rounded-full" />

                    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-500" />
                    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full" />

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                      <path d="M50,30 Q100,50 150,30" stroke="white" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                      <path d="M80,60 Q120,20 160,50" stroke="white" fill="none" strokeDasharray="4 4" className="animate-pulse delay-1000" />
                    </svg>
                  </div>
                </div>

                {/* Bottom: Terminal Effect */}
                <div className="mt-auto p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/40 border-b border-white/5 pb-1 mb-1">ACTIVITY LOG</span>
                    <span className="text-primary/80">&gt; Initializing core modules...</span>
                    <span className="text-secondary/80">&gt; Loading assets...</span>
                    <span className="text-white/60 animate-pulse">&gt; Ready to deploy.</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 glass-card p-2 rounded-lg border-primary/20 animate-float-delayed">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full blur-2xl opacity-30 animate-pulse-glow delay-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};