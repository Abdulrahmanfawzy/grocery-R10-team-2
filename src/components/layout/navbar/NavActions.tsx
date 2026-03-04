import { Button } from "@/components/ui/button"
import { ShoppingCart  } from "lucide-react"

const NavActions = () => {
  return (
    <div className="flex items-center gap-4">
      {/* cart */}
      <div className="flex relative items-center gap-2 cursor-pointer">
        <ShoppingCart className="text-gray-400" size={24} />
        {/* counter cart */}
        <span className="absolute -top-2 left-3 bg-gray-300 text-xs w-5 h-5  rounded-full  flex items-center justify-center">3</span>
        <span className="text-gray-700 font-medium hidden md:block">My Cart</span>
      </div>
      
      {/* Sign Up Button */}
      <Button variant="primary" className="cursor-pointer">
        Sign Up
      </Button>
    </div>
  )
}

export default NavActions
