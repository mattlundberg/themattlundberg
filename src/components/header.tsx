import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string
}

function Header({ siteTitle }: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="gradient-text text-xl font-bold no-underline hover:neon-text transition-all">
            {siteTitle}
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[var(--color-secondary)] rounded-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link>
            <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-[var(--color-primary)] bg-opacity-95 backdrop-blur-lg z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
              <Link to="/" className="text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link to="/contact" className="text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 