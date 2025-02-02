import * as React from "react"
import Layout from "../components/layout"
import AIAuditForm from "../components/AIAuditForm"

const AuditPage = (): JSX.Element => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8">
        <AIAuditForm />
      </div>
    </Layout>
  )
}

export default AuditPage 