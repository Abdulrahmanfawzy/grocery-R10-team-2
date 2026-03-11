// src/hooks/useGetProducts.ts
import { fetchProducts } from "@/lib/api/products";
import type { Product, ProductFilters } from "@/lib/types/productType";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const useGetProducts = (filters: ProductFilters): UseQueryResult<Product[]> => {
    const query = useQuery({
        queryKey: ["products", filters],
        queryFn: () => fetchProducts(filters),

        staleTime: 1000 * 60, // 1 minute
    });
    return query;
}

export default useGetProducts;