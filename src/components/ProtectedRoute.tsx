import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: ReactNode;
}

export const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Layout>{children ? children : <Outlet />}</Layout>;
};
