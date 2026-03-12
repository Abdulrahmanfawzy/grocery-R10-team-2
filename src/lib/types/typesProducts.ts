// test types
export type Category = {
  id: number;
  name: string;
  slug: string;
  image_url: string | null;
};

export type CategoryResponse = {
  data: Category[];
};

export type HotMealsResponse = {
  data: Product[];
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
  image_url?: string;
  discount_price: number | null;
  final_price?: number;
  has_offer?: boolean;
  offer_title: string | null;
  rating?: number;
  rating_count?: number;
  features?: string;
  stock_quantity?: number;
  brand?: string;
  size?: string;
  is_available?: boolean;
  available_date?: string;
  created_at?: string;
};
