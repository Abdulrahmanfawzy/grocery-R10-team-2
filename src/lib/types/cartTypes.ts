export type cartItem = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  inStock: string;
};
export type cartItemProps = {
  productInfo: cartItem;
};

export type cartInputs = {
  couponCode: number;
  address: string;
};

export type AddToCart = {
  meal_id: number;
  quantity: number;
};

export interface CategoryInfo {
  id: number;
  name: string;
}

export interface Meal {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  discount_price: number;
  final_price: number;
  rating: number;
  size: string;
  brand: string;
  stock_quantity: number;
  is_available: boolean;
  in_stock: boolean;
  category: CategoryInfo;
  subcategory: CategoryInfo;
}

export interface CartItem {
  id: number;
  meal: Meal;
  quantity: number;
  unit_price: number;
  discount_amount: number;
  subtotal: number;
}

export interface CartData {
  id: number;
  status: string;
  items: CartItem[];
  item_count: number;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  is_empty: boolean;
  created_at: string;
  updated_at: string;
}

export interface AddToCartResponse {
  success: boolean;
  message: string;
  data: CartData;
}
