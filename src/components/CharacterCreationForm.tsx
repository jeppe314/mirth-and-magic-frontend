import { useState, useEffect } from "react";
import Button from "./GlobalButton";
import HeaderIcon from "./global/HeaderIcon";
import CurrentStep from "./CharacterCreation/CurrentStep";
import ArrowButton from "./global/ArrowButton";
import CreateButton from "./CharacterCreation/CreateButton";

type Props = {};

interface IconMap {
  [key: number]: string;
}

export default function CharacterCreationForm({}: Props) {
  const [step, setStep] = useState(0);

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

  const firstPage = step === 0;
  const lastPage = step === 7;

  const goForward = () => setStep((prevStep) => prevStep + 1);
  const goBack = () => setStep((prevStep) => prevStep - 1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && !firstPage) {
        goBack();
      } else if (event.key === "ArrowRight" && !lastPage) {
        goForward();
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
        {!firstPage && <ArrowButton direction="Left" iconStyle="text-accent" onClick={goBack} />}
        {!lastPage && <ArrowButton direction="Right" style="ml-auto" iconStyle="text-accent" onClick={goForward} />}
      </div>
      {lastPage && <CreateButton />}
    </div>
  );
}
