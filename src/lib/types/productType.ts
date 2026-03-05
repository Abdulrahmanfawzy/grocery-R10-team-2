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
    badges: string[];
    emoji: string;
}