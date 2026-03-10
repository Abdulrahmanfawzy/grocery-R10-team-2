import { Moon } from "lucide-react"

const AppearanceSettings = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <Moon /> Dark Mode
          </h3>

          <p className="text-sm text-gray-500 mt-3">
            Switch between light and dark theme
          </p>
        </div>

        <input type="checkbox" className="toggle" />

      </div>

    </div>
  )
}

export default AppearanceSettings