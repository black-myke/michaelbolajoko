"use client"

import { Code, Server, PenToolIcon as Tool } from "lucide-react"
import Image from "next/image"
// import PixelCard from "./PixelCard"

export default function Skills() {
  const skills = [
    { name: "React.js", logo: "/react-logo.svg" },
    { name: "JavaScript", logo: "/javascript-logo.svg" },
    { name: "HTML", logo: "/html-logo.svg" },
    { name: "CSS", logo: "/css-logo.svg" },
    { name: "Bootstrap", logo: "/bootstrap.svg" },
    { name: "Tailwind CSS", logo: "/tailwindcss-logo.svg" },
    { name: "Node.js", logo: "/nodejs-logo.svg" },
    { name: "GitHub", logo: "/github.svg" },
    { name: "Figma", logo: "/figma-logo.svg" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            What Do I Use?
          </h2>
          <p className="text-gray-300">
            I've worked with a variety of technologies in the web development world. Here are my main areas of
            expertise:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:-translate-y-1"
            >
              <Image 
                src={skill.logo}
                alt={skill.name}
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-sm font-medium text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
