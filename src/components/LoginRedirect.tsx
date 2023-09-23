import { useEffect, useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";
import { useCharacterStore } from "../stores/character.store";
import { Navigate } from "react-router-dom";
import Loading from "./global/Loading";
import LoadingPage from "../pages/LoadingPage";

type navPath = null | string;

export default function LoginRedirect() {
  const hasRun = useRef(false); // <-- This ref will track if the effect has been executed
  const { user, loading } = useAuth0();
  const [navigationPath, setNavigationPath] = useState<navPath>(null);

  const { user: storeUser, checkUser } = useUserStore();

  const { character: storeCharacter, getCharacterByUserId } = useCharacterStore();

  useEffect(() => {
    if (hasRun.current) return; // <-- Return early if the effect has already been executed

    const performCheck = async () => {
      if (user && !loading) {
        const fetchedUser = await fetchUserData(); // Ensure you await here

        const fetchedCharacter = await fetchCharacterData(fetchedUser.id);

        navigate(fetchedUser, fetchedCharacter);
      } else {
        return;
      }
    };
    performCheck();
    hasRun.current = true; // <-- Mark the effect as executed
  }, [user, loading]);

  const fetchUserData = async () => await checkUser(user);
  const fetchCharacterData = async (id: number) => await getCharacterByUserId(id);

  const navigate = (user: User, character: CharacterType) => {
    if (user.id && character.id) setNavigationPath("/"); // navigate to home
    if (user.id && !character.id) setNavigationPath("../create-character"); // navigate to create character
  };

  if (navigationPath) {
    return <Navigate to={navigationPath} />; // <-- Return Navigate component with the set path
  }
  return <LoadingPage />;
}
