import { useAppSelector } from "@/store/hook";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectesRoute = () => {
  const token = useAppSelector((state) => state.login.token);
  if (token) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
};
