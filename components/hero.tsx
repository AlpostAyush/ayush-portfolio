"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"
import MagneticButton from "@/components/magnetic-button"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative" ref={containerRef}>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Ayush Ranjan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-foreground/80 max-w-2xl mb-8">
            Computer Science graduate with exceptional problem-solving skills and a passion for developing scalable
            software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <MagneticButton>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4"
        >
          <MagneticButton>
            <a
            href="https://github.com/AlpostAyush"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 rounded-full hover:bg-primary/20 transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://linkedin.com/in/ayushranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 rounded-full hover:bg-primary/20 transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="mailto:ayushranjan2968@gmail.com"
              className="bg-card p-3 rounded-full hover:bg-primary/20 transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10"
        >
          <Button variant="ghost" size="icon" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

