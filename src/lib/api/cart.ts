
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { token } from "./productDetails"
import {toast } from 'react-toastify';
import type { Cart } from "../types/cartTypes"
// import api from "./checkoutApi";
// import type { CartItem } from "@/lib/types/checkout.types";

    export const getCartProducts = async ():Promise<Cart>=>{
      const { data } = await axios.get(`https://grocery.newcinderella.online/api/cart`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      return data.data
    }


export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartProducts
  })
}


export const addToCart = async ({mealId,quantity}:{mealId:number,quantity:number}) => {
    try {
        const { data } = await axios.post(
    "https://grocery.newcinderella.online/api/cart/items",
    {
      meal_id: mealId,
      quantity:quantity
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
// console.log(data);

  return data  
    } catch (error:any) {
        // console.log(error.response.data);
        throw error
        
    }

}
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddToCart = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addToCart,

    onSuccess: () => {
        queryClient.invalidateQueries({
        queryKey: ["cart"]})
        toast("Your Product Added To cart Successfully")
    }
  })
}




export const updateCart = async ({mealId,quantity}:{mealId:number,quantity:number}) => {
  const { data } = await axios.put(
    `https://grocery.newcinderella.online/api/cart/items/${mealId}`,
    {
      quantity:quantity
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return data
}

export const useUpdataQuantity = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCart,

    onSuccess: () => {
        queryClient.invalidateQueries({
        queryKey: ["cart"]})
        toast.success("Your Product Quantity updated Successfully")
    }
  })
}

export const removeCartItem = async (itemId:number)=>{
  const {data} = await axios.delete(
    `https://grocery.newcinderella.online/api/cart/items/${itemId}`,
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
  )

  return data
}

export const useRemoveCartItem = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey:["cart"]
      })
      toast.success("Your Product Have been Removed From Cart")
    }
  })
}

export const clearCart = async ()=>{
  const {data} = await axios.delete(
    `https://grocery.newcinderella.online/api/cart/clear`,
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
  )

  return data
}

export const useClearCart = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: clearCart,
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey:["cart"]
      })
      toast.success("Your Cart is Cleared Now")
    }
  })

}

// export async function getCart() {
//   const response = await api.get("/cart");
//   const data = response.data.data;

//   const items: CartItem[] = data.items.map((item: any) => ({
//     id: item.id,
//     name: item.meal.title,
//     quantity: item.quantity,
//     price: item.unit_price,
//     imageUrl: item.meal.image_url,
//     inStock: item.meal.in_stock,
//   }));

//   return {
//     items,
//     subtotal: data.subtotal,
//     tax: data.tax,
//     total: data.total,
//   };
// }

// export async function updateCartItem(id: string, quantity: number) {
//   const response = await api.put(`/cart/items/${id}`, { quantity });
//   return response.data;
// }
