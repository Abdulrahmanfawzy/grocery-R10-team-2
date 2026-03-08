import { Search } from "lucide-react"

const OrderFilters = () => {
  return (
    <div className="flex gap-4 mb-4">
        <div className="flex items-center border rounded-lg px-4 py-2 gap-1">
            <Search size={18} className="text-gray-500" />
        <input type="text" placeholder="Search Orders" className=" flex-1 outline-none" />
        </div>

        <div className="border rounded-lg px-4 py-2">
        <select className=" text-gray-500 px-4">
        <option>All Status</option>
      </select>
        </div>

        <div className="border rounded-lg px-4 py-2">
        <select className=" text-gray-500 px-4">
        <option>Last 30 Days</option>
      </select>
        </div>

      

    </div>
  )
}

export default OrderFilters