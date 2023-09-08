import LogoutButton from "../components/LogoutButton";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

type Props = {};

export default function Home({}: Props) {
  const { user, getAccessTokenSilently } = useAuth0();
  console.log("🚀 ~ file: Home.tsx:9 ~ Home ~ user:", user);
  useEffect(() => {
    const apiTest = async () => {
      console.log("testing api!");
      const token = await getAccessTokenSilently();
      console.log("🚀 ~ file: Home.tsx:15 ~ apiTest ~ token:", token);
      const response = await axios.get("http://localhost:8000/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    };
    apiTest();
  }, []);

  return (
    <div className="h-full flex flex-col justify-between items-center font-sans">
      {JSON.stringify(user)}
      hoome
      <LogoutButton />
    </div>
  );
}
