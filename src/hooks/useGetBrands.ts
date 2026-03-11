import { fetchBrands } from "@/lib/api/brand";
import type { Brand } from "@/lib/types/productType";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const useGetBrands = (): UseQueryResult<Brand[]> => {
    const query = useQuery({
        queryKey: ["brands"],
        queryFn: fetchBrands,
        staleTime: 1000 * 60,
    });

    return query;
};

export default useGetBrands;