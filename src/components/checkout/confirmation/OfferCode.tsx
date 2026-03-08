import { ArrowRight } from "lucide-react";

function OfferCode() {

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-800">
          Special Offer Code
        </span>
      </div>
      <div className="space-y-3 border border-gray-200 rounded-md p-4">
        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-3">
          <input
            type="text"
            placeholder="SAVE10"
            className="text-sm flex-1 outline-none text-gray-600 placeholder:text-gray-300"
          />
        </div>
        <button className="flex gap-1 items-center bg-gray-200 text-(--primary-color) text-sm font-medium px-4 py-2 rounded-md cursor-pointer">
          Shop Now
          <span>
            <ArrowRight size={16} strokeWidth={1} className="text-(--primary-color)"/>
          </span>
        </button>
      </div>
    </div>
  );
}

export default OfferCode;
