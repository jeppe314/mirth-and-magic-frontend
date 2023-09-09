import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";
import { Navigate } from "react-router-dom";

export default function LoginRedirect() {
  const { user } = useAuth0();
  const checkUser = useUserStore((state: any) => state.checkUser);
  const storeUser = useUserStore((state: any) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      const payload = {
        email: user?.email,
        sub: user?.sub,
      };
      await checkUser(payload);
    };
    // Check if the storeUser object is empty
    if (!storeUser.email) {
      console.log("fetching user");
      fetchUser();
    }
  }, [storeUser, user, checkUser]);

  if (storeUser.email) {
    return <Navigate to="/" />;
  }

  return <div className="bg-pink-400">LoginRedirect LOADING...</div>;
}
