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
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-[var(--text-color)]">Hi, I'm Matthew Lundberg</h1>
          <p className="text-xl text-[var(--text-subtle)] mb-8">Software Engineer</p>
          <div className="mb-8">
            <StaticImage
              src="../images/profile-placeholder.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto"
              placeholder="blurred"
            />
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="btn bg-[var(--accent)] text-[var(--secondary)]"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-[var(--accent)] text-[var(--accent)]"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="glass-card">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-color)]">About Me</h2>
            <p className="text-[var(--text-subtle)] mb-4">
              Passionate about delivering high-quality solutions and driving customer value. Proven track record in enterprise-level software development, API integration, and mentoring teams. Experienced in C#, React, and AWS technologies, with a focus on scalable architectures and delightful customer experiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="glass-card">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-color)]">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-[var(--text-color)]">Core Competencies</h3>
                <p className="text-[var(--text-subtle)]">Agile Development, Event-Driven Architectures, REST API Design</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-[var(--text-color)]">Technical Skills</h3>
                <p className="text-[var(--text-subtle)]">C#, Java, Python, .NET, React, Angular</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-[var(--text-color)]">Tools & Frameworks</h3>
                <p className="text-[var(--text-subtle)]">AWS, Unit Testing, Monitoring, Logging</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2>Professional Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card">
                <h3>Impartner</h3>
                <p>Software Developer, 2020 – Present</p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)]">
                  <li>Architected and enhanced enterprise software systems, focusing on performance and feature development.</li>
                  <li>Created, tested, and deployed automated workflows to align with CI/CD principles.</li>
                  <li>Collaborated with cross-functional teams, including designers and product managers, to deliver exceptional customer experiences.</li>
                  <li>Designed and implemented back-end APIs to streamline integration and scalability.</li>
                  <li>Mentored junior developers in coding standards, testing practices, and design principles.</li>
                  <li>Contributed to robust testing suites, reducing regression and improving code quality.</li>
                </ul>
              </div>
              <div className="glass-card">
                <h3>Quomation</h3>
                <p>Software Developer, 2014 – 2017</p>
                <ul className="list-disc pl-5 text-[var(--text-subtle)]">
                  <li>Innovated rating technologies for insurance agencies, incorporating customer-driven enhancements.</li>
                  <li>Maintained and modernized legacy systems to improve stability and performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
