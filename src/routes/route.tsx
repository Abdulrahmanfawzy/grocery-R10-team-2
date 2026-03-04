import { Login } from "@/pages/Login";
import PasswordRecovery from "@/pages/PasswordRecovery";
import { PasswordRecoveryWithPhone } from "@/pages/PasswordRecoveryWithPhone";
import { Register } from "@/pages/Register";
import { ResendPassword } from "@/pages/ResendPassword";
import VerificationCode from "@/pages/VerificationCode";

import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "PasswordRecovery",
    element: <PasswordRecovery />,
  },
  {
    path: "VerificationCode",
    element: <VerificationCode />,
  },
  {
    path: "ResendPassword",
    element: <ResendPassword />,
  },
  {
    path: "PasswordRecoveryWithPhone",
    element: <PasswordRecoveryWithPhone />,
  },
]);

