// import imgProduct from "../../assets/ProductImage.png";
import imgProduct from "../../assets/img/ProductImage.png";
// import { Rating } from "../shared/ٌRating.tsx";
import { Badge } from "@/components/ui/badge";

export default function ProductCartEslam() {
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
            <div className="text mt-2 flex justify-between items-center gap-2 w-full">
                <h3 className=" font-medium text-gray-800">
                    Premium Organic Orange - 1KG
                </h3>
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900 m-0">20$</span>
                    <span className="text-gray-400 line-through m-0">30$</span>
                </div>
            </div>
            <div className="rating">
                {/* <Rating rating={4} /> <span>(3.8 / 5)</span> */}
            </div>
            <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center border rounded-md gap-2 w-50 justify-between px-2 py-1">
                    <span className="text-blue-600 font-semibold text-2xl cursor-pointer">
                        -
                    </span>
                    <span className="text-sm">1</span>
                    <span className="text-blue-600 font-semibold text-2xl cursor-pointer">
                        +
                    </span>
                </div>
                <button className=" w-50 bg-[#0F3D53] text-white py-2 px-3 rounded-xl hover:opacity-90 transition">
                    Add To Cart
                </button>
            
            </div>
        </div>
    );
}
