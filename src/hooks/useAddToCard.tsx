import { api } from "@/lib/api/HomeCategory";
import type { AddToCart, AddToCartResponse } from "@/lib/types/cartTypes";
import { useAppSelector } from "@/store/hook";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchApi = async ({
  data,
  token,
}: {
  data: AddToCart;
  token: string | null;
}): Promise<AddToCartResponse> => {
  const response = await api.post("cart/items", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const useAddToCard = () => {

  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.login.token);

  const mutate = useMutation({
    mutationKey: ["AddToCard", token],
    mutationFn: (data: AddToCart) => fetchApi({ data, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
    },
  });
  return mutate;
};
