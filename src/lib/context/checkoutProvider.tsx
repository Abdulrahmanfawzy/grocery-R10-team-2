import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CheckoutContext, { type CheckoutStep } from "./checkout.context";
import { getCart } from "@/lib/api/cart";
import type { CartItem } from "@/lib/types/checkout.types";

const stepFromPath = (pathname: string): CheckoutStep => {
  if (pathname.includes("payment")) return "payment";
  if (pathname.includes("confirmation")) return "confirmation";
  return "shipping";
};

function CheckoutProvider() {
  const location = useLocation();
  const currentStep = stepFromPath(location.pathname);

  const [items, setItems] = useState<CartItem[]>([]);
  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart()
      .then((data) => {
        setItems(data.items);
        setSummary({
          subtotal: data.subtotal,
          shipping: 0,
          tax: data.tax,
          total: data.total,
        });
      })
      .catch((err) => console.error("Failed to load cart:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CheckoutContext.Provider value={{ currentStep, items, summary, loading }}>
      <Outlet />
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
