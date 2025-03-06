"use client"

import type React from "react"

import { motion } from "framer-motion"
import { DatabaseIcon, ServerIcon, CodeIcon, TerminalIcon, GlobeIcon, LayersIcon, GitBranchIcon } from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  level: number
}

export default function Skills() {
  const languageSkills: Skill[] = [
    { name: "Java", icon: <CodeIcon className="h-5 w-5" />, level: 90 },
    { name: "C/C++", icon: <CodeIcon className="h-5 w-5" />, level: 85 },
    { name: "JavaScript", icon: <CodeIcon className="h-5 w-5" />, level: 90 },
    { name: "HTML/CSS", icon: <LayersIcon className="h-5 w-5" />, level: 85 },
    { name: "SQL", icon: <DatabaseIcon className="h-5 w-5" />, level: 80 },
    { name: "Bash", icon: <TerminalIcon className="h-5 w-5" />, level: 75 },
  ]

  const techSkills: Skill[] = [
    { name: "React.js", icon: <CodeIcon className="h-5 w-5" />, level: 85 },
    { name: "Node.js", icon: <ServerIcon className="h-5 w-5" />, level: 80 },
    { name: "Linux", icon: <TerminalIcon className="h-5 w-5" />, level: 85 },
    { name: "Git", icon: <GitBranchIcon className="h-5 w-5" />, level: 90 },
    { name: "RESTful APIs", icon: <GlobeIcon className="h-5 w-5" />, level: 85 },
    { name: "Data Structures", icon: <DatabaseIcon className="h-5 w-5" />, level: 95 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <p className="text-foreground/70">My technical expertise and proficiency</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Programming Languages" skills={languageSkills} delay={0} />
          <SkillCategory title="Technologies & Tools" skills={techSkills} delay={0.2} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CourseCard title="Data Structures" />
            <CourseCard title="Algorithms Analysis" />
            <CourseCard title="Database Management" />
            <CourseCard title="Operating Systems" />
            <CourseCard title="Internet Technology" />
            <CourseCard title="Computer Architecture" />
            <CourseCard title="Theory of Computation" />
            <CourseCard title="Discrete Mathematics" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCategory({
  title,
  skills,
  delay,
}: {
  title: string
  skills: Skill[]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card rounded-lg p-6 shadow-md"
    >
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span className="text-sm text-foreground/70">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="progress-bar"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function CourseCard({ title }: { title: string }) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
      <p className="font-medium">{title}</p>
    </div>
  )
}

