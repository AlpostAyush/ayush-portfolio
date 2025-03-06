"use client"

import { useEffect, useRef } from "react"

export default function CursorSparkles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement("div")
      sparkle.className = "sparkle"

      // Random size between 5px and 15px
      const size = Math.random() * 10 + 5
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`

      // Position at cursor
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`

      container.appendChild(sparkle)

      // Remove sparkle after animation completes
      setTimeout(() => {
        if (sparkle.parentNode === container) {
          container.removeChild(sparkle)
        }
      }, 800) // Match animation duration
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Limit the rate of sparkle creation
      if (Math.random() > 0.3) return
      createSparkle(e.clientX, e.clientY)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />
}

