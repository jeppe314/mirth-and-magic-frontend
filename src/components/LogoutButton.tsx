import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../stores/user.store";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [navigate, setNavigate] = useState(false);
  const resetUserStore = useUserStore((state) => state.reset);

  const handleLogout = () => {
    logout();
    setNavigate(true);
    resetUserStore();
  };

  return (
    <>
      {navigate && <Navigate to="/login" replace />}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default LogoutButton;
