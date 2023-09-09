// hooks/useLogout.ts
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";

export const useLogout = () => {
  const { logout } = useAuth0();
  const [navigate, setNavigate] = useState(false);
  const resetUserStore = useUserStore((state) => state.reset);

  const handleLogout = () => {
    logout();
    setNavigate(true);
    resetUserStore();
  };

  return { handleLogout, navigate };
};
