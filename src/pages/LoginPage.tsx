import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
type Props = {};

export default function LoginPage({}: Props) {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      LoginPage
      <LoginButton />
    </div>
  );
}
