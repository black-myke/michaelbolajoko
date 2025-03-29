"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react"

export default function Hero() {
    const [typedText, setTypedText] = useState("")
    const fullText = "React Developer"
    const typingSpeed = 50;
  
    useEffect(() => {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      }
    }, [typedText])
  
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl" />
        </div>
  
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block mb-2">Hello, I'm Michael</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">I build modern, responsive web applications</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="https://drive.google.com/file/d/1x16rQEjht5B4Pc46K4n_C97Zz_OPYXF7/view?usp=sharing"
                target="_blank"
                className="px-8 py-3 rounded-full bg-gray-800 border border-gray-700 text-white font-medium hover:bg-gray-700 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-400 hover:text-white transition-colors" />
          </Link>
        </div>
      </section>
    )
  }