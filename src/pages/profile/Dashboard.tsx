import DashboardWelcome from "@/components/dashboard/DashboardWelcome"
import OrderSection from "@/components/dashboard/OrderSection"
import ShoppingInsights from "@/components/dashboard/ShoppingInsights"
import TopPurchases from "@/components/dashboard/TopPurchases"

const Dashboard = () => {
  return (
    <div>
      <DashboardWelcome />
      <OrderSection />
      <ShoppingInsights />
      <TopPurchases />
    </div>
  )
}

export default Dashboard