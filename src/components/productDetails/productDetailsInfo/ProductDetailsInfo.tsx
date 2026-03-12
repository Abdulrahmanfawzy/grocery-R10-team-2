import ProductDetailsGallery from "../productDetailsGallery/ProductDetailsGallery";
import { Button } from "../../ui/button";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import type { productData } from "@/lib/types/productDetailsTypes";
import type { GalleryItem } from "react-image-gallery";

type productDataProps = {
  productInfo: productData;
};
export default function ProductDetailsInfo({ productInfo }: productDataProps) {
  console.log(productInfo);
  const galleryImages: GalleryItem[] = productInfo.images.map((img) => {
    return {
      original: img,
      thumbnail: img,
      // originalHeight:"200",
      // originalWidth:"200"
    };
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 my-4 gap-12">
        <ProductDetailsGallery images={galleryImages}></ProductDetailsGallery>
        <div className="product-data ">
          <div className="flex flex-col gap-6 border-b py-6">
            <h2 className="text-2xl text-[#014162] font-semibold">
              Premium organic orange
            </h2>
            <span className="text-gray-700">25$ | Kg</span>
            <span className="text-gray-700">20$</span>
            <Button className="bg-gray-200 font-medium w-fit text-gray-700 text-md hover:bg-gray-100 transition-colors duration-300">
              <MdOutlineAccessAlarm />
              Priority Delivery Available
            </Button>
          </div>
          <p className="text-md mt-3 mb-2">Quantity</p>
          <div className="flex items-center border rounded-md px-4 py-1 gap-6 w-fit">
            <span className="text-blue-600 font-semibold text-lg cursor-pointer">
              -
            </span>
            <span className="text-sm">5</span>
            <span className="text-blue-600 font-semibold text-lg cursor-pointer">
              +
            </span>
          </div>
          <div className="flex gap-3 my-4">
            <div className="flex gap-1 bg-[#014162] text-white px-3 py-2 cursor-pointer rounded-md flex-1 items-center justify-center">
              <MdOutlineShoppingCart className="text-3xl" />
              <button className="cursor-pointer">Add To Cart</button>
            </div>
            <div className="flex gap-1 text-[#014162] bg-gray-200 px-3 py-2 cursor-pointer rounded-md flex-1 items-center justify-center">
              <FaRegHeart className="text-3xl" />

              <button className="cursor-pointer">Add To Favourite</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
