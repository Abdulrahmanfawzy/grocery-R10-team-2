import type { CategoryApiItem } from "../types/productType";
import { api } from "./axios";

export const fetchCategories = async (): Promise<CategoryApiItem[]> => {
    const result = await api.get('/categories');

    return result.data?.data;
}

