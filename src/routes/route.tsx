//route.tsx
import { ProtectesRoute } from "@/components/Auth/ProtectedRoutes/ProtectesRoute";
import Mainlayout from "@/components/layout/mainLayout/Mainlayout";
import Profilelayout from "@/components/layout/profilelayout/Profilelayout";
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
import Addresess from "@/pages/profile/Addresess";
import Dashboard from "@/pages/profile/Dashboard";
import Help from "@/pages/profile/Help";
import Loyalty from "@/pages/profile/Loyalty";
import OrderHistory from "@/pages/profile/OrderHistory";
import PaymentWallet from "@/pages/profile/PaymentWallet";
import PersonalInfo from "@/pages/profile/PersonalInfo";
import Security from "@/pages/profile/Security";
import Settings from "@/pages/profile/Settings";
import SmartLists from "@/pages/profile/SmartLists";
import { createBrowserRouter } from "react-router-dom";
import CheckoutProvider from "@/lib/context/checkoutProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
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
        element: <CheckoutProvider />,
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

      // Profile
      {
        path: "profile",
        element: <Profilelayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "personal-info", element: <PersonalInfo /> },
          { path: "payment", element: <PaymentWallet /> },
          { path: "orders", element: <OrderHistory /> },
          { path: "smart", element: <SmartLists /> },
          { path: "address", element: <Addresess /> },
          { path: "security", element: <Security /> },
          { path: "loyalty", element: <Loyalty /> },
          { path: "help", element: <Help /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },

  // Auth
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/password-recovery", element: <PasswordRecovery /> },
  { path: "/password-recovery-phone", element: <PasswordRecoveryWithPhone /> },
  { path: "/verification-code", element: <VerificationCode /> },
  { path: "/resend-password", element: <ResendPassword /> },
  {
    element: <ProtectesRoute />,
    children: [
      { path: "/Login", element: <Login /> },
      {
        path: "/Register",
        element: <Register />,
      },
      { path: "/password-recovery", element: <PasswordRecovery /> },
      {
        path: "/password-recovery-phone",
        element: <PasswordRecoveryWithPhone />,
      },
      { path: "/verification-code", element: <VerificationCode /> },
      { path: "/resend-password", element: <ResendPassword /> },
    ],
  },
]);
