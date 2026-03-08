import { Button } from "@/components/ui/button"
import { Edit, Mail, Phone, User } from "lucide-react"

const ProfileSettings = () => {
  return (
    <div className="space-y-6">
        {/* Basic Info */}
        <div className="border rounded-xl p-6">
            <div className="flex justify-between items-center ">
                <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
                <Button variant='secondary' ><Edit />Edit</Button>
            </div>
            {/* Data input */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Frist name */}
                <div>
                    <label className="text-sm text-gray-600">Frist name</label>
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-4 mt-2">
                        <User size={20} className="text-gray-600" />
                        <input type="text" className="outline-none w-full" value='ibrahim' />
                    </div>
                </div>
                {/* Last name  */}
                <div>
                    <label className="text-sm text-gray-600">Last name</label>
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-4 mt-2">
                        <User size={20} className="text-gray-600" />
                        <input type="text" className="outline-none w-full" value='Kadry' />
                    </div>
                </div>
                {/* Email  */}
                <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-4 mt-2">
                        <Mail size={20} className="text-gray-600" />
                        <input type="email" className="outline-none w-full" value='ibrahim@gmail.com' />
                    </div>
                </div>
                {/* Phone  */}
                <div>
                    <label className="text-sm text-gray-600">Phone</label>
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-4 mt-2">
                        <Phone size={20} className="text-gray-600" />
                        <input type="text" className="outline-none w-full" value='+201024455748' />
                    </div>
                </div>
            </div>
        </div>

        {/* Language */}
        <div className="border p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Language</h2>
            <div>
                <label className="text-sm text-gray-600 block" >Preferred language</label>
                <select className="mt-2  border  px-8 py-3 w-60 rounded-xl text-gray-600 cursor-pointer">
                    <option value="En">English (us)</option>
                    <option value="Ar">Arabic</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default ProfileSettings