import * as React from "react"
import { useState } from "react"

interface EnhancedPrompt {
  original: string
  enhanced: string
  variations: string[]
}

export function PromptGenerator(): JSX.Element {
  const [userPrompt, setUserPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<EnhancedPrompt | null>(null)
  const [error, setError] = useState("")

  const enhancePrompt = async () => {
    if (!userPrompt.trim()) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/enhance-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userPrompt }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to enhance prompt')
      }

      const data = await response.json()
      console.log('Received data:', data)  // Debug log
      setResult(data)
    } catch (err) {
      console.error('Error details:', err)  // Enhanced error logging
      setError(err instanceof Error ? err.message : "Failed to enhance prompt. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="glass-card space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold gradient-text">Prompt Generator</h2>
        <p className="text-gray-400">
          Enter your prompt below and I'll help you enhance it for better results.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-gray-300 mb-2">
            Your Prompt
          </label>
          <textarea
            id="prompt"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows={4}
            className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
          />
        </div>

        <button
          onClick={enhancePrompt}
          disabled={isLoading || !userPrompt.trim()}
          className="w-full btn py-3 rounded-lg"
        >
          {isLoading ? "Enhancing..." : "Enhance Prompt"}
        </button>

        {error && (
          <p className="text-red-400 text-center">{error}</p>
        )}

        {result && (
          <div className="space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[var(--accent)]">Enhanced Prompt</h3>
              <div className="p-4 rounded-lg bg-[var(--glass-color)] border border-[var(--border-color)]">
                <p className="text-gray-100">{result.enhanced}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[var(--accent)]">Alternative Versions</h3>
              <div className="space-y-2">
                {result.variations.map((variation, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[var(--glass-color)] border border-[var(--border-color)]"
                  >
                    <p className="text-gray-100">{variation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setUserPrompt("")
                  setResult(null)
                  // Clear any error state as well
                  setError("")
                }}
                className="text-sm text-gray-400 hover:text-[var(--accent)]"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PromptGenerator