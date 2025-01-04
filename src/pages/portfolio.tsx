import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A modern web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://github.com/yourusername/project-alpha"
  },
  {
    title: "Project Beta",
    description: "Full-stack application with Node.js and PostgreSQL",
    tags: ["Node.js", "Express", "PostgreSQL"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://github.com/yourusername/project-beta"
  },
  {
    title: "Project Gamma",
    description: "Mobile-first e-commerce platform",
    tags: ["Next.js", "Stripe", "MongoDB"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://github.com/yourusername/project-gamma"
  }
]

function PortfolioPage(): JSX.Element {
  return (
    <Layout>
      <div className="space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects and technical achievements. Each project represents
            a unique challenge and innovative solution.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card block group"
            >
              <StaticImage
                src="../images/project-placeholder.jpg"
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                placeholder="blurred"
              />
              <h3 className="text-xl font-bold mb-2 gradient-text group-hover:neon-text">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm glass rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block glass-card hover:neon-text transition-all"
          >
            Let's work together →
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export function Head(): JSX.Element {
  return <Seo title="Portfolio" description="View my latest projects and work" />
} 