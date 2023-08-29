import { socket } from "./socket.ts";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    socket.on("connect", onConnect);
    socket.emit("test");
    return () => {
      socket.off("connect", onConnect);
    };
  }, []);
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <h3 className="text-slate-100">MIRTH AND MAGIC WOOH</h3>
    </div>
  );
}

export default App;
