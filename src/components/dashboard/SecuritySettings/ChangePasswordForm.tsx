import { Button } from "@/components/ui/button"
import { Check, Lock } from "lucide-react"

const ChangePasswordForm = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Lock /> Change Password
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Enter a new password to replace the old password
      </p>

      <div className="space-y-4">

        <div>
          <label className="text-sm">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter New Password"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

      </div>

      <div className="text-xs text-gray-500 mt-4 space-y-1">

        <p className="flex items-center gap-2"><Check  size={14} className="text-primary border rounded-full border-primary"/>  At least 8 characters</p>
        <p className="flex items-center gap-2"><Check  size={14} className="text-primary border rounded-full border-primary"/> Contains a number</p>

      </div>

      <Button className="mt-5 cursor-pointer">
        Update Password
      </Button>

    </div>
  )
}

export default ChangePasswordForm