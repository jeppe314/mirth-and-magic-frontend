import LoreText from "./LoreText";
import { useCharacterStore } from "../../stores/character.store";
import Divider from "../global/Divider";

type Race = "dwarf" | "elf" | "human";

type RaceSelectionProps = {
  setRace: (race: Race) => void;
  value: Race;
};

const RaceSelection: React.FC<RaceSelectionProps> = ({ setRace, value }) => {
  const race = useCharacterStore((state) => state.characterCreation.race);
  const updateRace = useCharacterStore((state) => state.updateRace);

  const selected = "bg-selected rounded";

  return (
    <LoreText heading="Bjorns answer...">
      <div onClick={() => updateRace("dwarf")} className={`p-2 ${race === "dwarf" && selected}`}>
        "By the gods, Borgulf! The stature and the stoutness of his frame, the very earth seems to embrace his steps. He
        is of the <b>Dwarven</b> kin, born from the heart of the mountains themselves.
      </div>
      <Divider />
      <div onClick={() => updateRace("elf")} className={`p-2 ${race === "elf" && selected}`}>
        "Look closer, old friend. The grace in his stride, the ethereal aura that surrounds him. Only the <b>Elves</b>,
        the ancient children of the forest, move with such elegance."
      </div>
      <Divider />
      <div onClick={() => updateRace("human")} className={`p-2 ${race === "human" && selected}`}>
        "Nay, Borgulf, neither Elf nor Dwarf. Observe the balance of his posture, the versatility in his gait. He is a
        <b> Human</b>, a child of both earth and sky, a bridge between our worlds."
      </div>
    </LoreText>
  );
};

export default RaceSelection;
