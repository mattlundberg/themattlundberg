import * as React from "react"
import { Link } from "gatsby"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
  actionText?: string
  actionLink?: string
}

export function ThankYouModal({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Your submission has been received. We'll be in touch soon.",
  actionText = "Return Home",
  actionLink = "/"
}: ThankYouModalProps): JSX.Element | null {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="glass-card max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-[var(--accent)] bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-400">{message}</p>
          
          <div className="pt-4">
            <Link
              to={actionLink}
              className="btn inline-block"
              onClick={onClose}
            >
              {actionText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouModal 