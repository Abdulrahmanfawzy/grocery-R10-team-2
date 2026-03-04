import { Card } from "@/components/ui/card";
import type { Product } from "@/lib/types/typesProducts";
import Image from "../../../assets/Web/Hi-Fi/Home/Rectangle 19.png";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Rating from "./Rating";
type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="relative cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 overflow-hidden">
      {/* line overlay */}
      <div className="absolute  w-2 h-2/4 bg-white bottom-2 -right-2 rounded-full"></div>
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
        <h3 className="text-lg font-semibold">{product.title}</h3>
      </div>

      {/* Rating */}
      <div>
        <Rating rating={product.rating} />
        <span className="text-sm font-normal text-gray-300">
          By : <span className="text-primary">{product.by}</span>
        </span>
      </div>

      {/* Price && Add to Cart */}
      <div className="flex items-center justify-between  gap-2">
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
          <Button variant="primary" className="px-6 cursor-pointer">
            <ShoppingCart size={20} /> Add
          </Button>
        </div>
      </div>

      {/* Sale Progress */}
      {product.variant === "sale" &&
        product.sold !== undefined &&
        product.total !== undefined && (
          <div className="space-y-1">
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-primary h-2 rounded-full"
                style={{
                  width: `${(product.sold / product.total) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-500">
              Sold: {product.sold}/{product.total}
            </p>
          </div>
        )}
      <div className={`${product.variant === "sale" ? "block" : "hidden"}`}>
        <Button variant="primary" className="px-6 cursor-pointer w-full">
          <ShoppingCart size={20} /> Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
