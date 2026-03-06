import orderSummary from "@/lib/constants/checkout.constants";
import OrderItemsScroll from "../../common/OrderItemsScroll";

function OrderSummary() {
  return (
    <div className="max-w-md">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Order Summary
      </h2>
      <div className=" border border-gray-200 rounded-xl ">
        <OrderItemsScroll />
        <div className="mt-2 p-3">
          <h3 className="text-(--primary-color) font-medium">Total Amount</h3>

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
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
