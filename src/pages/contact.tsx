import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "💻"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "👔"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "🐦"
  }
]

function ContactPage(): JSX.Element {
  const [formStatus, setFormStatus] = React.useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("Sending...")
    // Add your form submission logic here
    setFormStatus("Message sent! I'll get back to you soon.")
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Get in Touch</h1>
          <p className="text-gray-400">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="glass-card space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full glass bg-transparent p-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full glass bg-transparent p-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full glass bg-transparent p-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full glass py-3 rounded-lg text-gray-100 hover:neon-text transition-all"
            >
              Send Message
            </button>

            {formStatus && (
              <p className="text-center text-gray-300">{formStatus}</p>
            )}
          </form>

          <div className="space-y-6">
            <div className="glass-card">
              <h2 className="text-xl font-bold gradient-text mb-4">
                Connect with Me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-xl font-bold gradient-text mb-4">
                Location
              </h2>
              <p className="text-gray-300">
                Based in Your City, Country
                <br />
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export function Head(): JSX.Element {
  return <Seo title="Contact" description="Get in touch with me" />
} 