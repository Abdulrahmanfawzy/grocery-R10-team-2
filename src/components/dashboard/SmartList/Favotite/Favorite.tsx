import { Star } from "lucide-react"
import FavoriteItemCard from "./FavoriteItemCard"
import { favorites } from "@/lib/types/smartLists"

const Favorite = () => {
  return (
    <div className="border p-6 mt-6 rounded-lg">
        {/* Header */}
        <div className="flex  justify-between items-center">
            <h3 className="flex  items-center gap-2 text-lg font-medium"><Star className="text-primary"/> Favorite items</h3>
        <p className="text-sm text-gray-500">Manage Favorite</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-8">
            {
                favorites.map((item)=> (
                    <FavoriteItemCard  key={item.id} item={item}/>

                ))
            }
        </div>

    </div>
  )
}

export default Favorite