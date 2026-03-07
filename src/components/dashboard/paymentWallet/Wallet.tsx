import { PoundSterling } from "lucide-react"

const Wallet = () => {
  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold text-gray-800">Payment & Wallet</h2>
      <p className="mt-2 text-sm text-gray-500">Mange your payment methods and view transaction history</p>

      {/* stroe */}
      <div className="p-4 bg-primary mt-8 rounded-lg text-white">
        <h3 className="text-xl font-medium">Store Credit</h3>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm">£342.18</p>
          <span className="bg-white p-1 rounded-full"><PoundSterling size={28}  className="text-primary"/></span>
        </div>
        <p className="text-sm text-gray-200 ">Available for your next purchase . Expires : Dec 31 , 2025</p>
      </div>
    </div>
  )
}

export default Wallet