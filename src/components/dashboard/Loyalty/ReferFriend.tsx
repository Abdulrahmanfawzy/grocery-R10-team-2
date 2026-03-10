import { Button } from "@/components/ui/button"

const ReferFriend = () => {
  return (
    <div className="bg-primary text-white rounded-xl p-6 flex justify-between items-center">

      <div>
        <h4 className="font-semibold">
          Refer a Friend
        </h4>

        <p className="text-sm opacity-80">
          Give $10, Get $20 when your friend orders
        </p>

        <span className="bg-white text-primary px-3 py-1 rounded mt-2 inline-block text-sm">
          Your Code: SARAH2024
        </span>
      </div>

      <Button className="cursor-pointer">
        Share Code
      </Button>

    </div>
  )
}

export default ReferFriend