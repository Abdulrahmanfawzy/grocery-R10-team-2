// src/hooks/useGetCategories.ts
import { fetchCategories } from "@/lib/api/categories";
import type { CategoryApiItem } from "@/lib/types/productType";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const useGetCategories = (): UseQueryResult<CategoryApiItem[]> => {
    const query = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60, // 1 minute
    });
    return query;
}

export default useGetCategories;