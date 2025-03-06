"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CodeIcon, ServerIcon, DatabaseIcon, BrainIcon } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-foreground/70">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-background border-2 border-primary rounded-2xl transform -rotate-3 overflow-hidden">
  
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Motivated and Innovative <span className="text-primary">Developer</span>
            </h3>
            <p className="text-lg mb-4">
              I'm a Computer Science graduate with exceptional problem-solving skills and a passion for developing
              scalable software solutions. I'm adept at leveraging competitive programming and hands-on project
              experience to drive results.
            </p>
            <p className="text-lg mb-6">
              Eager to contribute to dynamic teams and tackle challenging technical problems using modern technologies.
              My focus is on creating efficient, user-friendly applications with clean code and optimal performance.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <CodeIcon className="h-5 w-5" />
                  <h4 className="font-bold">Frontend</h4>
                </div>
                <p className="text-sm">
                  Building responsive and interactive user interfaces with React.js, JavaScript, and modern CSS
                  frameworks.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <ServerIcon className="h-5 w-5" />
                  <h4 className="font-bold">Backend</h4>
                </div>
                <p className="text-sm">
                  Developing robust server-side applications with Node.js, Express, and RESTful APIs.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <DatabaseIcon className="h-5 w-5" />
                  <h4 className="font-bold">Databases</h4>
                </div>
                <p className="text-sm">
                  Working with SQL and NoSQL databases to store and manage application data efficiently.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <BrainIcon className="h-5 w-5" />
                  <h4 className="font-bold">Problem Solving</h4>
                </div>
                <p className="text-sm">
                  Applying algorithmic thinking and data structures knowledge to solve complex problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

