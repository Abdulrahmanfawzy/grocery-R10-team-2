import { CircleDollarSignIcon, Clock7Icon, Gift, Star } from "lucide-react"

const BenefitsSection = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-4">
        Your Gold Benefits
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
          <Star /> 2x Points
          <p className="text-xs text-gray-500">
            Earn double points on all purchases
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
          <Gift /> Birthday Bonus
          <p className="text-xs text-gray-500">
            500 bonus points on your birthday
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
          <CircleDollarSignIcon /> Exclusive Deals
          <p className="text-xs text-gray-500">
            Access to member-only promotions
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
          <Clock7Icon /> Priority Support
          <p className="text-xs text-gray-500">
            Faster customer service response
          </p>
        </div>

      </div>

    </div>
  )
}

export default BenefitsSection