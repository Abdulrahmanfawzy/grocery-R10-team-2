import Loading from "@/components/common/Loading"
import { useProductDetails } from "@/lib/api/productDetails"
import { useParams } from "react-router-dom"


export default function productDescription() {
  const {id} = useParams()

const { data, isLoading, isError } = useProductDetails(id!)
if (isLoading) {
  return <Loading></Loading>
}
  return (
    <div>
      <p className="text-gray-500 text-md" >{data?.description}</p>
    </div>
  )
}
