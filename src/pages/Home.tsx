import { useUserStore } from "../stores/user.store";

export default function Home() {
  const storeUser = useUserStore((state: any) => state.user);

  if (!storeUser.username) {
    // return <WelcomePage />;
  }

  return (
    // <div className="h-full w-full flex flex-col justify-between items-center font-sans">
    // <CharacterCreationForm />
    <div>
      HOOOME
    </div>
    // </div>
  );
}
