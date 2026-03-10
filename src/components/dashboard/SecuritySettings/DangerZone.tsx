import { Button } from "@/components/ui/button"
import {  TriangleAlertIcon } from "lucide-react"

const DangerZone = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6">

      <h3 className="text-red-600 font-semibold mb-2 flex items-center gap-2">
        <TriangleAlertIcon /> Danger Zone
      </h3>

      <p className="text-sm text-red-500 mb-4">
        Once you delete your account, there is no going back.
      </p>

      <Button className="bg-red-600 cursor-pointer hover:bg-red-500">
        Delete Account
      </Button>

    </div>
  )
}

export default DangerZone