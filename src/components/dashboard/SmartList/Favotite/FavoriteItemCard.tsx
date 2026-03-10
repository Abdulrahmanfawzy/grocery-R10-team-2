import { Button } from "@/components/ui/button"
import type { FavoriteItem } from "@/lib/types/smartLists"
type FavoriteItemCardProps = {
  item: FavoriteItem
}
const FavoriteItemCard = ({item} : FavoriteItemCardProps) => {
  return (
    <div className=" flex items-center justify-center border rounded-lg p-4  gap-4">
        <img src={item.image} alt="" className="w-24 h-24 rounded-full " />
        <div className="flex-1 flex items-center justify-between">
            <div className="space-y-1">
            <p className="text-sm font-medium">{item.name}</p>
            <span className="text-sm text-gray-500">{item.price}</span>
            </div>
            <Button className="cursor-pointer">Add</Button>
        </div>
    </div>
  )
}

export default FavoriteItemCard