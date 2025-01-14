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
              I'm a full-stack engineer passionate about creating elegant solutions with modern web technologies. 
              Specializing in React, TypeScript, and cloud architecture with a focus on building scalable, 
              user-centric applications.
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
                <h3 className="text-2xl font-bold">AI Integration</h3>
                <p className="text-[var(--text-subtle)]">
                  Implementing AI solutions to enhance business operations and create innovative features.
                  Focused on practical applications that deliver real value.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>AI-powered automation</li>
                  <li>Machine learning integration</li>
                  <li>Smart feature development</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
              <div className="md:order-last">
                <StaticImage
                  src="../images/ai-integration.svg"
                  alt="AI Integration Illustration"
                  className="w-full h-auto rounded-lg"
                  placeholder="blurred"
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
                <h3 className="text-2xl font-bold">Web Development</h3>
                <p className="text-[var(--text-subtle)]">
                  Building modern, responsive web applications using cutting-edge technologies.
                  Focus on performance, scalability, and exceptional user experience.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>React & TypeScript expertise</li>
                  <li>Cloud architecture</li>
                  <li>API development</li>
                </ul>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
            </div>

            {/* Third Service: Text Left, Image Right */}
            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Software Architecture</h3>
                <p className="text-[var(--text-subtle)]">
                  Designing robust, scalable software architectures that stand the test of time.
                  Focus on maintainability and performance.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>System design</li>
                  <li>Performance optimization</li>
                  <li>Best practices implementation</li>
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
                <h3 className="text-2xl font-bold">Technical Consulting</h3>
                <p className="text-[var(--text-subtle)]">
                  Providing expert guidance on technical decisions and implementation strategies.
                  Helping teams adopt best practices and modern technologies.
                </p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)] mb-6">
                  <li>Technical strategy</li>
                  <li>Team mentoring</li>
                  <li>Code quality improvement</li>
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
