import api from "./checkoutApi";
import type { CartItem } from "@/lib/types/checkout.types";

export async function getCart() {
  const response = await api.get("/cart");
  const data = response.data.data;

  const items: CartItem[] = data.items.map((item: any) => ({
    id: item.id,
    name: item.meal.title,
    quantity: item.quantity,
    price: item.unit_price,
    imageUrl: item.meal.image_url,
    inStock: item.meal.in_stock,
  }));

  return {
    items,
    subtotal: data.subtotal,
    tax: data.tax,
    total: data.total,
  };
}

export async function updateCartItem(id: string, quantity: number) {
  const response = await api.put(`/cart/items/${id}`, { quantity });
  return response.data;
}
