"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Database, 
  Atom, 
  Coffee, 
  GitGraph, 
  Server, 
  Code2 
} from "lucide-react"

// Ícones customizados para marcas específicas que não tem no Lucide padrão
const NextJsIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.465-.745 4.758-2.022 6.665l-1.313-1.313ZM12 2.182c-5.422 0-9.818 4.396-9.818 9.818 0 5.422 4.396 9.818 9.818 9.818 1.935 0 3.736-.57 5.233-1.55L7.758 10.795l1.545-1.545 10.16 10.16A9.775 9.775 0 0 0 21.818 12c0-5.422-4.396-9.818-9.818-9.818ZM10.909 16.364V7.636h2.182v6.23l4.57 4.57-1.542 1.543-5.21-5.21V16.363h-.001Z"/></svg>
)

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M14.25.75L14.25 3L8.25 3C5.3505 3 3 5.3505 3 8.25L3 11.25L5.25 11.25L5.25 8.25C5.25 6.59315 6.59315 5.25 8.25 5.25L14.25 5.25C15.9069 5.25 17.25 6.59315 17.25 8.25L17.25 11.25L19.5 11.25L19.5 8.25C19.5 5.3505 17.1495 3 14.25 3L14.25 .75ZM10.5 6.75C9.67157 6.75 9 7.42157 9 8.25C9 9.07843 9.67157 9.75 10.5 9.75C11.3284 9.75 12 9.07843 12 8.25C12 7.42157 11.3284 6.75 10.5 6.75ZM4.5 12.75L4.5 15.75C4.5 18.6495 6.8505 21 9.75 21L15.75 21L15.75 18.75L9.75 18.75C8.09315 18.75 6.75 17.4069 6.75 15.75L6.75 12.75L4.5 12.75ZM16.5 12.75L16.5 15.75L18.75 15.75L18.75 12.75L21 12.75L21 15.75C21 18.6495 18.6495 21 15.75 21L15.75 23.25C18.6495 23.25 21 20.8995 21 18L21 15C21 13.7574 19.9926 12.75 18.75 12.75L16.5 12.75ZM13.5 14.25C12.6716 14.25 12 14.9216 12 15.75C12 16.5784 12.6716 17.25 13.5 17.25C14.3284 17.25 15 16.5784 15 15.75C15 14.9216 14.3284 14.25 13.5 14.25Z"/></svg>
)

const PhpIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M12.825 5.756c-1.225 0-2.054.603-2.054.603l-1.206 4.197h-1.92l1.242-4.233s-.923-.567-2.12-.567c-2.43 0-4.015 1.54-4.524 4.545l-.94 5.378h2.61l.738-4.328c.214-1.242.92-1.74 1.84-1.74.832 0 1.224.462 1.082 1.28l-.78 4.79h2.645l.798-4.914c.23-1.42 1.35-2.006 2.395-2.006.85 0 1.24.46 1.098 1.28l-.78 4.79h2.662l.797-4.93c.338-2.043-1.04-4.145-3.583-4.145zm-7.66 4.843c0-.337.035-.64.088-.94l.035-.125s.32-1.633 1.863-1.633c.8 0 1.33.32 1.562.64-.178.213-.675.923-.96 2.06z"/></svg>
)

const technologies = [
  {
    name: "PHP",
    icon: <PhpIcon />,
    description: "Backend & APIs",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-full h-full" />,
    description: "Database",
  },
  {
    name: "React",
    icon: <Atom className="w-full h-full" />,
    description: "Frontend Library",
  },
  {
    name: "Java",
    icon: <Coffee className="w-full h-full" />,
    description: "Backend & Mobile",
  },
  {
    name: "Next.js",
    icon: <NextJsIcon />,
    description: "React Framework",
  },
  {
    name: "Git",
    icon: <GitGraph className="w-full h-full" />,
    description: "Version Control",
  },
  {
    name: "Node.js",
    icon: <Server className="w-full h-full" />,
    description: "Backend Runtime",
  },
  {
    name: "Python",
    icon: <PythonIcon />,
    description: "AI & Backend",
  },
]

// Configuração da animação
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Atraso em cascata
      duration: 0.5,
      ease: "easeOut"
    },
  }),
}

export function TechSection() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
           Tecnologias
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} // Só anima na primeira vez que aparece
              custom={index}
            >
              <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-12 h-12 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-lg">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}