import "./App.css";
import LoginButton from "./components/LoginButton.tsx";
import Profile from "./components/Profile.tsx";

function App() {
  return (
    <div className="bg-slate-500 h-screen flex flex-col justify-center items-center">
      <h3 className="text-slate-100">MIRTH AND MAGIC WOOH</h3>
      <h3 className="text-slate-100">LOGIN</h3>
      <LoginButton />
      <Profile />
    </div>
  );
}

export default App;
