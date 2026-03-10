import { Button } from "@/components/ui/button"

const CouponsSection = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-4">
        Your Coupons
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="font-medium">15% off</p>
            <span className="text-xs text-gray-500">
              Code: SAVE15
            </span>
          </div>

          <Button className="cursor-pointer">
            Apply
          </Button>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="font-medium">Free Delivery</p>
            <span className="text-xs text-gray-500">
              Code: FREESHIP
            </span>
          </div>

          <Button className="cursor-pointer">
            Apply
          </Button>
        </div>

      </div>

    </div>
  )
}

export default CouponsSection