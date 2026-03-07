import { ArrowRightLeft, ReceiptText } from "lucide-react";
import ShippingBadge from "../shipping/ShippingBadge";
import StarRating from "./StarRating";
import OfferCode from "./OfferCode";

function OrderOptions() {
  return (
    <div className="h-full bg-white border rounded-lg p-4 space-y-6 mt-0 lg:mt-12">
      <div>
        <h4 className="text-sm block mb-2">Delivery Address</h4>
        <input
          type="text"
          value="Villa 14, Street 23, District 5, New Cairo, Cairo"
          readOnly
          className="w-full border rounded-md px-3 py-2 bg-gray-50 text-sm outline-none"
        />
      </div>

      <div>
        <ShippingBadge
          title={"Current Order"}
          iconOne={ReceiptText}
          iconTwo={ArrowRightLeft}
          delivery={"Download Receipt"}
          pickUp={"Reorder"}
        />
      </div>

      <div className="flex flex-col">
        <h4>How was your experience?</h4>
        <div className="flex items-center gap-0.5 mt-2">
          <StarRating rating={0} total={5} />
        </div>
      </div>

      <div className="flex flex-col">
        <h4>Leave Us a Comment</h4>
        <input
          type="text"
          placeholder="Enter your comment.."
          className="text-md py-2 px-2 mt-2 border border-gray-300 rounded-md text-gray-600 placeholder:text-gray-300"
        />
      </div>

      <OfferCode />
    </div>
  );
}

export default OrderOptions;
