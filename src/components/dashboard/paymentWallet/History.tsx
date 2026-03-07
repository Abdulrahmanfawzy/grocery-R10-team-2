import { Button } from "@/components/ui/button"
import { transactions } from "@/lib/data/paymentmethods"
import { ChevronRight } from "lucide-react"

const History = () => {
  return (
    <div className="mt-8">
      {/* Payment History */}
      <div className="border p-6 rounded-lg">
        <h2 className="font-semibold mb-4 text-2xl text-gray-800" >Payment History</h2>
        {/* transactions */}
        <div className="space-y-3">

        {
          transactions.map((item)=> (
            <div key={item.id} className="border rounded-lg p-4 flex items-center justify-between">
              {/* left */}
              <div>
                <p className="font-medium text-primary text-sm">{item.title}</p>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              {/* right */}
              <div>
                <p className={`font-medium text-sm ${item.refund ? 'text-primary' : ''}`}>{item.amount}</p>
                <span className="text-xs bg-primary px-2 py-1 rounded text-white">{item.status}</span>
              </div>

           </div> 
          ))
        }
        </div>

        <Button variant={'default'} className="mt-4 cursor-pointer">View All Transactions <ChevronRight />  </Button>
      </div>

      {/* Receipt  */}
      <div className="mt-4 border p-6 rounded-lg">
        <h2 className="font-semibold text-gray-800">Receipt & Invoice</h2>
        <p className="text-sm mt-2 text-gray-500">Download PDF receipts for your orders</p>
        <Button className="cursor-pointer mt-2">Download All Recipts</Button>
      </div>
    </div>
  )
}

export default History