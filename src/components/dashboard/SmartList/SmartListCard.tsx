import { Button } from "@/components/ui/button"
import {   ShoppingCart, Trash2Icon } from "lucide-react"
import type { SmartList } from "@/lib/types/smartLists"
type SmartListCardProps = {
    list :SmartList
}
const SmartListCard = ({list } : SmartListCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
        <div>
            <div className="flex gap-3">
            {/* image */}
            <img src={list.image} alt="" className="w-24 h-24 rounded-lg object-cover"  />
            {/* description */}
            <div className=" w-full flex justify-between items-center">
                <div>
                    <p>{list.title}</p>
                <span>{list.items} items</span>
                </div>
                
                <Button variant={'outline'} className="cursor-pointer"><Trash2Icon className="text-gray-500 " /></Button>
            </div>

            </div>
            {/* Update */}
            <p className="text-xs text-gray-500 pl-6">{list.updated}.</p>
            <div className="flex gap-3 mt-4">
                <Button className="px-4 flex-1 cursor-pointer"><ShoppingCart /> Add All to Cart</Button>
                <Button variant={'secondary'} className="text-gray-950 cursor-pointer">Edit</Button>
            </div>
        </div>
    </div>
  )
}

export default SmartListCard