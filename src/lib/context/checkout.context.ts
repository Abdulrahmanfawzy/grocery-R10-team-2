import { createContext } from "react";

type CheckoutStep = "shipping" | "payment" | "confirmation";

interface CheckoutContextType {
  currentStep: CheckoutStep;
}

const CheckoutContext = createContext<CheckoutContextType>({
  currentStep: "shipping",
});

export default CheckoutContext;
