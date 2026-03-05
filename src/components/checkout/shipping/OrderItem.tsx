import { Trash2, Plus } from "lucide-react";
import type { CartItem } from "@/lib/types/checkout.types";

interface Props {
  item: CartItem;
}

function OrderItem({ item }: Props) {
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
          <button>
            <Trash2 className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-sm font-semibold">{item.quantity}</span>
          <button>
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
          
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-800">
        £ {item.price * item.quantity}
      </p>
    </div>
  );
}

export default OrderItem;
