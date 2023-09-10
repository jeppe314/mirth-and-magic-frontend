import { useState, useEffect } from "react";
import BasicInput from "./BasicInput";
import RaceSelection from "./CharacterCreation/RaceSelection";
import NameSelection from "./CharacterCreation/NameSelection";
import Button from "./GlobalButton";
import { FaBeer } from "react-icons/fa";
import Icon from "./global/Icon";
import HeaderIcon from "./global/HeaderIcon";

type Props = {};

export default function CharacterCreationForm({}: Props) {
  const [characterData, setCharacterData] = useState({
    name: "",
    race: "human",
    attribute: 0, // Assuming a default value for the slider
  });

  const [attributes, setAttributes] = useState<AttributesType>({});
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", characterData);
  };

  useEffect(() => {
    console.log(characterData);
    console.log(attributes);
  }),
    [characterData, attributes];

  return (
    <div className="flex flex-col justify-between gap-2 w-full h-full p-4">
      <HeaderIcon name="GiMountainRoad" category="Gi" size="8em" style="text-accent" />
      {step === 1 && (
        <RaceSelection value={characterData.race} setRace={(e) => setCharacterData({ ...characterData, race: e })} />
      )}
      {step === 2 && (
        <NameSelection
          value={characterData.name}
          setName={(e: string) => setCharacterData({ ...characterData, name: e })}
        />
      )}
      {step === 3 && <AttributeSelection attributes={attributes} />}
      <div className="buttons flex justify-center gap-2">
        {step >= 2 && <Button text="Back" onClick={() => setStep((prevStep) => prevStep - 1)} />}
        {step <= 2 && <Button text="Next" onClick={() => setStep((prevStep) => prevStep + 1)} />}
      </div>
    </div>
  );
}
