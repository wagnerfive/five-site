import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-16 rounded-3xl neon-border animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Pronto para começar?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforme sua Visão em
              <br />
              <span className="neon-text">Realidade Digital</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato hoje mesmo e descubra como podemos levar seu negócio 
              para o próximo nível com soluções digitais inovadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 hover-glow group text-lg px-8"
              >
                Iniciar Projeto Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:border-primary hover-glow text-lg px-8"
              >
                Agendar Reunião
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold neon-text mb-2">100+</div>
                  <div className="text-muted-foreground">Projetos Entregues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold neon-text mb-2">50+</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold neon-text mb-2">10+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};