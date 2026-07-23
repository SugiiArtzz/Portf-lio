import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, BookOpen, Rocket } from "lucide-react"

const education = [
  {
    id: 1,
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Wyden Martha Falcão",
    location: "Manaus, AM",
    period: "2024 - 2026",
    description:
      "Formação focada em análise, design, implementação e manutenção de sistemas computacionais. Desenvolvimento de competências em programação, banco de dados relacionais, engenharia de software e gestão de projetos de TI, aliando teoria à prática para construir soluções completas.",
    highlights: [
      "Estruturas de Dados",
      "Banco de Dados Relacionais",
      "Desenvolvimento Web",
      "Engenharia de Software",
    ],
  },
  {
    id: 2,
    course: "Percurso como Empreendedor",
    institution: "Spaay & Freelancer",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    description:
      "Como desenvolvedor e fundador de um sistema SaaS (Spaay), além de freelancer ao longo da minha jornada, obtive experiência sólida sobre áreas que vão muito além do código. Aprendi a entender a real dor do cliente, executar funcionalidades que realmente agilizam o tempo e entregar soluções concretas para problemas reais. Domino desde a precificação e modelo de negócio até a arquitetura do sistema, implementação, hospedagem e migração de infraestrutura compartilhada para servidor VPS.\n\nNunca houve momento em que algum sistema, integração, ou funcionalidade me impediu de solucionar algo. Se tem algo que eu ainda não conheço, eu descubro, pesquiso e soluciono até conseguir. Se você me perguntar se consigo desenvolver algo, eu nunca vou dizer não — só que preciso de tempo para resolver. Esse foi o maior aprendizado que levei comigo como desenvolvedor e empreendedor.",
    highlights: [
      "Modelagem de Negócio",
      "Migração VPS",
      "Integrações e APIs",
      "Segurança e Proteção de Dados",
      "UI/UX Avançada",
      "Automação e IA",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="educacao" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Educação
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {education.map((item) => (
            <Card key={item.id} className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    {item.icon || <GraduationCap className="h-6 w-6 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{item.course}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
