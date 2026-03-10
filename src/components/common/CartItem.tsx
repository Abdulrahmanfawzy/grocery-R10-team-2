import type { cartItemProps } from "@/lib/types/cartTypes";
export default function CartItem({productInfo}:cartItemProps) {
  
  return <>
    <div className="flex gap-6 p-6 [:nth-child(-n+2)]:border-t-0 border-t">
      <div className="flex items-center flex-col gap-2">
        <img
          src={productInfo.img}
          alt={productInfo.name}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-black text-white">
            {productInfo.inStock}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-3">
        <h3 className="text-md font-medium text-gray-800">
          {productInfo.name}
        </h3>
        <div className="flex gap-12 items-center">
          <div className="flex items-center border rounded-md px-4 py-1 gap-6 ">
            <span className="text-blue-600 font-semibold text-lg cursor-pointer">
              -
            </span>
            <span className="text-sm">{productInfo.quantity}</span>
            <span className="text-blue-600 font-semibold text-lg cursor-pointer">
              +
            </span>
          </div>
          <span className="font-medium text-gray-800 text-md">{productInfo.price}</span>
        </div>
      </div>
    </div>
  </>

}
