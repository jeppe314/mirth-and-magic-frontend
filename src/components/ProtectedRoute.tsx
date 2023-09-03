import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  console.log("isallowed: ", isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
