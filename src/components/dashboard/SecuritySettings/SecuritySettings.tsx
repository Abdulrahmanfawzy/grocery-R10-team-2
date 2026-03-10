import ChangePasswordForm from "./ChangePasswordForm"
import DangerZone from "./DangerZone"
import SecurityStatus from "./SecurityStatus"
import TwoFactorAuth from "./TwoFactorAuth"

const SecuritySettings = () => {
  return (
    <div className="space-y-6 p-4">
        <div>
            <h2 className="text-2xl font-semibold">
          Security & Login
        </h2>

        <p className="text-sm text-gray-500">
          Manage your account security and login settings
        </p>
        </div>
        {/* SecurityStatus  */}
        <SecurityStatus />

        {/* ChangePasswordForm */}
        <ChangePasswordForm />
        {/* TwoFactorAuth */}
        <TwoFactorAuth />
        {/* DangerZone */}
        <DangerZone />
    </div>
  )
}

export default SecuritySettings