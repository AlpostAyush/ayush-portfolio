"use client"

import { useEffect, useRef } from "react"

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ""

    // Create stars
    const starCount = 1
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"
      const size = Math.random() * 2 + 1        // Random size between 1px and 3px
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${Math.random() * 10000}%`
      star.style.top = `${Math.random() * 10000}%`
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`
      const animationDuration = Math.random() * 3 + 2
      star.style.animation = `twinkle ${animationDuration}s ease-in-out infinite`
      star.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(star)
    }
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

