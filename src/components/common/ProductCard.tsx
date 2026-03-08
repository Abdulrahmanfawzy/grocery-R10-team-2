
import { Card } from "@/components/ui/card";
import Image from "../../assets/Home/Rectangle19.png";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Rating from "./Rating";
import type { Product } from "@/lib/types/productType";
import { useState } from "react";

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
    <Card className="relative cursor-pointer hover:shadow-lg transition-shadow border duration-300 p-4 overflow-hidden">
      {/* line overlay */}
      <div className="absolute w-2 h-2/4 bg-white bottom-2 -right-2 rounded-full"></div>
      {/* Card Content */}
      {/* Badges */}
      <div
        className={`${product.variant === "sale" ? "absolute -top-1 left-0" : "space-x-1 ml-2"}`}
      >
        {product.variant === "sale"
          ? product.badges &&
          product.badges.map((badge) => (
            <span
              key={badge}
              className={` px-6 py-1 text-xs   text-white ${badge.includes("save") ? "bg-amber-500" : "bg-primary/80"} `}
            >
              {badge}
            </span>
          ))
          : product.badges &&
          product.badges.map((badge) => (
            <span
              key={badge}
              className="bg-primary px-3 py-1 text-xs   text-white rounded-tl-full rounded-br-full"
            >
              {badge}
            </span>
          ))}
      </div>

      {/* Image */}
      <img
        src={Image}
        alt="imageProduct"
        className="w-full h-40 object-contain"
      />

      {/* Product Details */}
      <div>
        <p className="text-sm text-gray-400">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>

      {/* Rating */}
      <div>
        <Rating rating={product.rating} />
        <span className="text-sm font-normal text-gray-300">
          By : <span className="text-primary">{product.by}</span>
        </span>
      </div>

      {/* Price && Add to Cart */}
      {version === "v1" && (
        <div className="flex items-center justify-between gap-2">
          <div className="space-x-2">
            <span className="text-primary font-bold text-lg">
              £{product.price}
            </span>

            {product.oldPrice && (
              <span className="line-through text-gray-400">
                £{product.oldPrice}
              </span>
            )}
          </div>

          <div className={`${product.variant === "sale" ? "hidden" : "block"}`}>
            <Button variant="default" className="px-6 cursor-pointer">
              <ShoppingCart size={20} /> Add
            </Button>
          </div>
        </div>
      )}

      {version === "v2" && (
        <div className="mt-2 space-y-3">

          {/* price */}
          <div className="space-x-2">
            <span className="text-primary font-bold text-lg">
              £{product.price}
            </span>

            {product.oldPrice && (
              <span className="line-through text-gray-400">
                £{product.oldPrice}
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

            <Button className="flex-1">
              <ShoppingCart size={18} /> Add
            </Button>

          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
