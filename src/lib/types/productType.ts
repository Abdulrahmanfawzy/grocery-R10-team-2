// export type Category = "All" | "Fruits" | "Vegetables" | "Bakery";

export interface CategoryApiItem {
    id: number | string;
    name: string;
    slug: string;
    description?: string;
    image_url?: string;
    meals_count?: number;
    sort_order?: number;
    created_at?: string;
    icon?: string;
}


export interface Product {
    id: number;
    title: string;
    slug: string;
    description: string;
    image_url: string | null;
    offer_title: string | null;
    price: number;
    discount_price: number;
    final_price: number;
    has_offer: boolean;
    rating: number;
    rating_count: number;
    size: string;
    brand: string;
    stock_quantity: number;
    in_stock: boolean;
    is_featured: boolean;
    sold_count: number;
    category: {
        id: number;
        name: string;
    };
    subcategory: {
        id: number;
        name: string;
    } | null;
    features: string;
    is_favorited: boolean;
    created_at: string;
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