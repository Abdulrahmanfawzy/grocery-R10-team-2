import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";
import VerificationCode from "./pages/VerificationCode";
import { ResendPassword } from "./pages/ResendPassword";
import { PasswordRecoveryWithPhone } from "./pages/PasswordRecoveryWithPhone";

const router = createBrowserRouter([
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
