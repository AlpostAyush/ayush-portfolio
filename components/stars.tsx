"use client"

import { useEffect, useRef } from "react"

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing stars
    container.innerHTML = ""

    // Create stars
    const starCount = 100
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random opacity
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`

      // Add twinkle animation
      const animationDuration = Math.random() * 3 + 2
      star.style.animation = `twinkle ${animationDuration}s ease-in-out infinite`
      star.style.animationDelay = `${Math.random() * 5}s`

      container.appendChild(star)
    }

    // Add twinkle keyframes if they don't exist
    if (!document.getElementById("twinkle-keyframes")) {
      const style = document.createElement("style")
      style.id = "twinkle-keyframes"
      style.textContent = `
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      if (document.getElementById("twinkle-keyframes")) {
        document.getElementById("twinkle-keyframes")?.remove()
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}

