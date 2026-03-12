import { Card } from "@/components/ui/card";
import Image from "../../assets/Home/Rectangle19.png";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Rating from "./Rating";
import { useState } from "react";
import type { Product } from "@/lib/types/productType";
type Props = {
  product: Product,
  version?: "v1" | "v2";
}

const ProductCard = ({ product, version = "v1" }: Props) => {
  const [qty, setQty] = useState(1);

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  return (
    <Card className="relative hover:shadow-lg transition-shadow border duration-300 p-4 overflow-hidden">
      {/* line overlay */}
      <div className="absolute w-2 h-2/4 bg-white bottom-2 -right-2 rounded-full"></div>
      <img
        loading="lazy"
        src={product.image_url || Image}
        alt={product.title}
        className="w-full h-40 object-contain"
      />

      {/* Product Details */}
      <div>
        <p className="text-sm text-gray-400">{product.category.name}</p>
        <h3 className="text-lg font-semibold">{product.title}</h3>
      </div>

      {/* Rating */}
      <div>
        <Rating rating={product.rating} />
        <span className="text-sm font-normal text-gray-300">
        </span>
      </div>

      {/* Price && Add to Cart */}
      {version === "v1" && (
        <div className="flex items-center justify-between gap-2">
          <div className="space-x-2">
            <span className="text-primary font-bold text-lg">
              £{product.final_price}
            </span>

            {product.price && (
              <span className="line-through text-gray-400">
                £{product.price}
              </span>
            )}
          </div>

          <Button variant="default" className="px-6 cursor-pointer">
            <ShoppingCart size={20} /> Add
          </Button>
        </div>
      )}

      {version === "v2" && (
        <div className="mt-2 space-y-3">

          {/* price */}
          <div className="space-x-2">
            <span className="text-primary font-bold text-lg">
              £{product.final_price}
            </span>

            {product.price && (
              <span className="line-through text-gray-400">
                £{product.price}
              </span>
            )}
          </div>

          {/* quantity + add */}
          <div className="flex items-center gap-2">

            <div className="flex items-center border rounded-md overflow-hidden">

              <button
                onClick={decrease}
                className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
              >
                -
              </button>

              <span className="px-3">{qty}</span>

              <button
                onClick={increase}
                className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <Button className="flex-1 cursor-pointer">
              <ShoppingCart size={18} /> Add
            </Button>

          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
