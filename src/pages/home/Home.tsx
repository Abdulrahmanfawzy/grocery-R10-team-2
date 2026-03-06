import FeaturesSection from '@/components/featuresSection/FeaturesSection'
import Hero from '@/components/hero/Hero'
import ProductSection from '@/components/productSection/ProductSection'

import PromomSection from '@/components/promomSection/PromomSection'
import { categories, productsBest, productsHot, productsNew } from '@/lib/data/datahome'

const Home = () => {


  return (
    <>
      <Hero />
      <ProductSection titleheading="Hot Deals" categories={categories} products={productsHot} />
      <ProductSection titleheading="New Product" categories={categories} products={productsNew} />
      <PromomSection />
      <ProductSection titleheading="Daily Best Sells" products={productsBest} discount />
      <FeaturesSection />
    </>
  )
}

export default Home