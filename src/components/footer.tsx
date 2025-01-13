import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

interface FooterLink {
  name: string
  url: string
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

const navigationLinks: FooterLink[] = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Contact", url: "/contact" }
]

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/mattlundberg",
    icon: "💻"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/matthew-lundberg-62304237/",
    icon: "👔"
  }
]

function Footer(): JSX.Element {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <footer className="mt-auto">
      <div className="glass">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="text-xl font-bold gradient-text">
                {site.siteMetadata.title}
              </Link>
              <p className="text-gray-400 text-sm">
                {site.siteMetadata.description}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Navigation</h3>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    className="block text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect</h3>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    <span>{link.icon}</span>
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} {site.siteMetadata.title}. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 