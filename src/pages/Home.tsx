import { useUserStore } from "../stores/user.store";
import { useCharacterStore } from "../stores/character.store";
import LogoutButton from "../components/LogoutButton";
export default function Home() {
  const storeUser = useUserStore((state: any) => state.user);
  const characterStore = useCharacterStore();

  return (
    <div className="h-full flex flex-col justify-between items-center">
      HOOOME
      {JSON.stringify(characterStore, undefined, 4)}
      {JSON.stringify(storeUser, undefined, 4)}
      <LogoutButton />
    </div>

    // </div>
  );
}
