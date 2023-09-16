import Button from '../GlobalButton.tsx';

export default function CreateButton() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return <Button text="Slutför" color="accent" textColor="light" onClick={handleSubmit} />;
}
