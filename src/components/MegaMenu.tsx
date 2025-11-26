import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Megaphone,
  BarChart3,
  Globe,
  ShoppingCart,
  Smartphone,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const serviceCategories = [
  {
    title: "Desenvolvimento",
    icon: Code,
    services: [
      { title: "Desenvolvimento Web", desc: "Sites e aplicações web modernas", href: "#servicos" },
      { title: "Desenvolvimento Mobile", desc: "Apps iOS e Android nativos", href: "#servicos" },
      { title: "E-commerce", desc: "Lojas virtuais completas", href: "#servicos" },
      { title: "Sistemas Personalizados", desc: "Soluções sob medida", href: "#servicos" }
    ]
  },
  {
    title: "Design & UX",
    icon: Palette,
    services: [
      { title: "UI/UX Design", desc: "Interfaces intuitivas e bonitas", href: "#servicos" },
      { title: "Design de Marca", desc: "Identidade visual completa", href: "#servicos" },
      { title: "Design Responsivo", desc: "Adaptado para todos dispositivos", href: "#servicos" },
      { title: "Prototipação", desc: "Testes de usabilidade", href: "#servicos" }
    ]
  },
  {
    title: "Marketing Digital",
    icon: Megaphone,
    services: [
      { title: "SEO", desc: "Otimização para buscadores", href: "#servicos" },
      { title: "Marketing de Conteúdo", desc: "Estratégia de conteúdo", href: "#servicos" },
      { title: "Social Media", desc: "Gestão de redes sociais", href: "#servicos" },
      { title: "Email Marketing", desc: "Campanhas de email", href: "#servicos" }
    ]
  },
  {
    title: "Análise & Dados",
    icon: BarChart3,
    services: [
      { title: "Analytics", desc: "Análise de dados e métricas", href: "#servicos" },
      { title: "Performance", desc: "Otimização de velocidade", href: "#servicos" },
      { title: "Conversão", desc: "Aumento de conversões", href: "#servicos" },
      { title: "Relatórios", desc: "Dashboards personalizados", href: "#servicos" }
    ]
  }
];

const featuredServices = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Presença online profissional para sua empresa",
    features: ["Design moderno", "SEO otimizado", "Responsivo"]
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerce completo para vender online",
    features: ["Pagamento integrado", "Gestão de estoque", "Frete automático"]
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos para iOS e Android",
    features: ["Performance otimizada", "UX intuitiva", "Push notifications"]
  }
];

export const MegaMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 mt-16">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={megaMenuRef}
        className="relative bg-background/95 backdrop-blur-lg border-b border-border/50 animate-in slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Categories Navigation */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 cyan-text hidden lg:block">Categorias</h3>
              <div className="space-y-2">
                {serviceCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.title}
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${activeCategory === index
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:border-cyan-500/30"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 lg:hidden">
                {serviceCategories[activeCategory].title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceCategories[activeCategory].services.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className="group p-4 rounded-lg border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-200 block cursor-pointer"
                    onClick={onClose}
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Featured Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 cyan-text">Serviços em Destaque</h3>
              <div className="space-y-4">
                {featuredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="p-4 glass-card transition-all duration-300 cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <Button
                  className="w-full cyan-border bg-cyan-500 text-cyan-foreground hover:bg-cyan-500/90"
                  onClick={onClose}
                >
                  Ver Todos os Serviços
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};