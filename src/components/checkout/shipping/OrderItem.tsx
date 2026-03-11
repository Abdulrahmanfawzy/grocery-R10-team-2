import { Trash2, Plus } from "lucide-react";
import type { CartItem } from "@/lib/types/checkout.types";
import { updateCartItem } from "@/lib/api/cart";
import { useState } from "react";

interface Props {
  item: CartItem;
  onQuantityChange?: (id: string, newQuantity: number) => void;
}

function OrderItem({ item, onQuantityChange }: Props) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    setLoading(true);
    try {
      await updateCartItem(String(item.id), newQuantity);
      setQuantity(newQuantity);
      onQuantityChange?.(String(item.id), newQuantity);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-16 h-16 mb-3">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <span className="absolute -bottom-3 left-0 bg-gray-900 text-white text-[10px] px-2.5 py-1 rounded-tl-2xl rounded-br-2xl whitespace-nowrap">
          {item.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800 mb-2">{item.name}</p>
        <div className="flex items-center gap-6 border border-gray-200 rounded-lg w-fit px-3 py-1">
          <button
            onClick={() => handleUpdate(quantity - 1)}
            disabled={loading || quantity <= 1}>
            <Trash2 className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-sm font-semibold">{quantity}</span>
          <button onClick={() => handleUpdate(quantity + 1)} disabled={loading}>
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-800">
        £ {(item.price * quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default OrderItem;
