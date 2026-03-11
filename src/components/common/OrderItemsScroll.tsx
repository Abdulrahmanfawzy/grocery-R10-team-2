import OrderItem from "../checkout/shipping/OrderItem";
import { useCheckout } from "@/lib/context/checkout.context";

interface Props {
  onTotalsChange?: (subtotal: number) => void;
}

function OrderItemsScroll({ onTotalsChange }: Props) {
  const { items, loading } = useCheckout();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updated = items.map((item) =>
      String(item.id) === id ? { ...item, quantity: newQuantity } : item,
    );
    const newSubtotal = parseFloat(
      updated
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    );
    onTotalsChange?.(newSubtotal);
  };

  if (loading)
    return <p className="p-4 text-sm text-gray-400">Loading items...</p>;

  if (!items.length)
    return <p className="p-4 text-sm text-gray-400">Your cart is empty.</p>;

  return (
    <div className="custom-scroll max-h-85 px-3 space-y-4">
      {items.map((item, index) => (
        <div key={item.id}>
          <OrderItem item={item} onQuantityChange={handleQuantityChange} />
          {index < items.length - 1 && (
            <div className="h-px mt-4 bg-(--silver)" />
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderItemsScroll;
