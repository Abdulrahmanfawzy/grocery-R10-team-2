// lib/api/brands
import type { Brand } from "../types/productType";
import { api } from "./axios";

export const fetchBrands = async (): Promise<Brand[]> => {
    const result = await api.get('/brands');

    return result.data?.data;
}

