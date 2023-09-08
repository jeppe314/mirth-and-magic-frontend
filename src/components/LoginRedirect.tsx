import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";

export default function LoginRedirect() {
  const { getAccessTokenSilently } = useAuth0();
  const checkUser = useUserStore((state) => state.checkUser);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getAccessTokenSilently();
      console.log("🚀 ~ file: LoginRedirect.tsx:12 ~ fetchUser ~ token:", token);
      await checkUser(token);
    };

    fetchUser();
  }, [checkUser, getAccessTokenSilently]);

  return <div className="bg-pink-400">LoginRedirect LOADING...</div>;
}
