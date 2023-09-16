import CharacterCreationForm from "../components/CharacterCreationForm";
import LogoutButton from "../components/LogoutButton";
import { useUserStore } from "../stores/user.store";
import WelcomePage from "./WelcomePage";

type Props = {};

export default function Home({}: Props) {
  const storeUser = useUserStore((state: any) => state.user);

  if (!storeUser.username) {
    return <WelcomePage />;
  }

  return (
    // <div className="h-full w-full flex flex-col justify-between items-center font-sans">
    <CharacterCreationForm />
    // </div>
  );
}
