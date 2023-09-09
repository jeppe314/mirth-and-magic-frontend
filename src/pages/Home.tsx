import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";

type Props = {};

export default function Home({}: Props) {
  const storeUser = useUserStore((state) => state.user);
  console.log("🚀 ~ file: Home.tsx:10 ~ Home ~ storeUser:", storeUser);

  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {JSON.stringify(storeUser)}
      <LogoutButton />
    </div>
  );
}
