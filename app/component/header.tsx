"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"
import { Stylish } from "next/font/google";
import Link from "next/link"

const stylish = Stylish ({weight: ['400'], style: ["normal"],  variable: '--font-stylish'});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`${stylish.className} text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent`}
            >
              michaelbolajoko
            </Link>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
  
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    )
  }