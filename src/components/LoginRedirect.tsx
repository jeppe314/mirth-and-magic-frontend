import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "../stores/user.store";
import { useCharacterStore } from "../stores/character.store";
import { Navigate } from "react-router-dom";

export default function LoginRedirect() {
  const { user } = useAuth0();

  const {
    user: storeUser,
    checkUser
  } = useUserStore();

  const {
    character: storeCharacter,
    getCharacterByUserId
  } = useCharacterStore();

  // Fetch the user data
  useEffect(() => {
    if (!user || storeUser.email) return;  // Return early if no user or if user is already fetched

    const fetchUserData = async () => {
      const payload = {
        email: user.email,
        sub: user.sub,
      };
      await checkUser(payload);
    };

    fetchUserData();

  }, [user, checkUser]);

  // Fetch the character data after user is fetched
  useEffect(() => {
    if (!storeUser.id) return; // Return early if no storeUser.id

    const fetchCharacterData = async (userId:number) => {
      await getCharacterByUserId(userId)
    };

    fetchCharacterData(storeUser.id);

  }, [storeUser, getCharacterByUserId]);

  if (storeUser.email && storeCharacter.name) {
    return <Navigate to="/" />;
  } else if (storeUser.email) {
    return <Navigate to="../create-character" />;
  }

  return <div className="bg-pink-400">LoginRedirect LOADING...</div>;
}