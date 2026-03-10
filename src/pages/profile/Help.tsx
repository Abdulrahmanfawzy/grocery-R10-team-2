import ContactSupport from "@/components/dashboard/help/ContactSupport"
import FAQSection from "@/components/dashboard/help/FAQSection"
import ReportIssueForm from "@/components/dashboard/help/ReportIssueForm"

const Help = () => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-semibold">
          Help & Support
        </h2>

        <p className="text-gray-500 text-sm">
          We're here to help with any questions or issues
        </p>
      </div>
      {/* ContactSupport  */}
      <ContactSupport /> 
      {/* FAQSection */}
      <FAQSection />
      {/* ReportIssueForm */}
      <ReportIssueForm />
    </div>
  )
}

export default Help