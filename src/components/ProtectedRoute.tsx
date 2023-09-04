import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
  children: ReactNode;
}

export const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
