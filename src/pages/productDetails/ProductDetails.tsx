import ProductDetailsInfo from "@/components/productDetails/productDetailsInfo/ProductDetailsInfo";
// import { useParams} from "react-router-dom";
import ProductTabs from "@/components/productDetails/ProductDetailsTabs/ProductTabs";
import CarouselData from "@/components/common/CarouselData"


const title:string = "Exploer More"
const titleTwo:string = "Frequently Bought Together"

export default function ProductDetails() {
  return<>
      <div className="w-10/12  mx-auto">
           <ProductDetailsInfo></ProductDetailsInfo>
           <ProductTabs></ProductTabs>
            <CarouselData heading={title}></CarouselData>
            <CarouselData heading={titleTwo}></CarouselData>
       </div> 
    </>
  
}
