"use client"

import { useEffect, useRef } from "react"

export default function MoonAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create moon
    const moon = document.createElement("div")
    moon.className = "moon animate-float"

    // Set moon size and position
    const moonSize = Math.min(window.innerWidth * 0.15, 150)
    moon.style.width = `${moonSize}px`
    moon.style.height = `${moonSize}px`
    moon.style.top = `${window.innerHeight * 0.15}px`
    moon.style.right = `${window.innerWidth * 0.1}px`
    moon.style.backgroundColor = "#E1E1E1"

    // Create moon craters
    const craterCount = 5
    for (let i = 0; i < craterCount; i++) {
      const crater = document.createElement("div")
      crater.className = "moon-crater"

      // Random crater size
      const craterSize = Math.random() * (moonSize * 0.3) + moonSize * 0.1
      crater.style.width = `${craterSize}px`
      crater.style.height = `${craterSize}px`

      // Random position within the moon
      const maxPos = moonSize - craterSize
      crater.style.left = `${Math.random() * maxPos}px`
      crater.style.top = `${Math.random() * maxPos}px`

      moon.appendChild(crater)
    }

    container.appendChild(moon)

    // Create stars
    const starCount = 100
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random star size
      const starSize = Math.random() * 2 + 1
      star.style.width = `${starSize}px`
      star.style.height = `${starSize}px`

      // Random position
      star.style.left = `${Math.random() * 100}vw`
      star.style.top = `${Math.random() * 100}vh`

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`

      container.appendChild(star)
    }

    // Handle window resize
    const handleResize = () => {
      const newMoonSize = Math.min(window.innerWidth * 0.15, 150)
      moon.style.width = `${newMoonSize}px`
      moon.style.height = `${newMoonSize}px`
      moon.style.top = `${window.innerHeight * 0.15}px`
      moon.style.right = `${window.innerWidth * 0.1}px`
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}

