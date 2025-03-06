"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  perspective?: number
  maxTilt?: number
}

export default function TiltCard({ children, perspective = 1000, maxTilt = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => 
    {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect(), centerX = rect.left + rect.width / 2,centerY = rect.top + rect.height / 2 , mouseX = e.clientX, mouseY = e.clientY,rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxTilt, rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxTilt ;

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () =>{ setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="tilt-card"
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-card-content"
        style={{
          transform: isHovering ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : "rotateX(0deg) rotateY(0deg)",
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  )
}

