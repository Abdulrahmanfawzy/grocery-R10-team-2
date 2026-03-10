// src/hooks/useGetProducts.ts
import { fetchProducts } from "@/lib/api/products";
import type { Product } from "@/lib/types/productType";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const useGetProducts = (): UseQueryResult<Product[]> => {
    const query = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60, // 1 minute
    });
    return query;
}

export default useGetProducts;