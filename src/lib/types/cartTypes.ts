// type CartItem = {

import CartItem from "@/components/common/CartItem"

// }
export type Cart = {
  id: number
  status: string
  is_empty: boolean
  item_count: number
  subtotal: number
  tax: number
  total: number
  discount: number
  created_at: string
  updated_at: string
  items: CartItems[]
}

export type CartItems = {
    id: number
    quantity: number
    unit_price: number
    subtotal: number
    discount_amount: number
    meal: {
      id: number
      title: string
      slug: string
      brand: string
      price: number
      discount_price: number
      final_price: number
      image_url: string
      rating: number
      size: string
      stock_quantity: number
      in_stock: boolean
      is_available: boolean
      category: {
        id: number
        name: string
      }
      subcategory: {
        id: number
        name: string
      }
    }
  }

export type cartInputs = {
  couponCode:number,
  address:string;
}
export type CartItemProps = {
  product:CartItems
}