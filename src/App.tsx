import "./App.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // TODO Loading page with spinner or sth else funny
  }

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="home" element={<Home />} />
        </Route>
        {/* Add more protected routes here */}

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
