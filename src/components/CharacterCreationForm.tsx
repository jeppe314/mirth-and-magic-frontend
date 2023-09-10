import { useState, useEffect } from "react";
import Button from "./GlobalButton";
import HeaderIcon from "./global/HeaderIcon";
import CurrentStep from "./CharacterCreation/CurrentStep";

type Props = {};

export default function CharacterCreationForm({}: Props) {
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="flex flex-col justify-between gap-2 w-full h-full p-4">
      <HeaderIcon name="GiMountainRoad" category="Gi" size="8em" style="text-accent" />
      <CurrentStep step={step} />
      <div className="buttons flex justify-center gap-2">
        {step >= 2 && <Button text="Back" onClick={() => setStep((prevStep) => prevStep - 1)} />}
        {step <= 2 && <Button text="Next" onClick={() => setStep((prevStep) => prevStep + 1)} />}
        {step === 4 && <Button text="Slutför" onClick={() => handleSubmit} />}
      </div>
    </div>
  );
}
