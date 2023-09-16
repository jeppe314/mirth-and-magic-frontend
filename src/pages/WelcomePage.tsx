import { useState } from 'react';
import BasicInput from '../components/BasicInput.tsx';
import GlobalButton from '../components/GlobalButton.tsx';
import useUserStore from '../stores/user.store.tsx';

export default function WelcomePage() {
  const [name, setName] = useState('');
  const setUsername = useUserStore((state) => state.setUsername);
  const user = useUserStore((state): User => state.user);

  const handleSubmit = (e: InputEvent) => {
    e.preventDefault();
    setUsername(user.sub, name);
  };

  const handleChange = (value: string) => setName(value);

  return (
    <div className="flex h-full gap-1 flex-col justify-center items-center text-center text-text-color-dark">
      <h1 className="text-lg ">Hey buddy!</h1>
      <h3 className="text-base">You're new here, arent you? Welcome!</h3>
      <p className="text-base">What do your friends call you?</p>
      <p className="text-base">(This is your username - you will name your character later)</p>
      <form>
        <BasicInput placeholder="Username" type="text" value={name} onChange={handleChange} />
        <GlobalButton text="Skicka" onClick={handleSubmit} />
      </form>
      <div>Your username is: {user.username}</div>
    </div>
  );
}
