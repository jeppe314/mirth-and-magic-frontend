import BasicInput from '../BasicInput.tsx';
import LoreText from './LoreText.tsx';
import useCharacterCreationStore from '../../stores/characterCreation.store.tsx';

export default function NameSelection() {
  const { updateName, name } = useCharacterCreationStore() as CharacterCreationStoreType;

  return (
    <LoreText heading="Share with me your name, sire...">
      <BasicInput type="text" value={name} onChange={(e) => updateName(e)} />
    </LoreText>
  );
}
