//  pages/product list 
import HeroSection from "../../components/common/HeroSection"
import bunner from "@/assets/productbunner.jpg";
import Sidebar from "./SideBar";

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
            />


            <div className="container py-8">
                <Sidebar />
            </div>
            {/* Main Content */}
            {/* <div className="container mx-auto px-4 py-8">
                <div className="grid  gap-8">
                    <aside className="md:w-64 shrink-0">
                        <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                                Categories
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </h2>
                            <ul className="space-y-1">
                                {categories.map((category, index) => (
                                    <CategoryItem key={index} name={category.name} count={category.count} />
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </main>
                </div>
            </div> */}
        </>
    )
}

export default ProductList