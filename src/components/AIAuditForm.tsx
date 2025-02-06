import * as React from "react"
import { useState } from "react"

export function AIAuditForm(): JSX.Element {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    consent: false,
    industry: "",
    products: "",
    employees: "",
    aiUsage: "",
    existingAITools: "",
    painPoints: [],
    inefficientProcesses: "",
    engagementMethods: [],
    chatbotUsage: "",
    interestInChatbots: "",
    leadGenerationMethods: [],
    salesChallenges: [],
    interestInAIDrivenSolutions: "",
    automationTools: "",
    timeConsumingTasks: [],
    interestInAIAutomation: "",
    dataMethods: [],
    interestInDataInsights: "",
    aiFamiliarity: "",
    previousAIConsideration: "",
    aiConcerns: [],
    interestInAIDrivenWebsite: "",
    preferredAIFocus: "",
    requestForAIConsultation: "",
  })

  const [currentStep, setCurrentStep] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const isChecked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prevState => {
      if (type === 'checkbox' && Array.isArray(prevState[name])) {
        const currentArray = prevState[name] as string[];
        return {
          ...prevState,
          [name]: isChecked
            ? [...currentArray, value]
            : currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prevState,
          [name]: isChecked !== undefined ? isChecked : value
        };
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create FormData object for Netlify
    const formDataObj = new FormData()
    formDataObj.append('form-name', 'ai-audit')
    
    // Append all form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Handle array values by joining with commas
        formDataObj.append(key, value.join(', '))
      } else {
        // Handle regular string/boolean values
        formDataObj.append(key, value.toString())
      }
    })

    try {
      // Submit to Netlify forms endpoint
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      })

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        consent: false,
        industry: "",
        products: "",
        employees: "",
        aiUsage: "",
        existingAITools: "",
        painPoints: [],
        inefficientProcesses: "",
        engagementMethods: [],
        chatbotUsage: "",
        interestInChatbots: "",
        leadGenerationMethods: [],
        salesChallenges: [],
        interestInAIDrivenSolutions: "",
        automationTools: "",
        timeConsumingTasks: [],
        interestInAIAutomation: "",
        dataMethods: [],
        interestInDataInsights: "",
        aiFamiliarity: "",
        previousAIConsideration: "",
        aiConcerns: [],
        interestInAIDrivenWebsite: "",
        preferredAIFocus: "",
        requestForAIConsultation: "",
      })
      setCurrentStep(0)
      
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const steps = [
    <div key="step1" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Contact Information</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Full Name</span>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Company Name</span>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mr-2 text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
        />
        <span className="dark:text-gray-300 text-gray-700">I agree to be contacted regarding AI solutions.</span>
      </label>
    </div>,
    <div key="step2" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Business Information</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Industry</span>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select Industry</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="retail">Retail</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Primary Products/Services</span>
        <input
          type="text"
          name="products"
          value={formData.products}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Number of Employees</span>
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select Number</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="500+">500+</option>
        </select>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Current AI Usage</span>
        <select
          name="aiUsage"
          value={formData.aiUsage}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      {formData.aiUsage === "yes" && (
        <label className="block">
          <span className="dark:text-gray-300 text-gray-700">Existing AI Tools</span>
          <input
            type="text"
            name="existingAITools"
            value={formData.existingAITools}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
          />
        </label>
      )}
    </div>,
    <div key="step3" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Business Challenges & AI Opportunities</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Select Multiple Pain Points</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="cost"
              checked={formData.painPoints.includes("cost")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">High Costs</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="efficiency"
              checked={formData.painPoints.includes("efficiency")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Low Efficiency</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="scalability"
              checked={formData.painPoints.includes("scalability")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Scalability Issues</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">What Business Processes Feel Inefficient?</span>
        <textarea
          name="inefficientProcesses"
          value={formData.inefficientProcesses}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
    </div>,
    <div key="step4" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Customer Engagement & AI Potential</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Current Customer Engagement Methods</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="engagementMethods"
              value="email"
              checked={formData.engagementMethods.includes("email")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Email</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="engagementMethods"
              value="socialMedia"
              checked={formData.engagementMethods.includes("socialMedia")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Social Media</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="engagementMethods"
              value="phone"
              checked={formData.engagementMethods.includes("phone")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Phone</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Chatbot Usage</span>
        <select
          name="chatbotUsage"
          value={formData.chatbotUsage}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Interest in AI-Powered Chatbots</span>
        <select
          name="interestInChatbots"
          value={formData.interestInChatbots}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step5" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Sales & Marketing AI Use Cases</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Lead Generation Methods</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="onlineAds"
              checked={formData.leadGenerationMethods.includes("onlineAds")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Online Ads</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="referrals"
              checked={formData.leadGenerationMethods.includes("referrals")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Referrals</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="events"
              checked={formData.leadGenerationMethods.includes("events")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Events</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Sales/Marketing Challenges</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="leadQuality"
              checked={formData.salesChallenges.includes("leadQuality")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Lead Quality</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="conversionRates"
              checked={formData.salesChallenges.includes("conversionRates")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Conversion Rates</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="customerRetention"
              checked={formData.salesChallenges.includes("customerRetention")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Customer Retention</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Interest in AI-Driven Solutions</span>
        <select
          name="interestInAIDrivenSolutions"
          value={formData.interestInAIDrivenSolutions}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step6" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Operations & Workflow Automation</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Current Automation Tools</span>
        <select
          name="automationTools"
          value={formData.automationTools}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Most Time-Consuming Tasks</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="dataEntry"
              checked={formData.timeConsumingTasks.includes("dataEntry")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Data Entry</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="reporting"
              checked={formData.timeConsumingTasks.includes("reporting")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Reporting</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="customerSupport"
              checked={formData.timeConsumingTasks.includes("customerSupport")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Customer Support</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Interest in AI Automation</span>
        <select
          name="interestInAIAutomation"
          value={formData.interestInAIAutomation}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step7" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Data & Analytics</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Data Collection/Analysis Methods</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="manual"
              checked={formData.dataMethods.includes("manual")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Manual</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="automated"
              checked={formData.dataMethods.includes("automated")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Automated</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="outsourced"
              checked={formData.dataMethods.includes("outsourced")}
              onChange={handleChange}
              className="text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2 dark:text-gray-300 text-gray-700">Outsourced</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Interest in AI-Powered Data Insights</span>
        <select
          name="interestInDataInsights"
          value={formData.interestInDataInsights}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step8" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">AI Adoption Readiness</h2>
      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Familiarity with AI</span>
        <select
          name="aiFamiliarity"
          value={formData.aiFamiliarity}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-300">Previous AI Consideration</span>
        <select
          name="previousAIConsideration"
          value={formData.previousAIConsideration}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-300">Concerns about AI Adoption</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="aiConcerns"
              value="cost"
              checked={formData.aiConcerns.includes("cost")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Cost</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="aiConcerns"
              value="complexity"
              checked={formData.aiConcerns.includes("complexity")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Complexity</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="aiConcerns"
              value="security"
              checked={formData.aiConcerns.includes("security")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Security</span>
          </label>
        </div>
      </label>
    </div>,
    <div key="step9" className="space-y-4">
      <h2 className="text-xl font-semibold">Custom AI Solutions & Future Needs</h2>
      <label className="block">
        <span className="text-gray-300">Interest in AI-Driven Website Development</span>
        <select
          name="interestInAIDrivenWebsite"
          value={formData.interestInAIDrivenWebsite}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>

        </select>
      </label>
      <label className="block">
        <span className="text-gray-300">Preferred AI Automation Focus</span>
        <textarea
          name="preferredAIFocus"
          value={formData.preferredAIFocus}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>

      <label className="block">
        <span className="dark:text-gray-300 text-gray-700">Request for AI Consultation</span>
        <select
          name="requestForAIConsultation"
          value={formData.requestForAIConsultation}
          onChange={handleChange}
          className="w-full p-3 rounded-lg dark:text-gray-100 text-gray-900 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>

          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    // Review Step
    <div key="review" className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white text-gray-900">Review Your Information</h2>
      <div className="space-y-4 p-4 rounded-lg bg-[var(--glass-color)] border border-[var(--border-color)]">
        {Object.entries(formData)
          .filter(([key, value]) => {
            // Only include entries with non-empty values and exclude consent field
            return value && 
                   key !== 'consent' && 
                   (Array.isArray(value) ? value.length > 0 : true) &&
                   (typeof value === 'string' ? value.trim() !== '' : true);
          })
          .map(([key, value]) => {
            // Format the key for display
            const formattedKey = key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
              
            return (
              <div key={key} className="flex flex-col sm:flex-row sm:justify-between border-b border-[var(--border-color)] pb-2">
                <span className="dark:text-gray-300 text-gray-700 font-medium">{formattedKey}:</span>
                <span className="dark:text-gray-100 text-gray-900 mt-1 sm:mt-0 sm:ml-4">  

                  {Array.isArray(value)
                    ? value.join(', ')
                    : typeof value === 'boolean'
                      ? value ? 'Yes' : 'No'
                      : value}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  ]

  return (
    <form name="ai-audit" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-8">
      <input type="hidden" name="form-name" value="ai-audit" />

      {steps[currentStep]}

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} disabled={currentStep === 0} className="py-2 px-4 bg-gray-600 dark:bg-gray-700 text-white rounded-md shadow-sm hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button type="button" onClick={nextStep} className="py-2 px-4 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Next
          </button>
        ) : (
          <button 
            type="submit"
            disabled={!formData.consent || !formData.fullName || !formData.email || currentStep !== steps.length - 1}
            className="py-2 px-4 bg-green-600 dark:bg-green-700 text-white rounded-md shadow-sm hover:bg-green-700 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit

          </button>
        )}
      </div>
    </form>
  )
}

export default AIAuditForm 