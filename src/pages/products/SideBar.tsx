// src/pages/products/SideBar.tsx
// import { categories } from "@/lib/constants/products";
import Filter from "./Filter";
import CheckboxItem from "./CheckboxItem";
import type { FilterState } from "@/lib/types/productType";
import { useState } from "react";
import { Search } from "lucide-react";
import PriceSlider from "./PriceSlider";
import useGetCategories from "@/hooks/useGetCategories";

const Sidebar = () => {
    const { data: categories } = useGetCategories();
    const [activeCategory, setActiveCategory] = useState<string | number>("");

    const BRANDS = ["Brand A", "Brand B", "Brand C"]
    const PRODUCT_TYPES = ["Fresh", "Organic", "Frozen"];
    const AVAILABILITY = ["In stock", "Out of stock"];

    const [filters, setFilters] = useState<FilterState>({
        brands: ["Brand A"],
        productTypes: ["Fresh"],
        availability: ["In stock"],
        priceRange: [50, 80],
        search: "",
    });

    const toggle = (key: keyof Pick<FilterState, "brands" | "productTypes" | "availability">, val: string) => {
        setFilters((f) => ({
            ...f,
            [key]: f[key].includes(val) ? f[key].filter((x) => x !== val) : [...f[key], val],
        }));
    };
    return (
        <aside className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-fit">
            {/* Categories */}
            <div className="mb-5">
                <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wide uppercase text-xs">Categories</h3>
                <ul className="space-y-0.5">
                    {categories?.map((cat) => (
                        <li key={cat.id}>
                            <button
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${activeCategory === cat.id ? "bg-sky-50 text-sky-700 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"}`}
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-0">
                {/* Brand */}
                <Filter title="Brand">
                    {BRANDS.map((b) => (
                        <CheckboxItem key={b} label={b} checked={filters.brands.includes(b)} onChange={() => toggle("brands", b)} />
                    ))}
                </Filter>

                {/* Product Type */}
                <Filter title="Product Type">
                    {PRODUCT_TYPES.map((t) => (
                        <CheckboxItem key={t} label={t} checked={filters.productTypes.includes(t)} onChange={() => toggle("productTypes", t)} />
                    ))}
                </Filter>

                {/* Availability */}
                <Filter title="Availability">
                    {AVAILABILITY.map((a) => (
                        <CheckboxItem key={a} label={a} checked={filters.availability.includes(a)} onChange={() => toggle("availability", a)} />
                    ))}
                </Filter>

                {/* Search */}
                <Filter title="Search Objects">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search your keyword..."
                            value={filters.search}
                            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                            className="w-full border border-gray-200 rounded-xl pl-3 pr-8 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
                        />
                        <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </Filter>

                {/* Price */}
                <Filter title="Filter By Price">
                    <PriceSlider min={0} max={200} value={filters.priceRange} onChange={(v) => setFilters((f) => ({ ...f, priceRange: v }))} />
                </Filter>
            </div>
        </aside>
    );
};

export default Sidebar;


