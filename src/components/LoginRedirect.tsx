import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";
type Props = {};

export default function LoginRedirect({}: Props) {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  console.log("🚀 ~ file: LoginRedirect.tsx:8 ~ LoginRedirect ~ isAuthenticated:", isAuthenticated);
  console.log("🚀 ~ file: LoginRedirect.tsx:8 ~ LoginRedirect ~ user:", user);
  const userStore = useUserStore();
  console.log("🚀 ~ file: LoginRedirect.tsx:9 ~ LoginRedirect ~ userStore:", userStore);
  useEffect(() => {

  }, [])

  return <div className="bg-pink-400">LoginRedirect LOADIIIING</div>;
}
