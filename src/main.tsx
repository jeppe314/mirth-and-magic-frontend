import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-k00qqt5beu2ehlsq.eu.auth0.com"
      clientId="2J3sMaa0x3k0MBjjAI6VN6SwiAOuxzU3"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
