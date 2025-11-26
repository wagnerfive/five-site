import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Layers, Smartphone, Globe, Monitor } from "lucide-react";

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Sites & LPs" },
  { id: "system", label: "Sistemas" },
  { id: "mobile", label: "Mobile" }
];

const projects = [
  {
    title: "TechFlow Systems",
    category: "Sistema Web",
    type: "system",
    tags: ["React", "Node.js", "Dashboard"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    size: "col-span-1 md:col-span-2",
    color: "group-hover:shadow-[0_0_30px_rgba(12,119,255,0.3)]"
  },
  {
    title: "Nexus E-commerce",
    category: "Loja Virtual",
    type: "web",
    tags: ["Next.js", "Stripe", "UI/UX"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    size: "col-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(157,77,255,0.3)]"
  },
  {
    title: "Elevate Marketing",
    category: "Site Institucional",
    type: "web",
    tags: ["React", "GSAP", "3D"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    size: "col-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(0,179,66,0.3)]"
  },
  {
    title: "Pure Health",
    category: "Landing Page",
    type: "web",
    tags: ["Tailwind", "Conversion", "SEO"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    size: "col-span-1 md:col-span-2",
    color: "group-hover:shadow-[0_0_30px_rgba(77,241,255,0.3)]"
  },
  {
    title: "Swift Delivery",
    category: "App Mobile",
    type: "mobile",
    tags: ["React Native", "Maps", "Real-time"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    size: "col-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
  }
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Portfólio <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent neon-text-blue">Cinemático</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Projetos que desafiam o comum e definem novos padrões.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilter === cat.id
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(0,179,66,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-card border border-white/5 transition-all duration-500 ${project.size} ${project.color} hover:-translate-y-2`}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Tags - Visible on Hover */}
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold px-2 py-1 rounded bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-medium text-primary uppercase tracking-wider mb-1 block">
                      {project.category}
                    </span>

                    <div className="flex justify-between items-end">
                      <h3 className="text-3xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(0,179,66,0.5)] scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="glass-card border-white/10 text-white hover:bg-white/10 rounded-xl px-8 h-12">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};