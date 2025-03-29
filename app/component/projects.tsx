"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import GenioConsult from "@/app/assets/images/Genio_Consult.png"
import Innovatetoimpact from "@/app/assets/images/I2I.png"

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all")
  
    const projects = [
      {
        id: 1,
        title: "Genio Consults",
        description:
          "Official website of Genio Consults - a management consulting and accounting firm.",
        image: GenioConsult,
        tags: ["react", "tailwind"],
        demoLink: "https://genioconsults.xyz/",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Innovate to Impact",
        description:
          "Official website of Innovate-to-Impact tech community",
        image: Innovatetoimpact,
        tags: ["nextjs", "tailwindcss"],
        demoLink: "https://www.innovatetoimpact.org/",
        githubLink: "#",
      },
      {
        id: 3,
        title: "Task Management Tool",
        description:
          "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["react", "redux"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 4,
        title: "Weather Application",
        description: "A weather forecast application with location detection, 7-day forecasts, and interactive maps.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["react", "api", "css"],
        demoLink: "#",
        githubLink: "#",
      },
    ]
  
    const filters = ["all", "react", "nextjs", "redux", "api"]
  
    const filteredProjects =
      activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))
  
    return (
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Proof That I Am Active
            </h2>
            <p className="text-gray-300">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new
              technologies.
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }