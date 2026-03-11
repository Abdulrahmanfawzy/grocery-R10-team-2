import ProductCartEslam from "@/components/common/ProductCartEslam"
import type { GalleryItem } from "react-image-gallery"

export type productData = {
  id: number
  title: string
  description: string
  price: number
  discount_price: number
  final_price: number
  image_url: string
  rating: number
  rating_count: number
  brand: string
  size: string
  in_stock: boolean
  stock_quantity: number
  category: {
  id: number
  name: string
  slug: string
}
}

export type productDetailsProps ={
  product:productData
}

// export type galleryProps = {
//   images:GalleryItem[]
// }
