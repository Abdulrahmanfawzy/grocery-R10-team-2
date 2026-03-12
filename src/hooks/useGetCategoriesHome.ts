import { api } from "@/lib/api/HomeCategory";
import type { CategoryResponse } from "@/lib/types/typesProducts";
import { useAppSelector } from "@/store/hook";

import { useQuery } from "@tanstack/react-query";

const fetchApi = async (token: string): Promise<CategoryResponse> => {
  const response = await api.get("categories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetCategoriesMeals = () => {
  const token = useAppSelector((state) => state.login.token);
  const data = useQuery({
    queryKey: ["CategoriesHome", token],
    queryFn: () => fetchApi(token!),
  });
  return data;
};
