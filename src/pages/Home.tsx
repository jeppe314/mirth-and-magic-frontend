import CharacterCreationForm from '../components/CharacterCreationForm.tsx';
import useUserStore from '../stores/user.store.tsx';
import WelcomePage from './WelcomePage.tsx';

export default function Home() {
  const storeUser = useUserStore((state): User => state.user);

  if (!storeUser.username) {
    return <WelcomePage />;
  }

  return (
    // <div className="h-full w-full flex flex-col justify-between items-center font-sans">
    <CharacterCreationForm />
    // </div>
  );
}
