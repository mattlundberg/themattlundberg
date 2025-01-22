import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PromptGenerator } from "../components"

interface Tool {
  title: string
  description: string
  features: string[]
  imageUrl: string
  link: string
  category: 'Automation' | 'Content Generation' | 'Analytics'
}

const tools: Tool[] = [
  {
    title: "ChatBase",
    description: "AI-powered chatbot for seamless customer interactions and support automation",
    features: ["Custom Knowledge Base", "24/7 Availability", "Multi-language Support"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://www.chatbase.co",
    category: "Automation"
  },
  {
    title: "Claude AI",
    description: "Advanced language model for content generation and analysis", 
    features: ["High Accuracy", "Context Understanding", "Code Generation"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://claude.ai",
    category: "Content Generation"
  },
  {
    title: "Cursor IDE",
    description: "AI-enhanced development environment for faster coding",
    features: ["Code Completion", "AI Pair Programming", "Smart Refactoring"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://cursor.sh",
    category: "Automation"
  },
  {
    title: "Cassidy AI",
    description: "AI-powered content creation and optimization platform for marketers and writers",
    features: ["Content Generation", "SEO Optimization", "Brand Voice Customization"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://app.cassidyai.com/",
    category: "Content Generation"
  },
  {
    title: "AI Agent",
    description: "AI-powered analytics and insights platform for data-driven decision making",
    features: ["Data Analysis", "Predictive Analytics", "Custom Reporting"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://aiagent.app",
    category: "Analytics"
  },
  {
    title: "AI Automations",
    description: "Intelligent AI assistant for automated task management and workflow optimization",
    features: ["Task Automation", "Workflow Integration", "Smart Scheduling"],
    imageUrl: "../images/project-placeholder.jpg",
    link: "https://aiagent.app",
    category: "Automation"
  }
]

function ToolsPage(): JSX.Element {
  return (
    <Layout>
      <div className="space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">AI Tools</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the cutting-edge AI tools I use to enhance productivity and deliver innovative solutions
            for businesses. Each tool is carefully selected to provide maximum value and efficiency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card block group"
            >
              <div className="bg-[var(--secondary)] p-2 rounded-t-lg">
                <span className="text-sm text-[var(--accent)]">{tool.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text group-hover:neon-text">
                  {tool.title}
                </h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <svg className="w-4 h-4 text-[var(--accent)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">AI Prompt Generator</h2>
            <p className="text-gray-400">
              Need help crafting the perfect prompt? Use our AI-powered prompt generator to enhance your prompts
              and get better results from AI tools.
            </p>
          </div>
          <PromptGenerator />
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block glass-card hover:neon-text transition-all"
          >
            Want to learn more? →
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ToolsPage

export function Head(): JSX.Element {
  return <Seo title="AI Tools" description="Explore the AI tools I use to enhance productivity and deliver innovative solutions" />
} 