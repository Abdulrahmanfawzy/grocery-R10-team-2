import Rating from "@/components/common/Rating";
import vector from "../../../assets/img/ProductImage.png";
import { useParams } from "react-router-dom";
import { useProductDetails } from "@/lib/api/productDetails";
// Types 
export default function productReveiw() {
  const {id} = useParams()

const { data, isLoading, isError } = useProductDetails(id!)

if (!data) {
  return null
}
  return (
    <>
    <div className="flex gap-2 items-center mt-4">
      <div className="w-12 h-12">
        <img src={data.image_url} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-light">Mohamed Youssef</h4>
        <Rating rating={data?.rating}></Rating>
        <span className="text-gray-500 my-2 inline-block">{data.rating} / {data.rating_count} Review</span>
        <p className="text-sm text-gray-400">Reviewd in 9th of december 2025 </p>       
        <p className="text-md text-gray-700">super fresh and flavourful arrived perfectly ripe </p>       
      </div>
    </div>
    </>
  );
}
