import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"
import { Seo } from "../components"

const UsingDSG = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16">
        <div className="glass-card max-w-4xl mx-auto px-6">
          <h1 className="text-center mb-8">Software Solutions</h1>
          <div className="space-y-8">
            <section>
              <h2 className="mb-4">Custom Development</h2>
              <p className="text-[var(--text-subtle)] mb-4">
                Specialized in creating tailored software solutions that help businesses grow and increase productivity. From web applications to enterprise systems, I deliver scalable and maintainable code.
              </p>
            </section>

            <section>
              <h2 className="mb-4">AI Integration</h2>
              <p className="text-[var(--text-subtle)] mb-4">
                Leveraging the latest AI technologies to enhance business operations and create innovative solutions. Focused on practical applications that deliver real value to small and medium-sized businesses.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Technical Expertise</h2>
              <ul className="list-disc pl-5 text-[var(--text-subtle)] space-y-2">
                <li>Full-stack development with React, TypeScript, and .NET</li>
                <li>Cloud architecture and AWS services</li>
                <li>API design and integration</li>
                <li>AI and ML implementation</li>
              </ul>
            </section>

            <div className="flex justify-center mt-8">
              <Link to="/contact" className="btn bg-[var(--accent)] text-[var(--secondary)]">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UsingDSG

export const Head = () => <Seo title="Software Solutions | Matt Lundberg" /> 