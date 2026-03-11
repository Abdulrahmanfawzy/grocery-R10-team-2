// src/lib/api/products.ts
import type { Product, ProductFilters } from "../types/productType";
import { api } from "./axios";

export const fetchProducts = async (filters: ProductFilters): Promise<Product[]> => {
    const params: any = {};

    if (filters.search) params.search = filters.search;
    if (filters.category_id) params.category_id = filters.category_id;
    if (filters.in_stock !== undefined) params.in_stock = filters.in_stock;
    if (filters.min_price !== undefined) params.min_price = filters.min_price;
    if (filters.max_price !== undefined) params.max_price = filters.max_price;
    if (filters.brand && filters.brand.length > 0) params.brand = filters.brand.join(",");

    const result = await api.get('/meals', { params });
    return result.data?.data;
};
