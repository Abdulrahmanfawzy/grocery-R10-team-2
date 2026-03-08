import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Filter = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [open, setOpen] = useState(true);
    return (
        <div className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0">
            <button onClick={() => setOpen((o) => !o)} className="flex items-center justify-between w-full mb-3 group">
                <span className="text-sm font-semibold text-gray-700 group-hover:text-sky-600 transition-colors">{title}</span>
                {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
            </button>
            {open && <div>{children}</div>}
        </div>
    )
}

export default Filter;