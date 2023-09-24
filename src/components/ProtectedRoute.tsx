import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "../pages/LoadingPage";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // Consider showing a loading state only on initial load.
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    // If not authenticated, redirect to login.
    return <Navigate to="/login" />;
  }

  // If authenticated, render outlet
  return <Outlet />;
};
