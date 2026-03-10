import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AddressList from "./AddressList"
import DeliveryWindowsSection from "./DeliveryWindowsSection"

const DeliveryAddresses = () => {
  return (
    <div className="space-y-6 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900">Delivery Addresses</h2>
                <p className="text-sm mt-2 text-gray-500">Manage your delivery locations and preferences</p>
            </div>
            <Button className="cursor-pointer"><Plus /> Add Address</Button>
        </div>
        {/* AddressList */}
        <AddressList />
        {/* DeliveryWindowsSection */}
        <DeliveryWindowsSection />
    </div>
  )
}

export default DeliveryAddresses