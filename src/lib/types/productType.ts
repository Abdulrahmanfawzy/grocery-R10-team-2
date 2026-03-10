export type Category = "All" | "Fruits" | "Vegetables" | "Bakery";

export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviewCount: number;
    category?: Exclude<Category, "All">;
    image: string;
    oldPrice?: number;
    badges: string[];
    emoji: string;
    by?: string;
    variant?: string
}


export type ProductCardProps = {
    product: Product;
};


export interface FilterState {
    brands: string[];
    productTypes: string[];
    availability: string[];
    priceRange: [number, number];
    search: string;
}