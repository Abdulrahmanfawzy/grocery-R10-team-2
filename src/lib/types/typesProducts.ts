// test types
export type Category = {
    id : number ;
    title : string ;
}



export type Product = {
  id: number
  title: string
  category: string
  by: string
  price: number
  oldPrice?: number
  image: string
  rating: Rating
  sold?: number
  total?: number
  badges?: string[]
  variant: "default" | "sale" | "quantity"
}