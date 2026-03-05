import orderSummary from "@/lib/constants/checkout.constants";
import { CircleCheck } from "lucide-react";

function AmountSection() {
  return (
    <div className="space-y-3 border border-gray-200 rounded-md p-4">
      <div className="flex flex-col mt-2 gap-1 px-2">
        <div className="flex justify-between text-(--gray)">
          <p>Subtotal</p>
          <p>£ {orderSummary.subtotal}</p>
        </div>
        <div className="flex justify-between text-(--gray)">
          <p>Shipping</p>
          <p>£ {orderSummary.shipping}</p>
        </div>
      </div>
      <div className="h-px my-3 bg-(--silver)" />

      <div className="flex justify-between px-2">
        <p>Total</p>
        <p>£ {orderSummary.total}</p>
      </div>

      <div className="h-px my-3 bg-(--silver)" />

      <div className="flex flex-col">
        <h3 className="font-medium">Billing Address</h3>

        <div className="flex gap-2 items-center mt-2 mb-2">
          <CircleCheck strokeWidth={1} className="text-(--gray)" />
          <p className="text-sm font-light text-(--gray)">
            Billing Address is the same as Delivery Address
          </p>
        </div>

        <div className="space-y-3 bg-(--silver) text-(--primary-color) rounded-md p-4">
          <h4>Billing Address will be:</h4>
          <p>Villa 14, Street 23, District 5 New Cairo and Cairo 11835</p>
        </div>
      </div>
    </div>
  );
}

export default AmountSection;
