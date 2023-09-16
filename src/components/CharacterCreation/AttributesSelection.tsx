import AttributeSlider from '../global/AttributeSlider';
import useCharacterCreationStore from '../../stores/characterCreation.store.tsx';
import LoreText from './LoreText';

export default function AttributeSelection() {
  const attributes = useCharacterCreationStore((state) => state.attributes);
  const updateAttribute = useCharacterCreationStore((state) => state.updateAttribute);
  const distributablePoints = useCharacterCreationStore((state) => state.distributablePoints);

  return (
    <LoreText heading="At the gates...">
      {Object.entries(attributes).map(([key, attr]) => (
        <AttributeSlider key={key} attribute={attr} handleUpdate={(value) => updateAttribute(key, value)} />
      ))}
      <div>Points left to distribute: {distributablePoints}</div>
    </LoreText>
  );
}
