import FeaturesSection from '@/components/common/featuresSection/FeaturesSection'
import Hero from '@/components/common/hero/Hero'
import ProductSection from '@/components/common/productSection/ProductSection'
import PromomSection from '@/components/common/promomSection/PromomSection'
import type { Product } from '@/lib/types/typesProducts'

const Home = () => {
  const categories = [
  { id: 1, title: "Vegetables" },
  { id: 2, title: "Fruits" },
  { id: 3, title: "Coffee & teas" },
  { id: 4, title: "Meat" },
]
const productsHot : Product[] = [
  {
    id: 101,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 102,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 103,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 104,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 105,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  

]
const productsNew : Product[] = [
   {
    id: 106,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 107,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 108,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 109,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  {
    id: 110,
    title: "Peaches 2kg",
    category: "Fruits",
    by: "Fresh Farm",
    price: 55,
    image: "/peach.png",
    rating: 2.4,
    variant: "default",
  },
  
  

]
const productsBest : Product[] = [
   {
     id: 111,
    title: "Coffee 1kg",
    category: "Coffee & teas",
    by: "Coffee Co.",
    price: 20,
    oldPrice: 25,
    image: "/coffee.png",
    rating: 5,
    badges: ["Best deal "],
    sold: 20,
    total: 50,
    variant: "sale",
  },
  {
     id: 112,
    title: "Coffee 1kg",
    category: "Coffee & teas",
    by: "Coffee Co.",
    price: 20,
    oldPrice: 25,
    image: "/coffee.png",
    badges: ["save 10%"],
    rating: 5,
    sold: 20,
    total: 50,
    variant: "sale",
  },
  {
     id: 113,
    title: "Coffee 1kg",
    category: "Coffee & teas",
    by: "Coffee Co.",
    price: 20,
    oldPrice: 25,
    badges: ["Best deal "],
    image: "/coffee.png",
    rating: 5,
    sold: 20,
    total: 50,
    variant: "sale",
  },
  {
     id: 114,
    title: "Coffee 1kg",
    category: "Coffee & teas",
    by: "Coffee Co.",
    price: 20,
    oldPrice: 25,
    image: "/coffee.png",
    badges: ["save 10%"],
    rating: 5,
    sold: 20,
    total: 50,
    variant: "sale",
  },

  
  

]
   
  return (
    <>
    <Hero />
    <ProductSection titleheading="Hot Deals" categories={categories} products={productsHot} />
    <ProductSection titleheading="New Product" categories={categories} products={productsNew} />
    <PromomSection />
    <ProductSection titleheading="Daily Best Sells"  products={productsBest} discount  />
    <FeaturesSection />
    </>
  )
}

export default Home