import ProductDetailsInfo from "@/components/productDetails/productDetailsInfo/ProductDetailsInfo";
// import { useParams} from "react-router-dom";
import type { productData } from "@/lib/types/productDetailsTypes";
import imgProduct from "../../assets/img/ProductImage.png"
import ProductTabs from "@/components/productDetails/ProductDetailsTabs/ProductTabs";
import CarouselData from "@/components/common/CarouselData"


const title:string = "Exploer More"
const titleTwo:string = "Frequently Bought Together"

export default function ProductDetails() {
  // const {id} = useParams()

const product: productData = {
  id: 1,
  title: "Premium organic Orange",
  price: 20,
  quantity: 5,
  inStock: true,
  images:[imgProduct,imgProduct,imgProduct]
}
  return<>
      <div className="w-10/12  mx-auto">
           <ProductDetailsInfo productInfo={product}></ProductDetailsInfo>
           <ProductTabs></ProductTabs>
            <CarouselData heading={title}></CarouselData>
            <CarouselData heading={titleTwo}></CarouselData>
       </div> 
    </>
  
}
