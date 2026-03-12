import axios from "axios";
import type { productData } from "../types/productDetailsTypes";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hook";

export const fetchProductsbyId = async (
  id: string,
  token: string | null,
): Promise<productData> => {
  const { data } = await axios.get(
    `https://grocery.newcinderella.online/api/meals/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.data;
};

export const useProductDetails = (id: string): UseQueryResult<productData> => {
  const token = useAppSelector((state) => state.login.token);
  return useQuery({
    queryKey: ["productDetails", id ,token],
    queryFn: () => fetchProductsbyId(id, token),
  });
};

export const fetchProducts = async (
  token: string | null,
): Promise<productData[]> => {
  const { data } = await axios.get(
    `https://grocery.newcinderella.online/api/meals`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.data;
};

export const useProducts = (): UseQueryResult<productData[]> => {
  const token = useAppSelector((state) => state.login.token);
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(token),
  });
};
