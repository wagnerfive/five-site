import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Carlos Mendes",
        role: "CEO, TechSolutions",
        content: "A Five transformou completamente nossa presença digital. O novo sistema aumentou nossa produtividade em 200%.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        delay: "0s"
    },
    {
        name: "Ana Silva",
        role: "Diretora de Marketing, FashionNova",
        content: "Design impecável e uma equipe super atenta aos detalhes. O site ficou futurista e muito rápido.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        delay: "2s"
    },
    {
        name: "Roberto Santos",
        role: "Fundador, StartUp X",
        content: "Eles entenderam nossa visão de futuro e entregaram algo além do que imaginávamos. Simplesmente incrível.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        delay: "4s"
    }
];

export const Testimonials = () => {
    return (
        <section id="depoimentos" className="py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-24 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        O Que Dizem Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">Parceiros</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-3xl glass-card border-white/5 hover:border-primary/50 transition-all duration-500 group animate-float"
                            style={{ animationDelay: testimonial.delay }}
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_5px_rgba(0,179,66,0.5)]" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-r from-primary to-secondary">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full object-cover border-2 border-black"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
