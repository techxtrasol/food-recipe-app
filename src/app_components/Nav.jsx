"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center space-x-2 text-white font-bold text-xl sm:text-2xl hover:text-emerald-100 transition-colors duration-200"
            >
              <span className="text-2xl">🍔</span>
              <span>FoodApp</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-white hover:text-emerald-100 px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:scale-105"
              >
                Home
              </a>
              <a
                href="/recipe"
                className="text-white hover:text-emerald-100 px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:scale-105"
              >
                Recipe
              </a>
              <a
                href="/contact"
                className="text-white hover:text-emerald-100 px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:scale-105"
              >
                Contact
              </a>
              <a
                href="/about"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                About
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-emerald-100 hover:bg-white/10 p-2 rounded-md transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-700/50 rounded-lg mt-2 backdrop-blur-sm">
            <a
              href="/"
              onClick={closeMenu}
              className="text-white hover:text-emerald-100 hover:bg-white/10 block px-3 py-2 rounded-md text-lg font-medium transition-all duration-200"
            >
              Home
            </a>
            <a
              href="/recipe"
              onClick={closeMenu}
              className="text-white hover:text-emerald-100 hover:bg-white/10 block px-3 py-2 rounded-md text-lg font-medium transition-all duration-200"
            >
              Recipe
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="text-white hover:text-emerald-100 hover:bg-white/10 block px-3 py-2 rounded-md text-lg font-medium transition-all duration-200"
            >
              Contact
            </a>
            <a
              href="/about"
              onClick={closeMenu}
              className="bg-white text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md text-lg font-semibold transition-all duration-200 mx-3 text-center"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
