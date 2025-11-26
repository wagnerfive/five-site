import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Studio = () => {
    return (
        <section id="studio" className="py-32 relative overflow-hidden">
            {/* Diagonal Background */}
            <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-secondary/20 to-accent/20 scale-110 origin-top-left" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Somos um <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Estúdio Digital</span> especialista em transformar ideias em produtos reais.
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Não somos apenas uma agência. Somos um laboratório de inovação onde design, tecnologia e estratégia se encontram para criar o futuro.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider h-14 px-8 rounded-xl">
                                Conheça o Studio
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Mockups Container - Design & Code Windows */}
                    <div className="relative w-full max-w-[600px] aspect-square mx-auto perspective-1000">

                        {/* Window 1: Design Preview (Back) */}
                        <div className="absolute top-0 right-0 w-3/4 aspect-video glass-card bg-secondary/10 border-secondary/20 rounded-xl p-4 transform rotate-y-12 -rotate-x-6 translate-z-[-50px] animate-float-delayed shadow-2xl">
                            {/* Window Header */}
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            {/* Abstract UI Content */}
                            <div className="space-y-3 opacity-50">
                                <div className="flex gap-4">
                                    <div className="w-1/3 h-24 rounded-lg bg-secondary/20" />
                                    <div className="w-2/3 h-24 rounded-lg bg-secondary/20" />
                                </div>
                                <div className="h-4 w-1/2 rounded bg-secondary/20" />
                                <div className="h-4 w-3/4 rounded bg-secondary/20" />
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    <div className="h-16 rounded bg-secondary/20" />
                                    <div className="h-16 rounded bg-secondary/20" />
                                    <div className="h-16 rounded bg-secondary/20" />
                                </div>
                            </div>
                        </div>

                        {/* Window 2: Code Editor (Front) */}
                        <div className="absolute bottom-10 left-0 w-3/4 aspect-video glass-card bg-[#0d1117]/90 border-primary/20 rounded-xl p-4 transform rotate-y-[-12deg] rotate-x-6 translate-z-[50px] animate-float shadow-[0_0_50px_rgba(0,179,66,0.2)]">
                            {/* Window Header */}
                            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs font-mono text-white/40">App.tsx</div>
                            </div>
                            {/* Code Content */}
                            <div className="font-mono text-xs space-y-1">
                                <div className="flex">
                                    <span className="text-purple-400 mr-2">const</span>
                                    <span className="text-yellow-200">Future</span>
                                    <span className="text-white mx-1">=</span>
                                    <span className="text-white">()</span>
                                    <span className="text-purple-400 mx-1">=&gt;</span>
                                    <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-4 flex">
                                    <span className="text-purple-400 mr-2">return</span>
                                    <span className="text-white">(</span>
                                </div>
                                <div className="pl-8 flex">
                                    <span className="text-gray-500">&lt;</span>
                                    <span className="text-primary">Innovation</span>
                                </div>
                                <div className="pl-12 flex">
                                    <span className="text-secondary">type</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-300">"immersive"</span>
                                </div>
                                <div className="pl-12 flex">
                                    <span className="text-secondary">speed</span>
                                    <span className="text-white">=</span>
                                    <span className="text-blue-300">{`{100}`}</span>
                                </div>
                                <div className="pl-8 flex">
                                    <span className="text-gray-500">/&gt;</span>
                                </div>
                                <div className="pl-4 flex">
                                    <span className="text-white">);</span>
                                </div>
                                <div className="flex">
                                    <span className="text-white">{`};`}</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="w-2 h-4 bg-primary animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
                    </div>

                </div>
            </div>
        </section>
    );
};
