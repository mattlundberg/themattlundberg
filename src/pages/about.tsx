import * as React from "react"
import { Layout } from "../components"
import { Seo } from "../components"
import { FaCode, FaCogs, FaUserTie } from 'react-icons/fa'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center fade-in">About Me</h1>
          <div className="mb-8 text-center">
            <StaticImage
              src="../images/Matt_prof_pic.jpg"
              alt="Matthew Lundberg"
              className="rounded-lg w-64 h-64 mx-auto"
              placeholder="blurred"
            />
          </div>
          <p className="text-xl text-gray-600 mb-8 text-center fade-in">
            Passionate about delivering high-quality solutions and driving customer value. Proven track record in enterprise-level software development, API integration, and mentoring teams. Experienced in C#, React, and AWS technologies, with a focus on scalable architectures and delightful customer experiences. I am also passionate about learning AI and ML and finding new AI tools to help small and medium businesses grow and increase their productivity.
          </p>

          {/* Core Competencies */}
          <div className="glass-card mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <ul className="list-disc pl-5 text-gray-400">
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Agile Development Methodologies</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Event-Driven Architectures & REST API Design</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Software Testing & Validation</li>
              <li className="flex items-center gap-2"><FaCode className="text-green-500" /> Full-Stack Development: JavaScript (React, Angular) & C#/.NET</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Code & Quality Standards</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Object-Oriented Programming (OOP)</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Software Development Standards</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Software Documentation Control</li>
              <li className="flex items-center gap-2"><FaUserTie className="text-purple-500" /> Customer Relationship Management (CRM)</li>
              <li className="flex items-center gap-2"><FaCogs className="text-blue-500" /> Debugging, Performance Optimization & Monitoring</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="glass-card mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-2">Impartner</h3>
              <p className="text-gray-600 mb-4">Software Developer, 2020 – Present</p>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Architected and enhanced enterprise software systems, focusing on performance and feature development.</li>
                <li>Created, tested, and deployed automated workflows to align with CI/CD principles.</li>
                <li>Collaborated with cross-functional teams, including designers and product managers, to deliver exceptional customer experiences.</li>
                <li>Designed and implemented back-end APIs to streamline integration and scalability.</li>
                <li>Mentored junior developers in coding standards, testing practices, and design principles.</li>
                <li>Contributed to robust testing suites, reducing regression and improving code quality.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-2">Customer Support Developer, 2018 – 2020</h3>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Led team projects, providing mentorship and ensuring adherence to best practices in software maintenance.</li>
                <li>Collaborated with customers to refine portal interfaces and enhance user satisfaction.</li>
                <li>Spearheaded debugging initiatives, resolving post-release software faults efficiently.</li>
                <li>Integrated new technologies to modernize and enhance operational performance.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-2">Quomation</h3>
              <p className="text-gray-600 mb-4">Software Developer, 2014 – 2017</p>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Innovated rating technologies for insurance agencies, incorporating customer-driven enhancements.</li>
                <li>Maintained and modernized legacy systems to improve stability and performance.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-2">Su Casa</h3>
              <p className="text-gray-600 mb-4">General Manager, 2011 – 2014</p>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Oversaw daily operations of restaurant, including ordering supplies and food. Hired, fired, and scheduled staff.</li>
                <li>Maintained building and all appliances in building as well as financial records to report to owner.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="glass-card mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Programming Languages: C#, Java, Python, .NET, Visual Basic</li>
              <li>Frameworks & Tools: React, Angular</li>
              <li>Testing & Observability: Unit Testing, Monitoring, Logging</li>
            </ul>
          </div>

          {/* Superpowers */}
          <div className="glass-card fade-in">
            <h2 className="text-3xl font-bold mb-4">Superpowers</h2>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Ownership: Proactively drives initiatives from conception to delivery.</li>
              <li>Customer Obsession: Crafts solutions that delight end-users and exceed expectations.</li>
              <li>Always Learning: Stays ahead of industry trends and technologies.</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About" />
