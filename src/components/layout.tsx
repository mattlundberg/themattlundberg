import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { Chatbot } from "./chatbot"

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div>
          {children}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Layout 