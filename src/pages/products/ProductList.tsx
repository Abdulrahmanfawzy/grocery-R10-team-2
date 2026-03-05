//  pages/product list 
import HeroSection from "../../components/common/HeroSection"
import bunner from "@/assets/img/productbunner.jpg";
import Sidebar from "./SideBar";
import { products } from "@/lib/constants/products";
import ProductCard from "@/components/common/ProductCard";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredProducts = selectedCategory === "All" ? products
        : products.filter
            (
                (p) => p.category === selectedCategory
            );
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <HeroSection
                image={bunner}
                subtitle="WELCOME TO OUR COMPANY"
                title={<h1 className="text-5xl font-bold text-blue">Shop</h1>}
                contentPosition="items-end"
                height="h-96"
            />

            <div className="container py-8">
                <div className="flex gap-6">
                    {/* Sidebar - 2 cols */}
                    <aside className="min-w-40 shrink-0 ">
                        <Sidebar onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductList