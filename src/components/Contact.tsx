import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[120px] animate-spin-slow" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Vamos Criar Algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 neon-text">Extraordinário?</span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Seu próximo grande projeto começa com uma conversa. Estamos prontos para levar sua marca para o futuro.
            </p>

            <div className="space-y-6 pt-8">
              {[
                { icon: Phone, title: "Telefone", value: "+55 (11) 99999-9999", href: "tel:+5511999999999" },
                { icon: Mail, title: "Email", value: "contato@fiveagencia.com", href: "mailto:contato@fiveagencia.com" },
                { icon: MapPin, title: "Localização", value: "São Paulo, SP", href: "#" }
              ].map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-6 p-4 rounded-2xl glass-card border-transparent hover:border-primary/30 transition-all duration-300 group hover:translate-x-2"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-black transition-colors">
                    <info.icon className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{info.title}</h3>
                    <p className="text-gray-400 group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />

            <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Nome</label>
                    <Input placeholder="Seu nome" className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Mensagem</label>
                  <Textarea
                    placeholder="Conte mais sobre seu projeto..."
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-16 text-lg rounded-xl shadow-[0_0_20px_rgba(0,179,66,0.4)] hover:shadow-[0_0_40px_rgba(0,179,66,0.6)] transition-all duration-300"
                >
                  Iniciar Projeto Agora
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};