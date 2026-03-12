//  pages/product list 
import HeroSection from "../../components/common/HeroSection"
import bunner from "@/assets/img/productbunner.jpg";
import Sidebar from "./SideBar";
import ProductCard from "@/components/common/ProductCard";
import { useState } from "react";
import FeaturesSection from "@/components/featuresSection/FeaturesSection";
import { SlidersHorizontal } from "lucide-react";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";
import useGetProducts from "@/hooks/useGetProducts";
import type { ProductFilters } from "@/lib/types/productType";

const ProductList = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filters, setFilters] = useState<ProductFilters>({
        search: "",
        category_id: "",
        in_stock: undefined,
        min_price: 0,
        max_price: 200,
        brand: [],
    });
    const { data: productData = [], isLoading } = useGetProducts(filters);

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

                {/* Top bar */}
                <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between lg:hidden sticky top-0 z-30 shadow-sm">
                    <span className="font-bold text-gray-800 text-base">🛒 Fresh Market</span>

                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-xl text-sm font-medium"
                    >
                        <SlidersHorizontal size={14} /> Filters
                    </button>
                </div>

                <div className="flex gap-6">

                    {/* Sidebar overlay (mobile) */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Sidebar - 2 cols */}
                    <aside
                        className={`
                            fixed lg:static top-0 left-0 h-full  bg-white z-0 
                            w-64 p-4 transform transition-transform duration-300
                            ${sidebarOpen ? "translate-x-0 z-50 overflow-scroll" : "-translate-x-full"}
                            lg:translate-x-0 lg:block
                        `}
                    >
                        {/* close button mobile */}
                        <div className="flex justify-between items-center mb-4 lg:hidden">
                            <span className="font-semibold">Filters</span>

                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-gray-500"
                            >
                                ✕
                            </button>
                        </div>

                        <Sidebar
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </aside>


                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div className=" grid grid-cols-1 sm:grid-cols-2   xl:grid-cols-3 gap-4">
                            {isLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                    <ProductCardSkeleton key={i} />
                                ))
                                : productData.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        version="v2"
                                    />
                                ))
                            }
                        </div>

                    </main>

                </div>
                <FeaturesSection />
            </div>
        </>
    )
}

export default ProductList