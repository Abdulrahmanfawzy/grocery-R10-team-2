import CartItem from "../../components/common/CartItem";
import CarouselData from "../../components/common/CarouselData";
import { Link } from "react-router-dom";
// import type { cartItem } from "@/lib/types/cartTypes";
import Loading from "@/components/common/Loading";
import ErrorMessage from "@/components/common/ErrorMessage";
import { useCart, useClearCart } from "@/lib/api/cart";
import EmptyCart from "@/components/emptyCart/EmptyCart";
import { Button } from "@/components/ui/button";

const title: string = "Explore More";

export default function Cart() {
const{data,isLoading,isError,error} = useCart()
const {mutate} = useClearCart()
if (isLoading) {
  return <Loading></Loading>
}
if (isError) {
  return <ErrorMessage message={error.message}></ErrorMessage>
}
if (data?.is_empty) {
  return <EmptyCart></EmptyCart>
}
console.log(data);
// const total:number = (data?.tax) +( data?.total)


  return (
    <>
      <div className="bg-white p-6 w-full md:w-10/12 lg:w-9/12 mx-auto">

        <h3 className="my-6 text-2xl">Products In Cart</h3>

        <div className="rounded-lg border max-h-125 bg-white overflow-auto py-4 px-3">

          <div className="grid grid-cols-1 lg:grid-cols-2">
 
             {data?.items.map((item) => (<CartItem product={item} key={item.id} />

))}  

          </div>

        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">

          <div>
            <h2 className="text-lg font-medium mb-4">Total Amount</h2>

            <div className="bg-white border rounded-lg p-6">

              <div className="space-y-3 text-sm text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{data?.subtotal || 0} </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{data?.tax}</span>
                </div>

              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between font-medium text-gray-800">
                <span>Total</span>
                <span>{data?.total}</span>
              </div>

              <Link
                to="/checkout"
                className="w-full mt-6 inline-block px-5 bg-[#0F3D53] text-white py-3 rounded-md hover:opacity-90 transition"
              >
                Go To Checkout
              </Link>

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

                <div className="flex gap-3 flex-col xl:flex-row">

                  <input
                    type="text"
                    placeholder="Your Coupon Code ........."
                    className="flex-1 border rounded-md px-3 py-2 bg-gray-50 text-sm outline-none"
                  />

                  <button className="bg-gray-300 px-4 py-3 rounded-md text-sm cursor-pointer">
                    Apply Code
                  </button>

                </div>

              </div>

             
              <div>

                <label className="text-sm text-gray-700 block mb-2">
                  Delivery Address
                </label>

                <div className="flex gap-2 flex-col lg:flex-row">

                  <input
                    type="text"
                    placeholder="Your Address ......."
                    className="flex-1 border rounded-md px-3 py-2 bg-gray-50 text-sm outline-none"
                  />

                  <button className="bg-gray-300 px-4 py-3 cursor-pointer rounded-md text-sm">
                    Edit
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
<Button onClick={()=>{mutate()}}>Clear Cart</Button>
      </div>

      <CarouselData heading={title} />

    </>
  );
}