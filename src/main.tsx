import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { authInterceptor } from "./interceptors/interceptors";

function AuthInject() {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    authInterceptor.setAuthGetter(getAccessTokenSilently);
    return () => authInterceptor.setAuthGetter(undefined);
  }, [getAccessTokenSilently]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-k00qqt5beu2ehlsq.eu.auth0.com"
      clientId="2J3sMaa0x3k0MBjjAI6VN6SwiAOuxzU3"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/login-redirect",
        audience: "https://dev-k00qqt5beu2ehlsq.eu.auth0.com/api/v2/",
        scope: "openid profile email read:current_user update:current_user_metadata",
      }}
    >
      <AuthInject />
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
