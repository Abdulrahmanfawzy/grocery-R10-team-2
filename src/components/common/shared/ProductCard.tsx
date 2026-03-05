import imgProduct from "../../../assets/Product Image.png";
import { Rating } from "../shared/ٌRating.tsx";
import { Badge } from "@/components/ui/badge";
export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl border p-4 hover:shadow-lg transition duration-300">
      <div className="relative aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 text-black text-xs px-2 py-1 rounded-md">
          <Badge>save 20%</Badge>
          <Badge>In Stock</Badge>
        </div>
        <img
          src={imgProduct}
          alt="Product"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text mt-2 flex justify-between items-center gap-4 w-full">
        <h3 className=" font-medium text-gray-800">
          Premium Organic Orange - 1KG
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-900 m-0">20 $</span>
          <span className="text-gray-400 line-through m-0">30 $</span>
        </div>
      </div>
      <div className="rating">
        <Rating rating={4} /> <span>(3.8 / 5)</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className=" w-50 bg-[#0F3D53] text-white py-2 px-3 rounded-xl hover:opacity-90 transition">
          Add To Cart
        </button>
        <div className="flex items-center border rounded-md gap-2 w-50 justify-between px-2 py-1">
         <span className="text-blue-600 font-semibold text-2xl cursor-pointer">
            -
          </span>
          <span className="text-sm">1</span>
          <span className="text-blue-600 font-semibold text-2xl cursor-pointer">
            +
          </span>
        </div>
      </div>
    </div>
  );
}
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
