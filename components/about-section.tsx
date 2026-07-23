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
              Desenvolvedor Full Stack e Empreendedor. Combino desenvolvimento técnico com visão de produto e negócio para criar soluções SaaS B2B escaláveis. Do código à infraestrutura, passando por integrações financeiras e automações, meu trabalho entrega sistemas que geram impacto real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Domínio de arquiteturas MVC, modelagem de bancos de dados relacionais, deploys em servidores VPS com Docker, e integrações de pagamento (Pix). Cada projeto é tratado com responsabilidade de ponta a ponta — do planejamento à operação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">Como fundador do Spaay, atuo também em estratégias de vendas B2B, negociações, contratos NDA e registro de propriedade intelectual. Acredito que um bom desenvolvedor entende o negócio tanto quanto a tecnologia — e é esse diferencial que busco entregar em cada projeto.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border-2 border-primary">
              <Image src={Gabriel} alt="Gabriel Moreira" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
