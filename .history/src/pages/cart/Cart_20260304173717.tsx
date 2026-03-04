import CartItem from "../../components/common/shared/CartItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function Cart() {
  return (
    <>
      <div className="bg-white p-6  w-full md:w-10/12 lg:w-9/12 mx-auto">
        <h3 className="my-6">Products In Cart</h3>
        <div className=" rounded-lg border max-h-125 bg-white overflow-auto py-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-x">
<CartItem></CartItem>
<CartItem></CartItem>
<CartItem></CartItem>
<CartItem></CartItem>
<CartItem></CartItem>

          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Total Amount</h2>

            <div className="bg-white border rounded-lg p-6">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span> 1771.45</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span> 40</span>
                </div>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between font-medium text-gray-800">
                <span>Total</span>
                <span> 1881.45</span>
              </div>

              <button className="w-full mt-6 bg-[#0F3D53] text-white py-3 rounded-md hover:opacity-90 transition">
                Go To Checkout
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">
              Delivery Details & Promo Code
            </h2>

            <div className="bg-white border rounded-lg p-6 space-y-6">
              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Promo Code
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value="Save10"
                    readOnly
                    className="flex-1 border rounded-md px-3 py-2 bg-gray-50 text-sm outline-none"
                  />

                  <button className="bg-gray-300 px-5 rounded-md text-sm">
                    Apply Code
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Delivery Address
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value="Villa 14, Street 23, District 5, New Cairo, Cairo"
                    readOnly
                    className="flex-1 border rounded-md px-3 py-2 bg-gray-50 text-sm outline-none"
                  />

                  <button className="bg-gray-300 px-5 rounded-md text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      </div>
    </>
  );
}
