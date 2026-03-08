import { sections } from "@/lib/data/notificationSettings"
import { useState } from "react";
type ToggleState = Record<string , boolean >;
const NotificationSettings = () => {
const [toggles , setToggles ] = useState<ToggleState>({});

const toggle = (name : string) => {
    setToggles((prev)=>({
        ...prev ,
        [name] : !(prev[name] ?? false)
    }))
}
  return (
    <div className="border rounded-lg p-6 mt-8 space-y-4 ">
        <div>
            <h2 className="text-lg font-semibold">Notification Preference</h2>
            <p className="text-gray-500 text-sm ">Manage notification based on your preference</p>
        </div>
        {
            sections.map((section)=>(
                <div key={section.id}>
                    <h3 className="font-medium mb-3">{section.title}</h3>
                    
                    <div className=" rounded-lg bg-blue/5 divide-y px-2 ">
                        {
                        section.items.map((item)=>(
                            <div key={item} className="flex items-center justify-between px-4 py-3">
                                <span>{item}</span>
                                <button
                                onClick={()=>toggle(item)}
                                className={`w-10 h-5 bg-gray-300 rounded-full cursor-pointer  p-1 flex items-center transition
                                    ${
                                    toggles[item]
                                    ?
                                    "bg-primary justify-end"
                                    :
                                    "bg-gray-300"
                                    }

                                    `}>
                                    <div className="bg-white w-4 h-4 rounded-full" ></div>
                                </button>
                            </div>
                        ))
                    }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NotificationSettings