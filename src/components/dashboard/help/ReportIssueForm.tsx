import { Button } from "@/components/ui/button"

const ReportIssueForm = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-4">
        Report an Issue
      </h3>

      <div className="space-y-4">

        <div>
          <label className="text-sm">Issue Type</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Delivery Issue</option>
            <option>Payment Issue</option>
            <option>Product Issue</option>
          </select>
        </div>

        <div>
          <label className="text-sm">
            Order Number (Optional)
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="GP20251126001"
          />
        </div>

        <div>
          <label className="text-sm">
            Description
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-3"
            placeholder="Please describe your issue..."
          />
        </div>

        <Button className="mt-4">
          Report
        </Button>

      </div>

    </div>
  )
}

export default ReportIssueForm