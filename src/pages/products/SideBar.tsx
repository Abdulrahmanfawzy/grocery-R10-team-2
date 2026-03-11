// src/pages/products/SideBar.tsx
import Filter from "./Filter";
import type { SidebarProps } from "@/lib/types/productType";
import { useState } from "react";
import { Search } from "lucide-react";
import PriceSlider from "./PriceSlider";
import useGetCategories from "@/hooks/useGetCategories";
import useGetBrands from "@/hooks/useGetBrands";
import { CheckboxItem } from "./CheckboxItem";

const Sidebar = ({ filters, setFilters }: SidebarProps) => {
    const { data: categories } = useGetCategories();
    const { data: brands = [] } = useGetBrands();
    const [activeCategory, setActiveCategory] = useState<string | number>("All");

    const AVAILABILITY = ["In stock", "Out of stock"];
    const brandsSelected = filters.brand || [];
    // const toggleBrand = (brand: string) => {
    //     setFilters((f) => {

    //         const current = f.brand || [];

    //         if (current.includes(brand)) {
    //             return {
    //                 ...f,
    //                 brand: current.filter((b) => b !== brand)
    //             };
    //         }

    //         return {
    //             ...f,
    //             brand: [...current, brand]
    //         };
    //     });
    // };

    return (
        <aside className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-fit">
            {/* Categories */}
            <div className="mb-5">
                <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-wide uppercase text-xs">Categories</h3>
                <ul className="space-y-0.5">
                    <li>
                        <button
                            onClick={() => {
                                setActiveCategory("All");
                                setFilters((f) => ({
                                    ...f,
                                    category_id: ""
                                }));
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all 
                                ${activeCategory === "All"
                                    ? "bg-sky-50 text-sky-700 font-semibold"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                                }`}
                        >
                            All
                        </button>
                    </li>
                    {categories?.map((cat) => (
                        <li key={cat.id}>
                            <button
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setFilters((f) => ({
                                        ...f,
                                        category_id: cat.id
                                    }));
                                }}
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
                    {/* زرار All */}
                    <CheckboxItem
                        label="All"
                        checked={brandsSelected.length === 0 || brandsSelected.length === brands.length}
                        onChange={() =>
                            setFilters((f) => ({
                                ...f,
                                brand: [] // [] تعني كل البراندات
                            }))
                        }
                    />

                    {brands.map((b) => (
                        <CheckboxItem
                            key={b}
                            label={b}
                            checked={brandsSelected.includes(b)}
                            onChange={() => {
                                const current = brandsSelected.includes(b)
                                    ? brandsSelected.filter((x) => x !== b)
                                    : [...brandsSelected, b];
                                setFilters((f) => ({
                                    ...f,
                                    brand: current
                                }));
                            }}
                        />
                    ))}
                </Filter>

                {/* Availability */}
                <Filter title="Availability">
                    {AVAILABILITY.map((a) => (
                        <CheckboxItem
                            key={a}
                            label={a}
                            checked={
                                (a === "In stock" && filters.in_stock === 1) ||
                                (a === "Out of stock" && filters.in_stock === 0)
                            }
                            onChange={() =>
                                setFilters((f) => ({
                                    ...f,
                                    in_stock: a === "In stock" ? 1 : 0
                                }))
                            }
                        />
                    ))}
                </Filter>

                {/* Search */}
                <Filter title="Search Objects">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search your keyword..."
                            value={filters.search}
                            onChange={(e) =>
                                setFilters((f) => ({
                                    ...f,
                                    search: e.target.value
                                }))
                            }
                            className="w-full border border-gray-200 rounded-xl pl-3 pr-8 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
                        />
                        <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </Filter>

                {/* Price */}
                <Filter title="Filter By Price">
                    <PriceSlider
                        min={0}
                        max={200}
                        value={[filters.min_price || 0, filters.max_price || 200]}
                        onChange={(v) =>
                            setFilters((f) => ({
                                ...f,
                                min_price: v[0],
                                max_price: v[1]
                            }))
                        }
                    />
                </Filter>
            </div>
        </aside>
    );
};

export default Sidebar;


