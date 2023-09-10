import { useEffect } from "react";
import RaceSelection from "./RaceSelection";
import NameSelection from "./NameSelection";
import AttributesSelection from "./AttributesSelection";
import { useCharacterStore } from "../../stores/character.store";
import BeginningText from "./BeginningText";
import LoreText from "./LoreText";
import { BorgulfBjorn1, LoneWanderer } from "../../lore/lore";
interface Props {
  step: number;
}

const CurrentStep: React.FC<Props> = ({ step = 1 }) => {
  const createCharacter = useCharacterStore((state) => state.characterCreation);
  const { updateName, updateRace } = useCharacterStore();

  useEffect(() => {
    console.log("effect");
    console.log(createCharacter);
  }, [createCharacter]);

  switch (step) {
    case 0:
      return <LoreText heading="A lone wanderer...">{LoneWanderer}</LoreText>;
    case 1:
      return <LoreText heading="The outpost...">{BorgulfBjorn1}</LoreText>;
    case 2:
      return <RaceSelection value={createCharacter.race} setRace={updateRace} />;
    case 2:
      return <NameSelection value={createCharacter.name} setName={updateName} />;
    case 3:
      return <AttributesSelection />;
    default:
      return null;
  }
};

export default CurrentStep;
