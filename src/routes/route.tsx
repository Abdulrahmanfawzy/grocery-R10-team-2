//route.tsx
import Mainlayout from "@/components/layout/mainLayout/Mainlayout";
import { Login } from "@/pages/Aurh/Login";
import PasswordRecovery from "@/pages/Aurh/PasswordRecovery";
import { PasswordRecoveryWithPhone } from "@/pages/Aurh/PasswordRecoveryWithPhone";
import { Register } from "@/pages/Aurh/Register";
import { ResendPassword } from "@/pages/Aurh/ResendPassword";
import VerificationCode from "@/pages/Aurh/VerificationCode";
import Cart from "@/pages/cart/Cart";
import Confirmation from "@/pages/checkout/Confirmation";
import Payment from "@/pages/checkout/Payment";
import Shipping from "@/pages/checkout/Shipping";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import ProductList from "@/pages/products/ProductList";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <Mainlayout />, // 👈 هنا ال Navbar + Footer
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <ProductList />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
         {
        path: "product-details/:id",
        element: <ProductDetails />,
      },

      {
        path: "checkout",
        children: [
          {
            index: true,
            element: <Shipping />,
          },
          {
            path: "shipping",
            element: <Shipping />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "confirmation",
            element: <Confirmation />,
          },
        ],
      },
    ],
  },

  // Auth
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/password-recovery-phone",
    element: <PasswordRecoveryWithPhone />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },
  {
    path: "/resend-password",
    element: <ResendPassword />,
  },
]);
