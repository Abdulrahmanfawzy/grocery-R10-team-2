import OrderItem from "../checkout/shipping/OrderItem";
import orderSummary from "@/lib/constants/checkout.constants";

function OrderItemsScroll() {
  return (
    <div>
      <div className="custom-scroll max-h-85 px-3 space-y-4">
        {orderSummary.items.map((item, index) => (
          <div key={item.id}>
            <OrderItem item={item} />
            {index < orderSummary.items.length - 1 && (
              <div className="h-px mt-4 bg-(--silver)" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItemsScroll;
