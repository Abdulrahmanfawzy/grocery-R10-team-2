import CheckoutContext from "@/lib/context/checkout.context";
import { useContext } from "react";

export const useCheckout = () => useContext(CheckoutContext);
