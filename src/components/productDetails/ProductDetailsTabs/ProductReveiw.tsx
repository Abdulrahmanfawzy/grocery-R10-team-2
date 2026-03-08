import Rating from "@/components/common/Rating";
import vector from "../../../assets/img/ProductImage.png";
// Types 
export default function productReveiw() {
  return (
    <>
    <div className="flex gap-2 items-center mt-4">
      <div className="w-12 h-12">
        <img src={vector} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-light">Mohamed Youssef</h4>
        <Rating rating={2}></Rating>
        <p className="text-sm text-gray-400">Reviewd in 9th of december 2025 </p>       
        <p className="text-md text-gray-700">super fresh and flavourful arrived perfectly ripe </p>       
      </div>
    </div>
    </>
  );
}
