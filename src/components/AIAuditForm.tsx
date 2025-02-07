import * as React from "react"
import { useState } from "react"
import ThankYouModal from "./ThankYouModal"

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
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    
    // Only proceed with submission if we're on the review step
    if (currentStep !== steps.length - 1) {
      nextStep()
      return
    }

    try {
      // Create FormData from the event target
      const myForm = e.target as HTMLFormElement
      const formData = new FormData(myForm)

      // Add all form fields to the FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(', '))
        } else if (typeof value === 'boolean') {
          formData.append(key, value ? 'yes' : 'no')
        } else {
          formData.append(key, value.toString())
        }
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      })

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status} ${response.statusText}`)
      }

      // Reset form and show success modal
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
      setIsModalOpen(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const steps = [
    <div key="step1" className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Information</h2>
      <label className="block">
        <span className="text-gray-300">Full Name</span>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="text-gray-300">Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="text-gray-300">Company Name</span>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mr-2  text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
        />
        <span className="text-gray-300">I agree to be contacted regarding AI solutions.</span>
      </label>
    </div>,
    <div key="step2" className="space-y-4">
      <h2 className="text-xl font-semibold">Business Information</h2>
      <label className="block">
        <span className="text-gray-300">Industry</span>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
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
        <span className="text-gray-300">Primary Products/Services</span>
        <input
          type="text"
          name="products"
          value={formData.products}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="text-gray-300">Number of Employees</span>
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
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
        <span className="text-gray-300">Current AI Usage</span>
        <select
          name="aiUsage"
          value={formData.aiUsage}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      {formData.aiUsage === "yes" && (
        <label className="block">
          <span className="text-gray-300">Existing AI Tools</span>
          <input
            type="text"
            name="existingAITools"
            value={formData.existingAITools}
            onChange={handleChange}
            className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
          />
        </label>
      )}
    </div>,
    <div key="step3" className="space-y-4">
      <h2 className="text-xl font-semibold">Business Challenges & AI Opportunities</h2>
      <label className="block">
        <span className="text-gray-300">Select Multiple Pain Points</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="cost"
              checked={formData.painPoints.includes("cost")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">High Costs</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="efficiency"
              checked={formData.painPoints.includes("efficiency")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Low Efficiency</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="painPoints"
              value="scalability"
              checked={formData.painPoints.includes("scalability")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Scalability Issues</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">What Business Processes Feel Inefficient?</span>
        <textarea
          name="inefficientProcesses"
          value={formData.inefficientProcesses}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
    </div>,
    <div key="step4" className="space-y-4">
      <h2 className="text-xl font-semibold">Customer Engagement & AI Potential</h2>
      <label className="block">
        <span className="text-gray-300">Current Customer Engagement Methods</span>
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
            <span className="ml-2">Email</span>
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
            <span className="ml-2">Social Media</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="engagementMethods"
              value="phone"
              checked={formData.engagementMethods.includes("phone")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Phone</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">Chatbot Usage</span>
        <select
          name="chatbotUsage"
          value={formData.chatbotUsage}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-300">Interest in AI-Powered Chatbots</span>
        <select
          name="interestInChatbots"
          value={formData.interestInChatbots}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step5" className="space-y-4">
      <h2 className="text-xl font-semibold">Sales & Marketing AI Use Cases</h2>
      <label className="block">
        <span className="text-gray-300">Lead Generation Methods</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="onlineAds"
              checked={formData.leadGenerationMethods.includes("onlineAds")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Online Ads</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="referrals"
              checked={formData.leadGenerationMethods.includes("referrals")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Referrals</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="leadGenerationMethods"
              value="events"
              checked={formData.leadGenerationMethods.includes("events")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Events</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">Sales/Marketing Challenges</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="leadQuality"
              checked={formData.salesChallenges.includes("leadQuality")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Lead Quality</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="conversionRates"
              checked={formData.salesChallenges.includes("conversionRates")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Conversion Rates</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="salesChallenges"
              value="customerRetention"
              checked={formData.salesChallenges.includes("customerRetention")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Customer Retention</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">Interest in AI-Driven Solutions</span>
        <select
          name="interestInAIDrivenSolutions"
          value={formData.interestInAIDrivenSolutions}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step6" className="space-y-4">
      <h2 className="text-xl font-semibold">Operations & Workflow Automation</h2>
      <label className="block">
        <span className="text-gray-300">Current Automation Tools</span>
        <select
          name="automationTools"
          value={formData.automationTools}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-300">Most Time-Consuming Tasks</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="dataEntry"
              checked={formData.timeConsumingTasks.includes("dataEntry")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Data Entry</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="reporting"
              checked={formData.timeConsumingTasks.includes("reporting")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Reporting</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="timeConsumingTasks"
              value="customerSupport"
              checked={formData.timeConsumingTasks.includes("customerSupport")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Customer Support</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">Interest in AI Automation</span>
        <select
          name="interestInAIAutomation"
          value={formData.interestInAIAutomation}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step7" className="space-y-4">
      <h2 className="text-xl font-semibold">Data & Analytics</h2>
      <label className="block">
        <span className="text-gray-300">Data Collection/Analysis Methods</span>
        <div className="mt-1 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="manual"
              checked={formData.dataMethods.includes("manual")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Manual</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="automated"
              checked={formData.dataMethods.includes("automated")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Automated</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="dataMethods"
              value="outsourced"
              checked={formData.dataMethods.includes("outsourced")}
              onChange={handleChange}
              className=" text-[var(--accent)] focus:ring-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--glass-color)]"
            />
            <span className="ml-2">Outsourced</span>
          </label>
        </div>
      </label>
      <label className="block">
        <span className="text-gray-300">Interest in AI-Powered Data Insights</span>
        <select
          name="interestInDataInsights"
          value={formData.interestInDataInsights}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="step8" className="space-y-4">
      <h2 className="text-xl font-semibold">AI Adoption Readiness</h2>
      <label className="block">
        <span className="text-gray-300">Familiarity with AI</span>
        <select
          name="aiFamiliarity"
          value={formData.aiFamiliarity}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
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
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
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
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        />
      </label>
      <label className="block">
        <span className="text-gray-300">Request for AI Consultation</span>
        <select
          name="requestForAIConsultation"
          value={formData.requestForAIConsultation}
          onChange={handleChange}
          className="w-full p-3 rounded-lg text-gray-100 border border-[var(--border-color)] bg-[var(--glass-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </div>,
    <div key="reviewStep" className="space-y-6">
      <h2 className="text-xl font-semibold">Review Your Information</h2>
      
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-lg font-medium text-gray-200">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)]">
            <div>
              <p className="text-gray-400">Full Name</p>
              <p className="text-gray-100">{formData.fullName || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Email Address</p>
              <p className="text-gray-100">{formData.email || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Company Name</p>
              <p className="text-gray-100">{formData.companyName || "Not provided"}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium text-gray-200">Business Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)]">
            <div>
              <p className="text-gray-400">Industry</p>
              <p className="text-gray-100">{formData.industry || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Products/Services</p>
              <p className="text-gray-100">{formData.products || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Number of Employees</p>
              <p className="text-gray-100">{formData.employees || "Not provided"}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium text-gray-200">AI Usage & Tools</h3>
          <div className="grid grid-cols-1 gap-4 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)]">
            <div>
              <p className="text-gray-400">Current AI Usage</p>
              <p className="text-gray-100">{formData.aiUsage || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Existing AI Tools</p>
              <p className="text-gray-100">{formData.existingAITools || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Pain Points</p>
              <p className="text-gray-100">{formData.painPoints.length ? formData.painPoints.join(", ") : "None selected"}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium text-gray-200">Future AI Interests</h3>
          <div className="grid grid-cols-1 gap-4 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)]">
            <div>
              <p className="text-gray-400">Interest in AI-Driven Website</p>
              <p className="text-gray-100">{formData.interestInAIDrivenWebsite || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">Preferred AI Focus</p>
              <p className="text-gray-100">{formData.preferredAIFocus || "Not provided"}</p>
            </div>
            <div>
              <p className="text-gray-400">AI Consultation Request</p>
              <p className="text-gray-100">{formData.requestForAIConsultation || "Not provided"}</p>
            </div>
          </div>
        </section>
      </div>

      <p className="text-sm text-gray-400">Please review your information above before submitting. You can use the Previous button to make any changes.</p>
    </div>,
  ]

  return (
    <div>
      {/* Actual form */}
      <form 
        name="ai-audit" 
        method="POST" 
        onSubmit={handleSubmit} 
        className="space-y-8"
      >
        <input type="hidden" name="form-name" value="ai-audit" />
        <input type="hidden" name="fullName" value={formData.fullName} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="companyName" value={formData.companyName} />
        <input type="hidden" name="consent" value={formData.consent.toString()} />
        <input type="hidden" name="industry" value={formData.industry} />
        <input type="hidden" name="products" value={formData.products} />
        <input type="hidden" name="employees" value={formData.employees} />
        <input type="hidden" name="aiUsage" value={formData.aiUsage} />
        <input type="hidden" name="existingAITools" value={formData.existingAITools} />
        <input type="hidden" name="painPoints" value={formData.painPoints.join(', ')} />
        <input type="hidden" name="inefficientProcesses" value={formData.inefficientProcesses} />
        <input type="hidden" name="engagementMethods" value={formData.engagementMethods.join(', ')} />
        <input type="hidden" name="chatbotUsage" value={formData.chatbotUsage} />
        <input type="hidden" name="interestInChatbots" value={formData.interestInChatbots} />
        <input type="hidden" name="leadGenerationMethods" value={formData.leadGenerationMethods.join(', ')} />
        <input type="hidden" name="salesChallenges" value={formData.salesChallenges.join(', ')} />
        <input type="hidden" name="interestInAIDrivenSolutions" value={formData.interestInAIDrivenSolutions} />
        <input type="hidden" name="automationTools" value={formData.automationTools} />
        <input type="hidden" name="timeConsumingTasks" value={formData.timeConsumingTasks.join(', ')} />
        <input type="hidden" name="interestInAIAutomation" value={formData.interestInAIAutomation} />
        <input type="hidden" name="dataMethods" value={formData.dataMethods.join(', ')} />
        <input type="hidden" name="interestInDataInsights" value={formData.interestInDataInsights} />
        <input type="hidden" name="aiFamiliarity" value={formData.aiFamiliarity} />
        <input type="hidden" name="previousAIConsideration" value={formData.previousAIConsideration} />
        <input type="hidden" name="aiConcerns" value={formData.aiConcerns.join(', ')} />
        <input type="hidden" name="interestInAIDrivenWebsite" value={formData.interestInAIDrivenWebsite} />
        <input type="hidden" name="preferredAIFocus" value={formData.preferredAIFocus} />
        <input type="hidden" name="requestForAIConsultation" value={formData.requestForAIConsultation} />
        {steps[currentStep]}
        
        <div className="flex justify-between">
          <button type="button" onClick={prevStep} disabled={currentStep === 0} className="py-2 px-4 bg-gray-600 text-white rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Previous
          </button>
            <button type="button" hidden={currentStep === steps.length - 1} onClick={nextStep} className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Next
            </button>
            <button 
              type="submit"
              hidden={currentStep !== steps.length - 1}
              disabled={!formData.consent || !formData.fullName || !formData.email}
              className="py-2 px-4 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Form
            </button>
        </div>
      </form>

      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank You for Your Interest!"
        message="We've received your AI audit request and will review it shortly. We'll be in touch with next steps soon."
        actionText="Explore AI Tools"
        actionLink="/tools"
      />
    </div>
  )
}

export default AIAuditForm 