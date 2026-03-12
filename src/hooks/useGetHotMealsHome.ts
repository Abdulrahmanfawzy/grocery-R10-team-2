import { api } from "@/lib/api/HomeCategory";
import type { HotMealsResponse } from "@/lib/types/typesProducts";
import { useAppSelector } from "@/store/hook";

import { useQuery } from "@tanstack/react-query";

const fetchApi = async (
  token: string,
  endPoint: string,
): Promise<HotMealsResponse> => {
  const response = await api.get(endPoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetHotMeals = (key: string, endpoint: string) => {
  const token = useAppSelector((state) => state.login.token);
  const data = useQuery({
    queryKey: [key, token],
    queryFn: () => fetchApi(token!, endpoint),
  });
  return data;
};
