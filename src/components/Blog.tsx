import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const posts = [
  {
    title: "O Futuro do Web Design: Tendências para 2025",
    excerpt: "Descubra como a realidade aumentada e interfaces neurais vão mudar a web.",
    date: "15 Nov 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "text-purple-400"
  },
  {
    title: "IA Generativa no Marketing Digital",
    excerpt: "Como utilizar ferramentas de IA para escalar sua produção de conteúdo.",
    date: "10 Nov 2024",
    category: "Inteligência Artificial",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    color: "text-cyan-400"
  },
  {
    title: "Otimização de Conversão em E-commerce",
    excerpt: "Estratégias avançadas de UX para transformar visitantes em clientes fiéis.",
    date: "05 Nov 2024",
    category: "E-commerce",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&w=800&q=80",
    color: "text-green-400"
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary neon-text-purple">Tendências</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Conteúdo aprofundado sobre o universo digital.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass-card border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/10 ${post.color}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-white/5">
                  <span className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors">
                    Ler Artigo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};