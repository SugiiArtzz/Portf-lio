import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Desenvolvedor Full Stack Junior",
    company: "Axel Construções e Projetos",
    location: "Manaus, AM",
    period: "Jun 2025 - Dez 2025",
    description:
      "Liderei o desenvolvimento e manutenção do sistema 'ZION', uma solução ERP focada em logística e gestão de materiais para a construção civil. Atuei de ponta a ponta: desde a modelagem de banco de dados complexos (MySQL) e criação de APIs performáticas com PHP e Python (FastAPI), até a implementação de interfaces modernas e responsivas com React.js e Tailwind CSS. O projeto resultou em maior controle de estoque e eficiência operacional para a empresa, utilizando GitLab para versionamento e CI/CD.",
    skills: ["PHP", "Python", "React.js", "MySQL", "FastAPI", "Tailwind CSS"],
  },
    {
   id: 1,
    role: "Desenvolvedor Full Stack Júnior",
    company: "JVS",
    location: "Manaus, AM",
    period: "Jan 2025 - Presente", 
    description:
      "Atuo no desenvolvimento e sustentação de um ecossistema de produtos digitais voltados para o mercado B2B. Participo de todo o ciclo de vida das aplicações, focando na criação de múltiplos sistemas comerciais. Minhas responsabilidades incluem a manutenção de arquiteturas MVC, modelagem de bancos de dados relacionais e implementação de novas features full stack, garantindo escalabilidade e estabilidade para diversos clientes simultâneos.",
    skills: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Git", "MVC"],
    }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary"></span> Experiência
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <Card className="bg-card border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-primary mt-1">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
