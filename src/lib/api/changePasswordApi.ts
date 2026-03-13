import api from "@/lib/api/checkoutApi";

export async function changePassword(data: {
  current_password: string;
  password: string;
  password_confirmation: string;
}) {
  const response = await api.post("/auth/change-password", data);
  return response.data;
}
