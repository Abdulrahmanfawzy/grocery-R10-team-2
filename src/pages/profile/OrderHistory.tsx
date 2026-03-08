import OrderFilters from "@/components/dashboard/OrderHistory/OrderFilters"
import Orderlist from "@/components/dashboard/OrderHistory/orderList/Orderlist"

const OrderHistory = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Order History</h2>
      <p className="text-gray-500 mb-6">View and manage all your past orders</p>
      <OrderFilters />
      <Orderlist />
    </div>
  )
}

export default OrderHistory