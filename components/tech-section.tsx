"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, Variants } from "framer-motion"
import {
  Database,
  Atom,
  Coffee,
  GitGraph,
  Server,
  Zap,
  Code2,
  Palette,
  FileJson,
  Terminal,
  Globe,
  RefreshCw,
} from "lucide-react"

// --- Ícones Customizados ---

const NextJsIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.465-.745 4.758-2.022 6.665l-1.313-1.313ZM12 2.182c-5.422 0-9.818 4.396-9.818 9.818 0 5.422 4.396 9.818 9.818 9.818 1.935 0 3.736-.57 5.233-1.55L7.758 10.795l1.545-1.545 10.16 10.16A9.775 9.775 0 0 0 21.818 12c0-5.422-4.396-9.818-9.818-9.818ZM10.909 16.364V7.636h2.182v6.23l4.57 4.57-1.542 1.543-5.21-5.21V16.363h-.001Z"/></svg>
)

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M14.25.75L14.25 3L8.25 3C5.3505 3 3 5.3505 3 8.25L3 11.25L5.25 11.25L5.25 8.25C5.25 6.59315 6.59315 5.25 8.25 5.25L14.25 5.25C15.9069 5.25 17.25 6.59315 17.25 8.25L17.25 11.25L19.5 11.25L19.5 8.25C19.5 5.3505 17.1495 3 14.25 3L14.25 .75ZM10.5 6.75C9.67157 6.75 9 7.42157 9 8.25C9 9.07843 9.67157 9.75 10.5 9.75C11.3284 9.75 12 9.07843 12 8.25C12 7.42157 11.3284 6.75 10.5 6.75ZM4.5 12.75L4.5 15.75C4.5 18.6495 6.8505 21 9.75 21L15.75 21L15.75 18.75L9.75 18.75C8.09315 18.75 6.75 17.4069 6.75 15.75L6.75 12.75L4.5 12.75ZM16.5 12.75L16.5 15.75L18.75 15.75L18.75 12.75L21 12.75L21 15.75C21 18.6495 18.6495 21 15.75 21L15.75 23.25C18.6495 23.25 21 20.8995 21 18L21 15C21 13.7574 19.9926 12.75 18.75 12.75L16.5 12.75ZM13.5 14.25C12.6716 14.25 12 14.9216 12 15.75C12 16.5784 12.6716 17.25 13.5 17.25C14.3284 17.25 15 16.5784 15 14.9216 14.3284 14.25 13.5 14.25Z"/></svg>
)

const PhpIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M12.825 5.756c-1.225 0-2.054.603-2.054.603l-1.206 4.197h-1.92l1.242-4.233s-.923-.567-2.12-.567c-2.43 0-4.015 1.54-4.524 4.545l-.94 5.378h2.61l.738-4.328c.214-1.242.92-1.74 1.84-1.74.832 0 1.224.462 1.082 1.28l-.78 4.79h2.645l.798-4.914c.23-1.42 1.35-2.006 2.395-2.006.85 0 1.24.46 1.098 1.28l-.78 4.79h2.662l.797-4.93c.338-2.043-1.04-4.145-3.583-4.145zm-7.66 4.843c0-.337.035-.64.088-.94l.035-.125s.32-1.633 1.863-1.633c.8 0 1.33.32 1.562.64-.178.213-.675.923-.96 2.06z"/></svg>
)

const DockerIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M13.983 11.078h-2.25v-2.25h2.25v2.25zm0-3.75h-2.25v-2.25h2.25v2.25zm.75 3.75h2.25v-2.25h-2.25v2.25zm-3.75 0h-2.25v-2.25h2.25v2.25zM6.458 11.078h2.25v-2.25h-2.25v2.25zm9 0h2.25v-2.25h-2.25v2.25zM6.458 7.328h2.25v-2.25h-2.25v2.25zm.75-3h2.25v-2.25h-2.25v2.25zm10.5 3.75c-.493-.75-1.398-1.125-2.398-1.125-.6 0-1.125.15-1.575.45-.45.3-.75.675-.975 1.125-.45-.75-1.125-1.125-1.95-1.125-.45 0-.825.15-1.125.45v-3.15l-1.5.15v9.45c-1.425.075-2.625.6-3.45 1.425-.75.75-1.125 1.65-1.125 2.625 0 .975.3 1.8.9 2.4s1.35.9 2.25.9c.9 0 1.65-.3 2.25-.9s.9-1.35.9-2.25l.075-1.125c.45.3.975.45 1.575.45h.3c.3 0 .525-.075.75-.15l-.075-1.125c.075.075.15.15.3.225.45.3.975.45 1.575.45.9 0 1.65-.3 2.25-.9.6-.6.9-1.35.9-2.25v-.225c0-.975-.45-1.8-1.35-2.25h.075z"/></svg>
)

const TailwindIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
)

const RedisIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM4 8.5l8 4 8-4M4 12l8 4 8-4M4 15.5l8 4 8-4"/></svg>
)

const MongoIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 13.17V7h2v6.17l2.59-2.58L17 13l-4 4-1-1z"/></svg>
)

const TypeScriptIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.33 0-1.41-.81-2.04-1.88-2.49l-.63-.27c-.73-.3-1.21-.71-1.21-1.32 0-.64.55-1.12 1.37-1.12.8 0 1.28.35 1.69.88l1.07-.69c-.51-.82-1.42-1.43-2.79-1.43-1.55 0-2.58.91-2.58 2.14 0 1.07.62 1.74 1.71 2.15l.63.27c.74.31 1.33.76 1.33 1.4 0 .76-.65 1.19-1.58 1.19-.94 0-1.54-.44-2.09-1.04l-1.12.74zm-5.17.08c.32.57.76 1.06 1.56 1.06.8 0 1.27-.31 1.27-1.1v-5.99h-2.1v5.83c0 .2 0 .2-.73.2h-.73v1.08h.72z"/></svg>
)

// --- Dados Categorizados ---

const categories = [
  {
    name: "Frontend",
    icon: <Palette className="w-4 h-4" />,
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    items: [
      { name: "React", icon: <Atom className="w-full h-full" />, level: 72 },
      { name: "Next.js", icon: <NextJsIcon />, level: 70 },
      { name: "TypeScript", icon: <TypeScriptIcon />, level: 65 },
      { name: "JavaScript", icon: <FileJson className="w-full h-full" />, level: 80 },
      { name: "Tailwind CSS", icon: <TailwindIcon />, level: 100 },
    ],
  },
  {
    name: "Backend",
    icon: <Code2 className="w-4 h-4" />,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    items: [
      { name: "PHP", icon: <PhpIcon />, level: 100 },
      { name: "Node.js", icon: <Server className="w-full h-full" />, level: 60 },
      { name: "Python", icon: <PythonIcon />, level: 67 },
      { name: "Java", icon: <Coffee className="w-full h-full" />, level: 55 },
      { name: "FastAPI", icon: <Zap className="w-full h-full" />, level: 55 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-4 h-4" />,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    items: [
      { name: "PostgreSQL", icon: <Database className="w-full h-full" />, level: 86 },
      { name: "MySQL", icon: <Database className="w-full h-full" />, level: 87 },
      { name: "Redis", icon: <RedisIcon />, level: 82 },
      { name: "MongoDB", icon: <MongoIcon />, level: 70 },
    ],
  },
  {
    name: "DevOps",
    icon: <GitGraph className="w-4 h-4" />,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    items: [
      { name: "Docker", icon: <DockerIcon />, level: 75 },
      { name: "Git", icon: <GitGraph className="w-full h-full" />, level: 75 },
      { name: "Linux", icon: <Terminal className="w-full h-full" />, level: 80 },
      { name: "Nginx", icon: <Globe className="w-full h-full" />, level: 78 },
      { name: "CI/CD", icon: <RefreshCw className="w-full h-full" />, level: 72 },
    ],
  },
]

// --- Animation ---

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1200
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(easeOut * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-xs text-muted-foreground tabular-nums ml-2">
      {count}%
    </span>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function TechSection() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Tecnologias
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-lg ${category.bgColor} flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category.name}
                </span>
              </div>

              <div className="space-y-4">
                {category.items.map((tech) => (
                  <div key={tech.name} className="group cursor-default">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform shrink-0">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {tech.name}
                          </span>
                          <AnimatedCounter value={tech.level} />
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
