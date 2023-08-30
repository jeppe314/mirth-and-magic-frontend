import { socket } from "./socket.ts";
import { useEffect, useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton.tsx";
import LogoutButton from "./components/LogoutButton.tsx";
import Profile from "./components/Profile.tsx";

function App() {

  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <LoginButton />
      <h3 className="text-slate-100">MIRTH AND MAGIC WOOH</h3>
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
