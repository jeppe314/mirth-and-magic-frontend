import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
type Props = {};

export default function Home({}: Props) {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {isAuthenticated}
      {user?.name}
      hoome
      <LogoutButton />
    </div>
  );
}
