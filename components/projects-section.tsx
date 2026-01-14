import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Nome do Projeto 1",
    description: "Descrição do seu projeto aqui. Explique o que foi desenvolvido e quais tecnologias foram utilizadas.",
    tags: ["React", "Next.js", "PostgreSQL"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Nome do Projeto 2",
    description: "Descrição do seu projeto aqui. Explique o que foi desenvolvido e quais tecnologias foram utilizadas.",
    tags: ["PHP", "PostgreSQL", "API"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Nome do Projeto 3",
    description: "Descrição do seu projeto aqui. Explique o que foi desenvolvido e quais tecnologias foram utilizadas.",
    tags: ["Java", "React", "Git"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Nome do Projeto 4",
    description: "Descrição do seu projeto aqui. Explique o que foi desenvolvido e quais tecnologias foram utilizadas.",
    tags: ["Next.js", "PostgreSQL", "API"],
    image: null,
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
              <div className="aspect-video bg-secondary flex items-center justify-center border-b border-border">
                <span className="text-muted-foreground">Imagem do Projeto</span>
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
