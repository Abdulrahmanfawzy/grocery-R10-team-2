import { createContext, useContext } from "react";
import type { CartItem } from "@/lib/types/checkout.types";

export type CheckoutStep = "shipping" | "payment" | "confirmation";

export interface CartSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

interface CheckoutContextType {
  currentStep: CheckoutStep;
  items: CartItem[];
  summary: CartSummary;
  loading: boolean;
}

const CheckoutContext = createContext<CheckoutContextType>({
  currentStep: "shipping",
  items: [],
  summary: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
  loading: true,
});

export const useCheckout = () => useContext(CheckoutContext);

export default CheckoutContext;
