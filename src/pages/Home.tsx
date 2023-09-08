import LogoutButton from "../components/LogoutButton";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

type Props = {};

export default function Home({}: Props) {
  const { user } = useAuth0();

  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {JSON.stringify(user)}
      hoome
      <LogoutButton />
    </div>
  );
}
