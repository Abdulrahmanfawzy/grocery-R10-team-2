//  pages/product list 
import HeroSection from "../../components/common/HeroSection"
import bunner from "@/assets/productbunner.jpg";

const ProductList = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                image={bunner}
                subtitle="WELCOME TO OUR COMPANY"
                title={<h1 className="text-5xl font-bold text-blue">Shop</h1>}
                contentPosition="items-end"
                height="h-96"
            />;
        </>
    )
}

export default ProductList