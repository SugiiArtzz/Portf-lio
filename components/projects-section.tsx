"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import spaayImg from "./spaay.png"
import caminhaoImg from "./caminhao.jpg"
import sprintImg from "./sprint.png"
import saudeImg from "./saude.jpg"

const projects = [
  {
    id: 1,
    title: "Spaay",
    description: "Plataforma SaaS B2B de gestão de pedidos multi-nicho. Ecossistema completo com app mobile para clientes, painel administrativo web para lojistas e API robusta. Conta com integração de pagamentos via Pix Dinâmico (Mercado Pago), automação de WhatsApp com Evolution API em containers Docker e deploy em servidor VPS. Solução completa de delivery com gestão de pedidos, cardápio digital e logística de entregas em tempo real.",
    tags: ["PHP", "Flutter", "PostgreSQL", "Docker", "Mercado Pago", "API REST"],
    image: spaayImg,
    github: "#",
    live: "https://spaay.com.br",
  },
  {
    id: 2,
    title: "Gestão de Frotas",
    description: "Sistema web para controle logístico e administrativo de veículos. Gerencia manutenções preventivas, alocação de motoristas e custos operacionais, garantindo integridade de dados através de uma estrutura robusta em PostgreSQL.",
    tags: ["PHP", "PostgreSQL", "Bootstrap", "MVC"],
    image: caminhaoImg,
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Sprint ERP",
    description: "Sistema ERP completo focado em logística e gestão de obras. Desenvolvimento e sustentação do sistema ZION com otimização de consultas SQL complexas, resolução de bugs críticos e criação de módulos para controle de fluxo de materiais e processos internos. Arquitetura MVC com foco em performance e integridade dos dados.",
    tags: ["PHP", "PostgreSQL", "MySQL", "Git", "MVC"],
    image: sprintImg,
    github: "#",
    live: "https://sprinterp.com.br/",
  },
  {
    id: 4,
    title: "Sistema Hospitalar",
    description: "O Sprint Saúde é uma solução web desenvolvida para otimizar o fluxo de atendimento em ambientes médicos. O foco principal do sistema é reduzir o tempo de espera e organizar a jornada do paciente, desde a recepção até o pós-atendimento, garantindo integridade dos dados e agilidade para a equipe médica.",
    tags: ["PHP", "PostgreSQL", "Git"],
    image: saudeImg,
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Hydra OS",
    description: "Sistema completo de gestão de crédito e cobrança para operações de crédito privado, correspondentes bancários e financeiras com carteira própria. Controle de clientes, contratos e parcelas, cobrança automática via WhatsApp, cálculo de juros de mora, registro de garantias com consulta FIPE, dashboard financeiro em tempo real e integração com Asaas para gestão de pagamentos. Multiempresa, perfis de acesso e régua de cobrança.",
    tags: ["PHP", "React", "PostgreSQL", "Docker", "Mercado Pago", "Asaas", "Tailwind CSS"],
    image: null,
    github: "#",
    live: "https://ibinvestimentos.org/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Projetos
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <Carousel className="w-full max-w-4xl mx-auto overflow-visible">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-card border-border group overflow-hidden">
                  <div className="relative aspect-video w-full bg-secondary flex items-center justify-center border-b border-border overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-violet-600">
                        <span className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
                          H
                        </span>
                      </div>
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
                          Acessar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />

          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 size-10" />
            <CarouselNext className="static translate-y-0 size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
