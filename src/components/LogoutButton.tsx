import React from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const LogoutButton = () => {
  const { handleLogout, navigate } = useLogout();

  return (
    <>
      {navigate && <Navigate to="/login" replace />}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default LogoutButton;
