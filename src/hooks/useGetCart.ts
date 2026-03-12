import { api } from "@/lib/api/HomeCategory";
import type { AddToCartResponse } from "@/lib/types/cartTypes";
import { useAppSelector } from "@/store/hook";

import { useQuery } from "@tanstack/react-query";

const fetchApi = async (token: string): Promise<AddToCartResponse> => {
  const response = await api.get("cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const useGetCart = () => {
  const token = useAppSelector((state) => state.login.token);
  const data = useQuery({
    queryKey: ["Cart", token],
    queryFn: () => fetchApi(token!),
  });

  return data;
};
