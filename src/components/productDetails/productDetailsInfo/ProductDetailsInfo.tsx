import ProductDetailsGallery from "../productDetailsGallery/ProductDetailsGallery";
import { Button } from "../../ui/button";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
// import type { productData } from "@/lib/types/productDetailsTypes";
// import type { GalleryItem } from "react-image-gallery";
import { useProductDetails } from "@/lib/api/productDetails";
import { useParams } from "react-router-dom";
import Rating from "@/components/common/Rating";
import Loading from "@/components/common/Loading";
import ErrorMessage from "@/components/common/ErrorMessage";
import { useAddToCart} from "@/lib/api/cart";
import { useQuantity } from "@/hooks/useUpdateQuantity";
export default function ProductDetailsInfo() {
  const{quantity,setQuantity} = useQuantity()
const {id} = useParams()
const {mutate} = useAddToCart()
// const {mutate} = useUpdataQuantity()

const { data, isLoading, isError,error } = useProductDetails(id!)
if (isLoading) {
  return <Loading></Loading>
}

if (isError) {
  
  return <ErrorMessage message={error.message}></ErrorMessage>
  
}

console.log(data);

if(!data) return null
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 my-4 gap-12">
        <ProductDetailsGallery product={data}></ProductDetailsGallery>
                <div className="product-data ">
          <div className="flex flex-col gap-3 border-b py-6 mb-2 ">
            <h2 className="text-2xl text-[#014162] font-semibold">
              {data?.title}
            </h2>
            <p className="text-gray-400">{data.description}</p>
            <span className="text-gray-700 ">{data?.final_price}</span>
            <span className="text-gray-700 line-through l">{data.price !== data.final_price?data.price:""}</span>
            <span className="text-gray-900 l bg-gray-300 px-2 py-1 rounded-md font-medium w-fit text-md hover:bg-gray-100 transition-colors duration-300">{data?.category.name}</span>
            <span className="text-gray-600 l bg-gray-200 px-2 py-1 rounded-md font-medium w-fit text-md hover:bg-gray-100 transition-colors duration-300">{data?.in_stock?"In Stock":"Out of Stock"}</span>
            {
data?.stock_quantity!==0 && <span className="text-gray-600 l bg-gray-200 px-2 py-1 rounded-md font-medium w-fit text-md hover:bg-gray-100 transition-colors duration-300">Quantity is {data.stock_quantity}</span>
            }
            
            <Button className="bg-gray-200 font-medium w-fit text-gray-700 text-md hover:bg-gray-100 transition-colors duration-300">
              <MdOutlineAccessAlarm />
              Priority Delivery Available
            </Button>
          </div>
          {<Rating rating={data.rating}></Rating> } <span className="text-gray-500 my-2 inline-block">{data.rating} / {data.rating_count} Review</span>
          <p className="text-md mt-3 mb-2">Quantity</p>
          {data.in_stock&&
          <div className="flex items-center border rounded-md px-4 py-1 gap-6 w-fit">
            <span className="text-blue-600 font-semibold text-lg cursor-pointer"
            onClick={()=>{setQuantity(quantity-1)}}>
            {/* onClick={()=>{mutate({mealId:data.id,quantity:data?.stock_quantity + 1})}}> */}
              -
            </span>
            <span className="text-sm">{quantity}</span>
            <span className="text-blue-600 font-semibold text-lg cursor-pointer"
            onClick={()=>{setQuantity(quantity+1)}}>
              +
            </span>
          </div>
          }
          <div className="flex gap-3 my-4">
            <div className="flex gap-1 bg-[#014162] text-white px-3 py-2 cursor-pointer rounded-md flex-1 items-center justify-center">
              <MdOutlineShoppingCart className="text-3xl" />
              <button className="cursor-pointer" onClick={()=>{mutate({mealId:data.id,quantity:quantity})}} disabled={!data.in_stock}>Add To Cart</button>

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
