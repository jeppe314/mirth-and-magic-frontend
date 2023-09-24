import "./App.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Character from "./pages/Character.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LoginRedirect from "./components/LoginRedirect.tsx";
import LogoutComponent from "./pages/LogoutComponent.tsx";
import CharacterCreationForm from "./components/CharacterCreationForm.tsx";
import { LayoutWrapper } from "./components/global/LayoutWrapper.tsx";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutComponent />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="character" element={<Character />} />
          </Route>
          <Route path="login-redirect" element={<LoginRedirect />} />
          <Route path="create-character" element={<CharacterCreationForm />} />
          {/* Add more protected routes here */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
