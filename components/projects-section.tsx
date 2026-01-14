import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

// Importe sua imagem aqui
import log from "./SpaayFood.png"
import gege from "./caminhao.jpg"
import kiki from "./erp.jpg"
import kaka from "./saude.jpg"

const projects = [
  {
    id: 1,
    title: "SaaS Gerenciador de Pedidos",
    description: "Ecossistema completo de delivery multi-nicho. Inclui aplicativo móvel para clientes, painel administrativo web para lojistas e API robusta para gestão de pedidos, pagamentos e logística de entregas em tempo real.",
    tags: ["Flutter", "PHP", "PostgreSQL","API REST","Mobile"],
    // AQUI: Passe apenas a variável importada, não o componente
    image: log, 
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Gestão de Frotas",
    description: "Sistema web para controle logístico e administrativo de veículos. Gerencia manutenções preventivas, alocação de motoristas e custos operacionais, garantindo integridade de dados através de uma estrutura robusta em PostgreSQL.",
    tags: ["PHP", "PostgreSQL", "Bootstrap","MVC"],
    image: gege, // Padronizado para minúsculo
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Sistema ERP",
    description: "Desenvolvimento e sustentação do sistema ZION, focado em logística e gestão de obras. Trabalhei na otimização de consultas SQL complexas, resolução de bugs críticos e criação de módulos para controle de fluxo de materiais e processos internos da empresa.",
    tags: ["PHP", "PostgreSQL", "Git"],
    image: kiki,
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Sistema Hospitalar",
    description: "O Sprint Saúde é uma solução web desenvolvida para otimizar o fluxo de atendimento em ambientes médicos. O foco principal do sistema é reduzir o tempo de espera e organizar a jornada do paciente, desde a recepção até o pós-atendimento, garantindo integridade dos dados e agilidade para a equipe médica.",
    tags: ["PHP", "PostgreSQL", "Git"],
    image: kaka,
    github: "#",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary"></span> Projetos
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
            >
              {/* O container precisa ser relative para o Image fill funcionar */}
              <div className="relative aspect-video w-full bg-secondary flex items-center justify-center border-b border-border overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={`Imagem do projeto ${project.title}`}
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-muted-foreground">Imagem do Projeto</span>
                )}
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}