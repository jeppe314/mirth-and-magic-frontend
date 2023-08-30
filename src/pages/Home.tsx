import { Socket } from "socket.io-client";
import { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
type Props = {};

export default function Home({}: Props) {
  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log("home");

  return (
    <div className="h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div className="text-2xl">Hooome</div>
      <LogoutButton />
    </div>
  );
}
