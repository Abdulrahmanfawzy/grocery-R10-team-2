import { useCheckout } from "@/lib/context/checkout.context";
import OrderItemsScroll from "../../common/OrderItemsScroll";

function OrderSummary() {
  const { summary, loading } = useCheckout();

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <h2 className="text-lg font-medium text-gray-800 mb-4 p-1">
        Order Summary
      </h2>
      <div className="border border-gray-200 rounded-xl">
        <OrderItemsScroll />
        <div className="mt-2 p-3">
          <h3 className="text-(--primary-color) font-medium">Total Amount</h3>
          {loading ? (
            <p className="p-2 text-sm text-gray-400">Loading...</p>
          ) : (
            <>
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
              <div className="flex justify-between px-2 font-medium">
                <p>Total</p>
                <p>£ {summary.total.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
