import { Button } from "@/components/ui/button"

const FAQSection = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-4">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-primary">
            How do I track my order?
          </p>
          <span className="text-sm text-gray-500">
            Go to Order History and click on any order to see real-time tracking.
          </span>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-primary">
            What is your return policy?
          </p>
          <span className="text-sm text-gray-500">
            We accept returns within 7 days for non-perishable items.
          </span>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-primary">
            How do I cancel my subscription?
          </p>
          <span className="text-sm text-gray-500">
            Visit the subscriptions page and click cancel.
          </span>
        </div>

      </div>

      <Button className="mt-4">
        View All FAQs
      </Button>

    </div>
  )
}

export default FAQSection