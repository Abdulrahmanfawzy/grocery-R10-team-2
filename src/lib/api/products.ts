// src/lib/api/products.ts
import type { Product } from "../types/productType";
import { api } from "./axios";

export const fetchProducts = async (): Promise<Product[]> => {
    const result = await api.get('/meals');

    return result.data?.data;
}
