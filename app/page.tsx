"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorSparkles from "@/components/cursor-sparkles"
import MoonAnimation from "@/components/moon-animation"
import CompetitiveProgramming from "@/components/competitive-programming"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check if document is available (client-side)
    if (typeof document !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark")
      setTheme(isDark ? "dark" : "light")

      // Create a mutation observer to watch for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class" && mutation.target === document.documentElement) {
            const isDarkNow = document.documentElement.classList.contains("dark")
            setTheme(isDarkNow ? "dark" : "light")
          }
        })
      })

      observer.observe(document.documentElement, { attributes: true })

      return () => observer.disconnect()
    }
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {theme === "dark" && <MoonAnimation />}
      <CursorSparkles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CompetitiveProgramming />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

