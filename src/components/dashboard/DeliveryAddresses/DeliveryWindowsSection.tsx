import { TimerIcon } from "lucide-react"
import DeliveryWindow from "./DeliveryWindow"

const DeliveryWindowsSection = () => {
  return (
 <div className="border rounded-xl p-6 bg-white mt-6">

      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <TimerIcon /> Preferred Delivery Windows
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Select your preferred time slots for deliveries
      </p>

      <div className="grid md:grid-cols-3 gap-4">

        <DeliveryWindow
          title="Morning"
          time="8:00 AM - 12:00 PM"
          active
        />

        <DeliveryWindow
          title="Afternoon"
          time="12:00 PM - 5:00 PM"
        />

        <DeliveryWindow
          title="Evening"
          time="5:00 PM - 8:00 PM"
          active
        />

      </div>

    </div>  )
}

export default DeliveryWindowsSection