// hooks/useLogout.ts
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";
import { useCharacterStore } from "../stores/character.store";

export const useLogout = () => {
  const { logout } = useAuth0();
  const [navigate, setNavigate] = useState(false);
  const resetUserStore = useUserStore((state) => state.reset);
  const resetCharacterStore = useCharacterStore((state) => state.reset);

  const handleLogout = () => {
    logout();
    setNavigate(true);
    resetUserStore();
    resetCharacterStore();
  };

  return { handleLogout, navigate };
};
