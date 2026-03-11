import api from "./checkoutApi";

export interface AddressPayload {
  full_name: string;
  phone: string;
  street_address: string;
  city: string;
}

export async function storeAddress(payload: AddressPayload) {
  const response = await api.post("/addresses", payload);
  return response.data;
}
