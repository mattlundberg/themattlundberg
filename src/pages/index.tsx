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
          <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
          <p className="text-xl text-gray-600 mb-8">Full Stack Web Developer</p>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="glass-card">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-gray-200">Frontend</h3>
                <p className="text-gray-400">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-gray-200">Backend</h3>
                <p className="text-gray-400">Node.js, Express, PostgreSQL</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-gray-200">Tools</h3>
                <p className="text-gray-400">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project cards would go here */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Description of your amazing project goes here.</p>
                <Link to="/portfolio" className="text-blue-600 hover:underline">Learn More →</Link>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">Project 2</h3>
                <p className="text-gray-600 mb-4">Description of your amazing project goes here.</p>
                <Link to="/portfolio" className="text-blue-600 hover:underline">Learn More →</Link>
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
