import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout";

type Props = {};

export default function LogoutComponent({}: Props) {
  const { handleLogout, navigate } = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <div>Logging out...</div>;
}
