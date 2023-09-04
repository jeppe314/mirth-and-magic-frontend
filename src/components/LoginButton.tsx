import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="bg-slate-400 p-2 rounded-lg opacity-50" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
