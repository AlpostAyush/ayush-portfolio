"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import TiltCard from "@/components/tilt-card"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  liveLink: string
  githubLink: string
  features: string[]
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Codeforces User Submissions Dashboard",
      description:
        "A real-time dashboard aggregating Codeforces submissions, processing over 5,000 submissions per day with optimized API integration.",
      tags: ["JavaScript", "HTML/CSS", "Node.js", "API Integration", "Data Visualization"],
      liveLink: "https://codeforces-user-submissions-1.onrender.com/",
      githubLink: "https://github.com/AlpostAyush/codeforces-user-submissions",
      features: [
        "Optimized API integration with response times under 500ms for 95% of queries",
        "Enhanced interactive charts that boosted user engagement by 30%",
        "Real-time data processing and visualization",
        "Responsive design for all device sizes",
      ],
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio showcasing projects, achievements, and certifications, targeting over 1,000 unique monthly visitors.",
      tags: ["React.js", "Tailwind CSS", "Next.js", "Framer Motion"],
      liveLink: "https://your-deployed-link.com",
      githubLink: "https://github.com/AlpostAyush/ayush-portfolio",
      features: [
        "Advanced UI/UX design with responsive layouts",
        "Asynchronous data fetching for optimal performance",
        "Component-based architecture with 99.9% uptime",
        "Interactive animations and transitions",
      ],
    },
  ])

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <p className="text-foreground/70">Showcasing my technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        <ExternalLinkIcon size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/70 hover:text-foreground"
                      >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 italic">
            "Turning complex problems into elegant solutions through code."
          </p>
        </div>
      </div>
    </section>
  )
}
