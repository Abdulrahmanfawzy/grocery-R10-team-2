import type { GalleryItem } from "react-image-gallery"

export type productData = {
  id:number,
  title:string,
  price:number,
  quantity:number,
  inStock:boolean,
  images:string[]
  rating?:number
  description?:string
  naturalFats?:string
}

export type galleryProps = {
  images:GalleryItem[]
}