import {  ShieldCheckIcon} from "lucide-react"

const SecurityStatus = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg flex items-center gap-2">
        <ShieldCheckIcon />
        <div className="">
      <p className="font-medium text-blue-900 ">
         Your Account Is Secure
      </p>

      <span className="text-sm text-gray-600">
        All security features are enabled
      </span>
        </div>

    </div>
  )
}

export default SecurityStatus