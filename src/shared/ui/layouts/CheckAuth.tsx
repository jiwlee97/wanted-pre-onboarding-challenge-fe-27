import { useToken } from "@/shared/lib";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const CheckAuth = () => {
  const { getToken } = useToken();
  const location = useLocation();

  if (getToken()) {
    if (location.pathname === "/sign-up" || location.pathname === "/login") {
      return <Navigate to="/todos" />;
    }
    return <Outlet />;
  }
  if (location.pathname === "/sign-up" || location.pathname === "/login") {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};
