import React from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import GlobalButton from "../components/GlobalButton";

const LogoutButton = () => {
  const { handleLogout, navigate } = useLogout();

  return (
    <>
      {navigate && <Navigate to="/login" replace />}
      <GlobalButton text="Log out" color="secondary" onClick={handleLogout} />
    </>
  );
};

export default LogoutButton;
