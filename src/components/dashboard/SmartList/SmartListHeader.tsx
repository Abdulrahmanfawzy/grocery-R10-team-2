import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const SmartListHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
        <div>
            <h2 className="text-2xl font-semibold">Smart Lists & Favorites</h2>
            <p className="text-gray-500 text-sm">Organize your shopping with custom lists</p>       
        </div>
        <Button variant={'default'} className="cursor-pointer"><Plus size={18}  />Create New List</Button>
    </div>
  )
}

export default SmartListHeader