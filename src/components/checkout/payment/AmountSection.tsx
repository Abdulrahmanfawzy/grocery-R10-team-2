import { CircleCheck } from "lucide-react";
import type { ShippingFormData } from "@/lib/schemas/shippingSchema";

interface Summary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

interface Props {
  summary: Summary;
}

function AmountSection({ summary }: Props) {
  const raw = localStorage.getItem("shipping_data");
  const shipping: ShippingFormData | null = raw ? JSON.parse(raw) : null;

  return (
    <div className="space-y-3 border border-gray-200 rounded-md p-4">
      <div className="flex flex-col mt-2 gap-1 px-2">
        <div className="flex justify-between text-(--gray)">
          <p>Subtotal</p>
          <p>£ {summary.subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-(--gray)">
          <p>Shipping</p>
          <p>£ {summary.shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-(--gray)">
          <p>Tax</p>
          <p>£ {summary.tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="h-px my-3 bg-(--silver)" />

      <div className="flex justify-between px-2">
        <p>Total</p>
        <p>£ {summary.total.toFixed(2)}</p>
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
        <div className="space-y-3 bg-gray-200 text-(--primary-color) rounded-md p-4">
          <h4>Billing Address will be:</h4>
          {shipping ? (
            <p>
              {shipping.address}, {shipping.city}, {shipping.province}{" "}
              {shipping.postalCode}
            </p>
          ) : (
            <p>No address found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AmountSection;
