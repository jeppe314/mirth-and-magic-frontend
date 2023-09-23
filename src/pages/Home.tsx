import { useUserStore } from "../stores/user.store";
import { useCharacterStore } from "../stores/character.store";
export default function Home() {
  const storeUser = useUserStore((state: any) => state.user);
  const characterStore = useCharacterStore()

  return (
    // <div className="h-full w-full flex flex-col justify-between items-center font-sans">
    // <CharacterCreationForm />
    <div>
      HOOOME
      {JSON.stringify(characterStore)}
      {JSON.stringify(storeUser)}

    </div>

    
    // </div>
  );
}
