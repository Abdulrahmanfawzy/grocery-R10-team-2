import { Login } from "@/pages/Aurh/Login";
import PasswordRecovery from "@/pages/Aurh/PasswordRecovery";
import { PasswordRecoveryWithPhone } from "@/pages/Aurh/PasswordRecoveryWithPhone";
import { Register } from "@/pages/Aurh/Register";
import { ResendPassword } from "@/pages/Aurh/ResendPassword";
import VerificationCode from "@/pages/Aurh/VerificationCode";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
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
