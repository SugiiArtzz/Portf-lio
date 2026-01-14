import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono mb-4">Olá, meu nome é </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">Gabriel Moreira</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 text-balance">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Construindo experiências digitais excepcionais com código limpo e design moderno. Especializado em criar
          soluções web robustas e escaláveis.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="px-8">
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
            <a href="#contato">Entre em Contato</a>
          </Button>
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-10 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  )
}
