import { useState, useEffect } from "react";
import Button from "./GlobalButton";
import HeaderIcon from "./global/HeaderIcon";
import CurrentStep from "./CharacterCreation/CurrentStep";
import ArrowButton from "./global/ArrowButton";

type Props = {};

interface IconMap {
  [key: number]: string;
}

export default function CharacterCreationForm({}: Props) {
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    console.log("submit");
  };

  const currentIcon: IconMap = {
    0: "GiMountainRoad",
    1: "GiGuards",
    2: "GiFaceToFace",
    3: "GiFist",
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <HeaderIcon name={currentIcon[step]} category="Gi" size="8em" style="text-accent" />
      <CurrentStep step={step} />
      <div className="navigation flex p-4">
        {step >= 1 && (
          <ArrowButton
            direction="Left"
            iconStyle="text-secondary"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          />
        )}
        {step <= 2 && (
          <ArrowButton
            direction="Right"
            style="ml-auto"
            iconStyle="text-secondary"
            onClick={() => setStep((prevStep) => prevStep + 1)}
          />
        )}
      </div>
      {step === 3 && <Button text="Slutför" onClick={() => handleSubmit} />}
    </div>
  );
}
