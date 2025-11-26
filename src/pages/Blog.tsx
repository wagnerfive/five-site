import { Blog } from "@/components/Blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-background">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-five.png" alt="FIVE" className="h-12 w-auto" />
        </a>
        <a href="/" className="text-primary font-bold hover:underline transition-colors">Voltar para Home</a>
      </header>
      <Blog />
    </main>
  );
}
