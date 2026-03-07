import { recentOrders, topPurchases } from "@/lib/data/dataDashboard"
import { Button } from "../ui/button"

const TopPurchases = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* recentorders */}
        <div className="border p-4 rounded-lg">
            {/* Hearder */}
            <div className="flex items-center justify-between">
                <p className="text-primary font-semibold text-sm">Top Purchases</p>
                <Button variant="default" className="cursor-pointer">View All</Button>
            </div>
            {
                recentOrders.map((order)=>(
                    <div key={order.id} className="border-b py-4">
                        <div className="flex justify-between">
                            <span className="text-primary font-semibold">{order.id}</span>
                            <span className="bg-gray-200 text-xs px-5 py-1 rounded">{order.status}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>{order.date}</span>
                            <span className="font-medium">{order.price}</span>
                        </div>
                        <p className="text-sm text-gray-500">{order.items}</p>
                    </div>
                ))
            }


        </div>
        {/* recentorders */}
        <div className="border p-4 rounded-lg">
            {/* Hearder */}
            <div className="flex items-center justify-between">
                <p className="text-primary font-semibold text-sm">recentOrders</p>
                <Button variant="default" className="cursor-pointer"> Add as List </Button>
            </div>
            {
                topPurchases.map((pur)=>(
                    <div key={pur.id} className="border-b py-4 flex items-center justify-between">
                    
                    <div className="flex items-center gap-3">
                        <img src={pur.image} alt={pur.name} className="w-16 h-16" />
                        <div>
                            <p className="font-medium">{pur.name}</p>
                            <p className="text-sm text-gray-500">Bought {pur.bought} Times</p>
                        </div>
                    </div>
                    <Button variant='default' className="cursor-pointer">Add</Button>

                    </div>
                ))
            }


        </div>
        
    </div>
  )
}

export default TopPurchases