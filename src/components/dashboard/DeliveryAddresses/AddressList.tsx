import { addresses } from "@/lib/types/addresses"
import AddressCard from "./AddressCard"

const AddressList = () => {
  return (
    <div className="space-y-4 mt-6">

      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
        />
      ))}

    </div>
  )
}

export default AddressList