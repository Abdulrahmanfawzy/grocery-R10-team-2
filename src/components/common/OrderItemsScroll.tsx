import OrderItem from "../checkout/shipping/OrderItem";
import { useCheckout } from "@/lib/context/checkout.context";

function OrderItemsScroll() {
  const { items, loading, updateItemQuantity } = useCheckout();

  if (loading)
    return <p className="p-4 text-sm text-gray-400">Loading items...</p>;

  if (!items.length)
    return <p className="p-4 text-sm text-gray-400">Your cart is empty.</p>;

  return (
    <div className="custom-scroll max-h-85 px-3 space-y-4">
      {items.map((item, index) => (
        <div key={item.id}>
          <OrderItem item={item} onQuantityChange={updateItemQuantity} />
          {index < items.length - 1 && (
            <div className="h-px mt-4 bg-(--silver)" />
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderItemsScroll;
