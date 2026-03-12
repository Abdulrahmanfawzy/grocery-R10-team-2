import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import Rating from "./Rating";
import { memo, useState } from "react";
// import type { Product } from "@/lib/types/typesProducts";
import { useAddToCard } from "@/hooks/useAddToCard";
import { Link } from "react-router-dom";
import type { Product } from "@/lib/types/productType";

type Props = {
  product: Product;
};

const ProductCard = memo(({ product }: Props) => {
  const { mutate, isPending } = useAddToCard();
  const [qty, setQty] = useState(1);

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  const isOutOfStock =
    product.stock_quantity === undefined ||
    product.stock_quantity === null ||
    Number(product.stock_quantity) <= 0;

  const productImage = product.image_url || "";
  const price = Number(product.price);
  const discountPrice = Number(product.discount_price);
  const isDiscountValid = discountPrice > 0 && discountPrice < price;
  const displayPrice = isDiscountValid ? discountPrice : price;

  const handleAddToCard = () => {
    mutate({
      meal_id: product.id,
      quantity: qty,
    });
  };

  return (
    <Card className="relative group flex flex-col h-full p-4 hover:shadow-lg transition-all duration-300 border-slate-100">
      {/* Offer Badge */}
      {(product.offer_title || isDiscountValid) && (
        <div className="absolute top-2 left-0 z-10 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-r-full shadow-sm">
          {product.offer_title || "SPECIAL OFFER"}
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
        <img
          loading="lazy"
          src={productImage}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-1">
        <p className="text-[10px] text-orange-600 font-bold uppercase">
          {product.category?.name || "General"}
        </p>
        <Link to={`ProductDetails/${product.id}`}>
          <h3 className="text-sm font-bold line-clamp-2 min-h-[40px] text-slate-800">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && Number(product.rating) > 0 && (
          <div className="flex items-center gap-1.5 py-1">
            <Rating rating={Number(product.rating)} />
            <span className="text-[10px] text-slate-400 font-medium">
              ({product.rating_count})
            </span>
          </div>
        )}
      </div>

      {/* Price & Quantity */}
      <div className="mt-4 space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-emerald-600 font-extrabold text-xl">
            £{displayPrice.toFixed(2)}
          </span>
          {isDiscountValid && (
            <span className="line-through text-slate-300 text-xs decoration-red-400">
              £{price.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Quantity Controls */}
          <div className="flex items-center border-2 border-slate-100 rounded-lg bg-slate-50/50 h-10">
            <button
              onClick={decrease}
              disabled={qty <= 1 || Number(product.stock_quantity) === 0}
              className="px-2 hover:text-orange-500 disabled:opacity-30 transition-colors">
              <Minus size={14} />
            </button>

            <span className="w-6 text-center text-sm font-bold text-slate-700">
              {qty}
            </span>

            <button
              onClick={increase}
              disabled={Number(product.stock_quantity) === 0}
              className="px-2 hover:text-orange-500 disabled:opacity-30 transition-colors">
              <Plus size={14} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <Button
            disabled={isOutOfStock || isPending}
            className="flex-1 gap-2 h-10 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleAddToCard}>
            <ShoppingCart size={16} />
            <span className="text-xs font-bold whitespace-nowrap">
              {isOutOfStock
                ? "Out of Stock"
                : isPending
                  ? "Adding.."
                  : "Add to Cart"}
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
});

export default ProductCard;
