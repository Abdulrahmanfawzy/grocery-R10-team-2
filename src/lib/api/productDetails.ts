import axios from "axios"
import type { productData } from "../types/productDetailsTypes"
import { useQuery,type UseQueryResult } from "@tanstack/react-query"
export const token:string = "382|xVxBr5VbVoOnWbOdRbresefiz7L26958KdqKxVZT16fe4d29"
export const fetchProductsbyId = async (id:string):Promise<productData>=>{
  const { data } = await axios.get(`https://grocery.newcinderella.online/api/meals/${id}`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return data.data
}


export const useProductDetails = (id:string):UseQueryResult<productData> => {
return  useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductsbyId(id),
  })

}

export const fetchProducts = async ():Promise<productData[]>=>{
  const { data } = await axios.get(`https://grocery.newcinderella.online/api/meals`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return data.data
}


export const useProducts = ():UseQueryResult<productData[]>=>{
return  useQuery({
    queryKey: ["products",],
    queryFn: () => fetchProducts(),
  })
}