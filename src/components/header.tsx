import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string
}

function Header({ siteTitle }: HeaderProps): JSX.Element {
  return (
    <header>
      <div className="container mx-auto px-4 py-6">
        <h1 className="m-0">
          <nav className="flex items-center justify-between">
            <Link to="/" className="gradient-text text-xl font-bold no-underline hover:neon-text transition-all">
              {siteTitle}
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-gray-200 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </h1>
      </div>
    </header>
  )
}

export default Header 