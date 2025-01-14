import * as React from "react"
import { useState, useRef, useEffect } from "react"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! I'm Matt's AI assistant. I can help you learn more about his work, experience, and services. What would you like to know?"
}

const STORAGE_KEY = 'chatbot_state'

interface ChatState {
  messages: Message[]
  isOpen: boolean
  hasShownWelcome: boolean
}

export function Chatbot() {
  // Initialize state from localStorage or default values
  const [state, setState] = useState<ChatState>(() => {
    if (typeof window === 'undefined') return { messages: [], isOpen: false, hasShownWelcome: false }
    
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : { messages: [], isOpen: false, hasShownWelcome: false }
  })

  const { messages, isOpen, hasShownWelcome } = state
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Persist state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [state])

  // Show welcome message when chat is opened for the first time
  useEffect(() => {
    if (isOpen && !hasShownWelcome && messages.length === 0) {
      const timer = setTimeout(() => {
        setState(prev => ({
          ...prev,
          messages: [WELCOME_MESSAGE],
          hasShownWelcome: true
        }))
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, hasShownWelcome, messages.length])

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Toggle chat open/closed
  const toggleChat = () => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }))
  }

  // Reset chat
  const resetChat = () => {
    setState({ messages: [], isOpen: false, hasShownWelcome: false })
  }

  // Send message to ChatGPT API
  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      role: 'user',
      content: inputMessage
    }

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }))
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, {
          role: 'assistant',
          content: data.message
        }]
      }))
    } catch (error) {
      console.error('Error:', error)
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.'
        }]
      }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="p-4 rounded-full bg-[var(--accent)] text-white shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle chat"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          )}
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[32rem] glass-card overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[var(--border-color)] bg-[var(--glass-color)] flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chat Assistant</h3>
            <button
              onClick={resetChat}
              className="p-1 rounded-lg hover:bg-[var(--secondary)] transition-colors"
              aria-label="Reset chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-[var(--glass-color)] border border-[var(--border-color)]'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-[var(--glass-color)] border border-[var(--border-color)]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[var(--border-color)] bg-[var(--glass-color)]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg bg-transparent border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="p-2 rounded-lg bg-[var(--accent)] text-white disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 