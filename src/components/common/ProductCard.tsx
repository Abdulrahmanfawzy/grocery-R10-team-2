import type { Product } from "@/lib/types/productType";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col">
            {/* Badges */}
            {/* <div className="flex gap-1 flex-wrap px-3 pt-3">
                {product.badges.map((b) => (
                    <span key={b} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeStyle(b)}`}>
                        {b}
                    </span>
                ))}
            </div> */}

            {/* Image */}
            <div className="relative mx-3 mt-2 mb-3 rounded-xl overflow-hidden bg-gray-50 h-44 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove("hidden");
                    }}
                />
                <div className="hidden text-6xl absolute inset-0 flex items-center justify-center bg-gray-50">
                    {product.emoji}
                </div>
            </div>

            {/* Info */}
            <div className="px-4 pb-4 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-900 font-bold text-sm">£ {product.price.toFixed(1)}</span>
                        <span className="text-gray-400 line-through text-xs">£{product.originalPrice}</span>
                    </div>
                </div>

                {/* <StarRating rating={product.rating} total={5} /> */}

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto pt-1">
                    <button
                        onClick={handleAdd}
                        className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${added
                            ? "bg-green-500 text-white"
                            : "bg-teal-600 hover:bg-teal-700 text-white"
                            }`}
                    >
                        {added ? "✓ Added!" : "Add To Cart"}
                    </button>

                    {/* Qty controls */}
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="w-7 h-7 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 flex items-center justify-center text-sm font-bold transition"
                    >
                        🗑
                    </button>
                    <span className="text-sm font-semibold text-gray-700 w-4 text-center">{qty}</span>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="w-7 h-7 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 flex items-center justify-center text-lg font-bold transition"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

