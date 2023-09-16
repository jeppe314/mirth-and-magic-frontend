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
    3: "GiPencil",
    4: "GiFist",
    5: "GiOpenGate",
    6: "GiOpenGate",
    7: "GiOpenGate",
    8: "GiOpenGate",
  };
  const validBack = step > 0;
  const validForward = step < 7;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && validBack) {
        setStep((prevStep) => prevStep - 1);
      } else if (event.key === "ArrowRight" && validForward) {
        setStep((prevStep) => prevStep + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <HeaderIcon name={currentIcon[step]} category="Gi" size="8em" style="text-accent" />
      <CurrentStep step={step} />
      <div className="navigation flex p-4">
        {validBack && (
          <ArrowButton direction="Left" iconStyle="text-accent" onClick={() => setStep((prevStep) => prevStep - 1)} />
        )}
        {validForward && (
          <ArrowButton
            direction="Right"
            style="ml-auto"
            iconStyle="text-accent"
            onClick={() => setStep((prevStep) => prevStep + 1)}
          />
        )}
      </div>
      {step === 7 && <Button text="Slutför" color="accent" textColor="light" onClick={() => handleSubmit} />}
    </div>
  );
}
