import LogoutButton from "../components/LogoutButton";
import { useUserStore } from "../stores/user.store";
import WelcomePage from "./WelcomePage";

type Props = {};

export default function Home({}: Props) {
  const storeUser = useUserStore((state: any) => state.user);
  console.log("🚀 ~ file: Home.tsx:10 ~ Home ~ storeUser:", storeUser);

  if (!storeUser.username) {
    return <WelcomePage />;
  }

  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {JSON.stringify(storeUser)}
      <LogoutButton />
    </div>
  );
}
