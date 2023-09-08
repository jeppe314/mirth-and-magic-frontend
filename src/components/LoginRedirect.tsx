import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";

export default function LoginRedirect() {
  const { getAccessTokenSilently } = useAuth0();
  const checkUser = useUserStore((state) => state.checkUser);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await checkUser();
      console.log("checked user");
      console.log(res);
    };

    fetchUser();
  }, [checkUser, getAccessTokenSilently]);

  return <div className="bg-pink-400">LoginRedirect LOADING...</div>;
}
