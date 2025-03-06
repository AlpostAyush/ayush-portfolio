"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  strength?: number
  radius?: number
}

export default function MagneticButton({ children, strength = 30, radius = 150 }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

    // Only apply magnetic effect if cursor is within radius
    if (distance < radius) {
      const magneticPull = 1 - distance / radius
      const moveX = ((e.clientX - centerX) * magneticPull * strength) / 10
      const moveY = ((e.clientY - centerY) * magneticPull * strength) / 10

      setPosition({ x: moveX, y: moveY })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={buttonRef}
      className="magnetic-button inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  )
}

