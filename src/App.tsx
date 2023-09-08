import "./App.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Character from "./pages/Character.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LoginRedirect from "./components/LoginRedirect.tsx";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // TODO Loading page with spinner or sth else funny
  }

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route index path="/" element={<Home />} />
          <Route path="character" element={<Character />} />
          <Route path="login-redirect" element={<LoginRedirect />} />
          {/* Add more protected routes here */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
