import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="font-custom h-screen bg-gray-600 flex justify-center items-center">
      <LoginButton />
    </div>
  );
}
