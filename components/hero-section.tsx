import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// 👇 IMPORTE SUA FOTO AQUI
import ProfileImage from "./princi.jpg" 

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 pt-10 md:pt-0">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* === ÁREA DA FOTO === */}
        {/* Removido bordas e sombras. Mantido apenas o recorte redondo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden">
          <Image 
            src={ProfileImage} 
            alt="Foto de Perfil de Gabriel Moreira"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* ==================== */}

        {/* Título unificado igual ao modelo: "Olá, eu sou [Nome em Laranja]" */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Olá, eu sou <span className="text-primary">Gabriel Moreira</span>
        </h1>
        
        {/* Subtítulo / Cargo */}
        <h2 className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance font-medium">
          Desenvolvedor Full Stack apaixonado por Tecnologia
        </h2>
        
        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="px-8 font-bold">
            <a href="#projetos">Ver Projetos</a>
          </Button>
          
          {/* Botão outline para baixar currículo */}
          <Button asChild variant="outline" size="lg" className="px-8 bg-transparent border-input hover:bg-secondary/50 hover:text-foreground">
            <a href="/Curr%C3%ADculo%20Gabriel%20Moreira.pdf" download="Currículo Gabriel Moreira.pdf">Baixar CV</a>
          </Button>
        </div>
      </div>
      
      {/* Seta indicativa */}
      <a
        href="#sobre"
        className="absolute bottom-10 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}