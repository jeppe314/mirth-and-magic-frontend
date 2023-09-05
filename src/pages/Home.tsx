import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";
type Props = {};

export default function Home({}: Props) {
  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      hoome
      <LogoutButton />
    </div>
  );
}
