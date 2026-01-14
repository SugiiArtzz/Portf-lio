import Image from "next/image";
import Gabriel from "./eu.jpg"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary"></span> Sobre Mim
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Apaixonado por criar o futuro através do código. Como Full Stack, combino lógica robusta e design funcional para entregar soluções digitais que não apenas funcionam, mas encantam e resolvem problemas reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Minha jornada na programação começou há alguns anos e desde então venho me especializando em tecnologias
              modernas para construir aplicações robustas e escaláveis.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">Mais do que apenas escrever linhas de código, meu objetivo é transformar ideias complexas em sistemas eficientes e escaláveis. Valorizo a colaboração e a melhoria contínua, buscando sempre entregar softwares que unam performance técnica a uma experiência de usuário fluida, garantindo que cada projeto gere impacto real e valor para o negócio.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border-2 border-primary">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-lg"><Image alt="logo" src={Gabriel}/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
