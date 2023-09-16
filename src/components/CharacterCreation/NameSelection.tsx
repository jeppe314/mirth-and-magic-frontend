import BasicInput from "../BasicInput";
import LoreText from "./LoreText";
import { useCharacterCreationStore } from "../../stores/characterCreation.store";

export default function NameSelection({}) {
  const { updateName, name } = useCharacterCreationStore() as CharacterCreationStoreType;

  return (
    <LoreText heading="Share with me your name, sire...">
      <BasicInput type="text" value={name} onChange={(e) => updateName(e)} />
    </LoreText>
  );
}
