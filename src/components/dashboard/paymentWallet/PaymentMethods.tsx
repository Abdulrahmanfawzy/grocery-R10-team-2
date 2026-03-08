import { Button } from "@/components/ui/button"
import { cards, methods } from "@/lib/data/paymentmethods"
import { Plus } from "lucide-react"

const PaymentMethods = () => {
  return (
    <div className="grid grid-cols-2 gap-12 border p-8 mt-4 rounded-lg">
      {/* saved cards  */}
      <div >
        <h3 className="font-semibold text-xl">Saved Cards</h3>
        <div className="space-y-2 mt-4">
          {cards.map((card)=>(
            <div key={card.id} className="border rounded-lg flex  items-center gap-4 hover:border-primary transition duration-300 p-4  cursor-pointer" >
              <img src={card.image} alt={card.brand} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium text-sm">{card.brand}{card.number}</p>
                <span className="text-xs text-gray-500 ">Expires {card.expiry}</span>
              </div>
            </div>
          ))}
          <Button className="w-full flex items-center py-6 cursor-pointer hover:bg-primary transition duration-300 hover:text-white" variant={'outline'} > 
            <Plus size={20} /> Add New Card
          </Button>
        </div>
      </div>
      {/* Payment methods */}
      <div>
        <h3 className="font-semibold text-xl">Other Payment Methods</h3>
        <div className="space-y-2 mt-4">
          {methods.map((method)=>{
            const Icon  =method.icon ;
            return (
            <div key={method.id} className="border rounded-lg flex  items-center gap-4 hover:border-primary transition duration-300 p-4  cursor-pointer" >
              <Icon size={24}  className="text-primary"/>
              <div>
                <p className="font-medium text-sm">{method.name}</p>
                <span className="text-xs text-gray-500 ">Expires {method.description}</span>
              </div>
            </div>)
})}
          
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods