import type { Category, Product } from "@/lib/types/typesProducts";
import Container from "../shared/Container"
import ProductCard from "../shared/ProductCard";
import CardDiscount from "../cardDiscount/CardDiscount";

type Props = {
    categories? : Category[];
    products : Product [];
    titleheading ?: string ;
    discount?: boolean;
}
const ProductSection = ({ titleheading, categories, products, discount ,  }: Props) => {
  return (
    <Container>
    <div className="space-y-6 mt-18">
        {/* Title Section */}
        <h2 className="text-4xl font-bold">{titleheading}</h2>
        {/* Category Filters */}
        <div className="space-x-4 text-right">
            {
                categories&&categories.map((cate)=>(
                    <span key={cate.id} className="font-light cursor-pointer hover:text-primary transition duration-300">{cate.title}</span>
                    
                ))
            }
            
        </div>
        {/* Product Cards */}
        <div className={`mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4`}
        >

            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {discount && <CardDiscount />}

        </div>
    </div>    
    </Container>
  )
}

export default ProductSection