import api from "./checkoutApi";

export interface OrderPayload {
  payment_method: "card" | "cash_on_delivery";
  delivery_type: "delivery" | "pickup";
  address_id: number;
  amount: number;
  payment_method_id?: string;
}

export async function storeOrder(payload: OrderPayload) {
  const response = await api.post("/orders", payload);
  return response.data;
}
