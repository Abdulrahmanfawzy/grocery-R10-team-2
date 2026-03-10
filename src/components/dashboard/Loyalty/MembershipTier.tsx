import { Crown } from "lucide-react"

const MembershipTier = () => {
  return (
        <div className="border rounded-xl p-6 bg-blue/10">

      <h3 className="font-semibold mb-4 flex items-center gap-2">
       <Crown className="text-primary"/>Membership Tier: Gold
      </h3>

      <div className="mb-4">

        <div className="flex justify-between text-sm mb-1">
          <span>Progress to Platinum</span>
          <span>2,450 / 10,000 pts</span>
        </div>

        <div className="bg-gray-200 h-2 rounded-full">
          <div className="bg-gradient-to-r  via-primary/80 to-primary h-2  rounded-full w-50"></div>
        </div>

      </div>

      <div className="grid grid-cols-4 gap-3 text-center">

        <div className="border rounded-lg p-3 text-sm cursor-pointer hover:bg-primary hover:text-white duration-300 transition">
          Bronze <br />1000 pts
        </div>

        <div className="border rounded-lg p-3 text-sm cursor-pointer hover:bg-primary hover:text-white duration-300 transition">
          Silver <br />2500 pts
        </div>

        <div className="bg-primary text-white rounded-lg p-3 text-sm cursor-pointer hover:bg-primary hover:text-white duration-300 transition">
          Gold <br />5000 pts
        </div>

        <div className="border rounded-lg p-3 text-sm cursor-pointer hover:bg-primary hover:text-white duration-300 transition">
          Platinum <br />10000 pts
        </div>

      </div>

    </div>
  )
}

export default MembershipTier