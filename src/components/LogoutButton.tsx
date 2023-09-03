import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [navigate, setNavigate] = useState(false);

  const handleLogout = () => {
    logout();
    setNavigate(true);
  };

  return (
    <>
      {navigate && <Navigate to="/login" replace />}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default LogoutButton;
