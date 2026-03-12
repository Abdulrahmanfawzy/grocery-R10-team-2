import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const breadcrumbLinks = {
  shipping: {
    links: [
      { label: "Home", to: "/" },
      { label: "Fresh Products", to: "/products" },
      { label: "Cart", to: "/cart" },
    ],
    current: "Checkout (Shipping)",
  },
  payment: {
    links: [
      { label: "Home", to: "/" },
      { label: "Fresh Products", to: "/products" },
      { label: "Cart", to: "/cart" },
      { label: "Shipping", to: "/checkout/shipping" },
    ],
    current: "Checkout (Payment)",
  },
  confirmation: {
    links: [
      { label: "Home", to: "/" },
      { label: "Fresh Products", to: "/products" },
      { label: "Cart", to: "/cart" },
      { label: "Shipping", to: "/checkout/shipping" },
      { label: "Payment", to: "/checkout/payment" },
    ],
    current: "Confirmation",
  },
};

function CheckoutBreadcrumb() {
  const {currentStep} = useCheckout();
  const {links, current} = breadcrumbLinks[currentStep];

  return (
    <nav className="text-md text-gray-400 mb-4">
      {links.map((link) => {
        return (
          <span key={link.label}>
            <Link to={link.to} className="hover:text-gray-600">
              {link.label}
            </Link>
            <span className="mx-2">/</span>
          </span>
        );
      })}
      <span className="text-gray-700 font-medium">{current}</span>
    </nav>
  );
}

export default CheckoutBreadcrumb;
