import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020B14] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-1 group">
              <img src="/logo-five.png" alt="FIVE" className="h-10 w-auto" />
            </a>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Tecnologia + Criatividade.
              <br />
              Transformamos o complexo em experiências digitais extraordinárias.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Explorar</h4>
            <ul className="space-y-4">
              {["O Que Fazemos", "Studio", "Portfólio", "Processo", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Soluções</h4>
            <ul className="space-y-4">
              {["Sites Futuristas", "Sistemas Web", "Apps Mobile", "Consultoria Tech", "Design System"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">São Paulo</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                Av. Paulista, 1000
                <br />
                Bela Vista, SP
              </li>
              <li>
                <a href="mailto:hello@five.com" className="text-white font-bold hover:text-primary transition-colors text-lg">
                  hello@five.com
                </a>
              </li>
              <li>
                <a href="tel:+551199999999" className="text-gray-400 hover:text-primary transition-colors">
                  +55 (11) 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FIVE Agência Digital. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos</a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};