import { MessageSquareDot, Phone } from "lucide-react";
import SecureCheckout from "../payment/SecureCheckout";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import StarRating from "./StarRating";

function DriverInfo() {
  return (
    <div className="border border-gray-200 rounded-md p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <img
            src="../../assets/img/cart1.png"
            className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover bg-pink-200 flex-shrink-0"
          />

          <div className="flex flex-col gap-1">
            <p>Ahmed Badr</p>
            <StarRating rating={4} total={5} fill />
            <div className="flex items-center gap-2 mt-1">
              <Phone
                size={18}
                strokeWidth={2}
                className="text-(--primary-color)"
              />
              <p className="text-(--primary-color) text-sm">+201012345678</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 sm:flex-shrink-0">
          <ButtonPrimary
            btn="Call"
            btnWidth="w-20"
            icon={<Phone size={20} strokeWidth={2} className="text-white" />}
          />
          <ButtonPrimary
            btn="Chat"
            btnWidth="w-20"
            icon={
              <MessageSquareDot
                size={20}
                strokeWidth={2}
                className="text-white"
              />
            }
          />
        </div>
      </div>

      <SecureCheckout
        title="Our Safety Policy"
        desc="Drivers must athere to road safety rules and operate vehicles with caution to ensure safe and timely deliveries."
      />
    </div>
  );
}

export default DriverInfo;
