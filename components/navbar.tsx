"use client"

import { useState, useEffect } from "react"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import MagneticButton from "@/components/magnetic-button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

const navItems = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Projects", href: "#projects" },
{ name: "Skills", href: "#skills" },
{ name: "Education", href: "#education" },
{ name: "Contact", href: "#contact" },
]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary">
          Ayush<span className="text-foreground">Ranjan</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <MagneticButton key={item.name}>
              <a href={item.href} className="text-foreground/80 hover:text-primary transition-colors px-2">
                {item.name}
              </a>
            </MagneticButton>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="mr-2"
          >
            {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

