import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Que Fazemos", href: "#servicos" },
    { name: "Studio", href: "#studio" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Processo", href: "#processo" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`rounded-2xl transition-all duration-500 px-6 py-4 flex items-center justify-between ${isScrolled
            ? "glass-card bg-background/60 border-white/10"
            : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group relative z-50">
            <img src="/logo-five.png" alt="FIVE" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00FF5E]" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider px-6 shadow-[0_0_20px_rgba(0,255,94,0.3)] hover:shadow-[0_0_30px_rgba(0,255,94,0.6)] transition-all duration-300 rounded-xl"
            >
              Criar Meu Projeto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-primary transition-colors relative z-50"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center animate-fade-in">
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,255,94,0.3)] rounded-xl">
                  Criar Meu Projeto
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
