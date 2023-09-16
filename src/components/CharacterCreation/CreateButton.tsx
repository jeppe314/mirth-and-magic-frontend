import Button from "../GlobalButton";

type Props = {};

export default function CreateButton({}: Props) {
  const handleSubmit = () => {
    console.log("submit");
  };

  return <Button text="Slutför" color="accent" textColor="light" onClick={() => handleSubmit} />;
}
