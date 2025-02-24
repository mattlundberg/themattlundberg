import * as React from "react"
import { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

function SchedulePage(): JSX.Element {
  useEffect(() => {
    if ((window as any).Calendly) {
      ;(window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/themattlundberg/30min',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      })
    }
  }, [])

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Schedule a Consultation</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a time that works best for you. Let's discuss how AI can transform your business.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Meeting Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-card">
              <h2 className="text-xl font-semibold mb-4 gradient-text">Meeting Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Duration</h3>
                    <p className="text-gray-400">30 minutes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Meeting Type</h3>
                    <p className="text-gray-400">Video Call</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div>
                    <h3 className="font-medium">What to Expect</h3>
                    <ul className="text-gray-400 list-disc ml-4 mt-1">
                      <li>Discussion of your needs</li>
                      <li>AI solution recommendations</li>
                      <li>Next steps planning</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card">
              <h2 className="text-xl font-semibold mb-4 gradient-text">After Booking</h2>
              <p className="text-gray-400">
                You'll receive a confirmation email with the meeting link and any additional information needed to prepare for our discussion.
              </p>
            </div>
          </div>

          {/* Right Column - Calendly Widget */}
          <div className="md:col-span-2" style={{ minHeight: '700px' }}>
            <div 
              id="calendly-inline-widget"
              className="calendly-inline-widget glass-card overflow-hidden" 
              style={{
                minWidth: '320px',
                height: '700px',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--glass-color)',
                backdropFilter: 'blur(12px)',
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SchedulePage

export function Head(): JSX.Element {
  return <Seo 
    title="Schedule a Consultation | Matt Lundberg" 
    description="Book a consultation to discuss AI integration solutions for your business" 
  />
} 