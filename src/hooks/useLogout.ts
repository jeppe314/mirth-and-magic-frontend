import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useUserStore from '../stores/user.store.tsx';
import { useCharacterStore } from '../stores/character.store.tsx';
import useCharacterCreationStore from '../stores/characterCreation.store.tsx';

export default function useLogout() {
  const { logout } = useAuth0();
  const [navigate, setNavigate] = useState(false);
  const resetUserStore = useUserStore<UserStoreType>((state) => state.reset);
  const resetCharacterStore = useCharacterStore<CharacterStoreType>((state) => state.reset);
  const resetCharacterCreationStore = useCharacterCreationStore((state) => state.reset);

  const handleLogout = () => {
    logout();
    setNavigate(true);
    resetUserStore();
    resetCharacterStore();
    resetCharacterCreationStore();
  };

  return { handleLogout, navigate };
}
