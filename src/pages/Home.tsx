import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
type Props = {};

export default function Home({}: Props) {
  const { user } = useAuth0();
  console.log("🚀 ~ file: Home.tsx:9 ~ Home ~ user:", user);
  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {JSON.stringify(user)}
      hoome
      <LogoutButton />
    </div>
  );
}
