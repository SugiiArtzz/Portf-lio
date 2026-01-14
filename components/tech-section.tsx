import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "PHP",
    icon: "🐘",
    description: "Backend & APIs",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Database",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Frontend Library",
  },
  {
    name: "Java",
    icon: "☕",
    description: "Backend & Mobile",
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "React Framework",
  },
  {
    name: "Git",
    icon: "🔀",
    description: "Version Control",
  },
    {
    name: "Node.js",
    icon: "🔀",
    description: "Backend",
  },
]

export function TechSection() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary"></span> Tecnologias
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="bg-card border-border hover:border-primary transition-colors duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
