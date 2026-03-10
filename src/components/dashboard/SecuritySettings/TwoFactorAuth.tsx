import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

const TwoFactorAuth = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <Smartphone /> Two - Factor Authentication
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Add an extra layer of security
          </p>
        </div>

        <input type="checkbox" className="toggle" />

      </div>

      <div className="bg-gray-100 rounded-lg p-4 mt-4">

        <p className="text-sm text-blue-900">
          ✔ Enabled
        </p>

        <span className="text-xs text-gray-500">
          SMS verification to +20109 874 5531
        </span>

      </div>

      <Button className="mt-4 cursor-pointer">
        Change Phone Number
      </Button>

    </div>
  )
}

export default TwoFactorAuth