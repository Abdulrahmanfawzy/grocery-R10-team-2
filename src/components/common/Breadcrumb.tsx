import { Link } from "react-router-dom";

interface Props {
  currentPage: string;
}

const fixedLinks = [
  { label: "Home", to: "/" },
  { label: "Fresh Products", to: "/products" },
  { label: "Cart", to: "/cart" },
];

function CheckoutBreadcrumb({ currentPage }: Props) {
  return (
    <nav className="text-md text-gray-400 mb-4">
      {fixedLinks.map((link) => {
        return (
          <span key={link.label}>
            <Link to={link.to} className="hover:text-gray-600">
              {link.label}
            </Link>
            <span className="mx-2">/</span>
          </span>
        );
      })}
      <span className="text-gray-700 font-medium">{currentPage}</span>
    </nav>
  );
}

export default CheckoutBreadcrumb;
