import { Button } from "@/components/ui/button"
import type { Address } from "@/lib/types/addresses"
import { Car, Home, PenLine, Trash2Icon  } from "lucide-react"

type AddressCardProps = {
  address: Address
}

const AddressCard = ({ address }: AddressCardProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white">

      <div className="flex justify-between items-start">

        <div>
          <p className="font-semibold flex items-center gap-2">
            <Home /> {address.type}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {address.address}
          </p>
        </div>

        <div className="flex gap-2">

          <Button variant={'secondary'}className="flex items-center gap-2 cursor-pointer">
            <PenLine size={14}/> Edit
          </Button>

          <Button variant={'secondary'}className="flex items-center gap-2 cursor-pointer">
            <Trash2Icon /> Cancel
          </Button>

        </div>

      </div>

      <div className="bg-gray-100 rounded-lg p-4 mt-4 ">

        <p className="text-sm font-medium mb-1 flex items-center gap-2 ">
          <Car /> Delivery Instructions
        </p>

        <p className="text-sm text-gray-600">
          {address.instructions}
        </p>

      </div>

    </div>
  )
}

export default AddressCard