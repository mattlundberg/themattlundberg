import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components"
import { Seo } from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">
            Turn your ideas into
            <br />
            AI-powered solutions
          </h1>
          <p className="text-xl text-[var(--text-subtle)] mb-8 max-w-2xl mx-auto">
            Full-stack engineer specializing in modern web technologies and AI integration
            <br />
            <em>- creating elegant, scalable solutions!</em>
          </p>
          <Link 
            to="/contact" 
            className="btn text-lg px-8 py-4"
          >
            Let's Work Together
          </Link>
        </section>

        {/* Introduction Section */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <div className="glass-card text-center">
            <div className="mb-8">
              <StaticImage
                src="../images/Matt_Prof_Pic.jpg"
                alt="Matthew Lundberg"
                className="rounded-full w-32 h-32 mx-auto mb-6"
                placeholder="blurred"
              />
              <h2 className="text-3xl font-bold mb-4">Hey there! I'm Matt!</h2>
            </div>
            <p className="text-lg mb-6">
              I'm an AI integration specialist, with a 10 year background in Software Engineering, passionate about helping businesses harness the power of artificial intelligence. 
              Whether you're looking to implement chatbots, automate workflows, or enhance your applications with AI capabilities, 
              I'd love to help bring your next project to life.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="space-y-8">
            {/* First Service: Text Left, Image Right */}
            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AI Chatbots</h3>
                <p className="text-[var(--text-subtle)]">
                  Implementing intelligent chatbot solutions that provide 24/7 customer support and engagement.
                  Enhance your business with automated, natural conversations that scale effortlessly.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>24/7 automated support</li>
                  <li>Natural language processing</li>
                  <li>Custom knowledge integration</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
              <div className="md:order-last">
                <StaticImage
                  src="../images/chatbot.svg"
                  alt="AI Integration Illustration"
                  className="w-full h-auto rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:filter hover:drop-shadow-[0_0_8px_var(--shadow-color)] hover:fill-[var(--accent)] hover:stroke-[var(--accent)]"
                  placeholder="blurred"
                  style={{
                    fill: "blue",
                    stroke: "blue",
                  }}
                />
              </div>
            </div>

            {/* Second Service: Image Left, Text Right */}
            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <StaticImage
                  src="../images/web-dev.svg"
                  alt="Web Development Illustration"
                  className="w-full h-auto rounded-lg"
                  placeholder="blurred"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Cassidy.ai Integration</h3>
                <p className="text-[var(--text-subtle)]">
                  Enhance your development workflow with Cassidy.ai's intelligent code assistance.
                  Get real-time suggestions, code reviews, and automated refactoring to boost productivity.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>AI-powered code completion</li>
                  <li>Automated code reviews</li>
                  <li>Smart refactoring suggestions</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
            </div>

            {/* Third Service: Text Left, Image Right */}
            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AI Automation Solutions</h3>
                <p className="text-[var(--text-subtle)]">
                  Transform your workflow with intelligent automation solutions that reduce manual tasks
                  and streamline business processes. Let AI handle the repetitive work while your team
                  focuses on strategic initiatives.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>Workflow automation</li>
                  <li>Process optimization</li>
                  <li>Smart task management</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
              <div className="md:order-last">
                <StaticImage
                  src="../images/architecture.svg"
                  alt="Software Architecture Illustration"
                  className="w-full h-auto rounded-lg"
                  placeholder="blurred"
                />
              </div>
            </div>

            {/* Fourth Service: Image Left, Text Right */}
            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <StaticImage
                  src="../images/consulting.svg"
                  alt="Technical Consulting Illustration"
                  className="w-full h-auto rounded-lg"
                  placeholder="blurred"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AI Agents Development</h3>
                <p className="text-[var(--text-subtle)]">
                  Build powerful AI agents that automate complex tasks and workflows.
                  From simple automation to advanced reasoning systems, we help create
                  intelligent agents that drive business value.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>Custom AI agent development</li>
                  <li>Multi-agent systems</li>
                  <li>Agent optimization & scaling</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Launch your next
            <br />
            software project
          </h2>
          <p className="text-xl text-[var(--text-subtle)] mb-8">
            Modern solutions for modern challenges
          </p>
          <Link 
            to="/contact" 
            className="btn text-lg px-8 py-4"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
