import { Login } from "@/pages/Login";
import PasswordRecovery from "@/pages/PasswordRecovery";
import { PasswordRecoveryWithPhone } from "@/pages/PasswordRecoveryWithPhone";
import { Register } from "@/pages/Register";
import { ResendPassword } from "@/pages/ResendPassword";
import VerificationCode from "@/pages/VerificationCode";

import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
<<<<<<< HEAD
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
=======
    {
        path: "/", element: <Mainlayout />, children: [
            { index: true, element: <Home/> },
            { path: "/products", element: <ProductList /> },
            { path: "/cart", element: <Cart/> }
        ]
    },
])
>>>>>>> 88bbadb441e7931b3f9cae3af1fc835eaf0e13af
