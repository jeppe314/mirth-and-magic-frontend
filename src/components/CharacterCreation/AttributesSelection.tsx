import React from "react";
import LoreText from "./LoreText";
import { useCharacterStore } from "../../stores/character.store";
import BasicInput from "../BasicInput";
import AttributeSlider from "../global/AttributeSlider";

type Props = {};

export default function AttributesSelection({}: Props) {
  const { attributes } = useCharacterStore((state) => state.characterCreation);
  console.log("🚀 ~ file: AttributesSelection.tsx:10 ~ AttributesSelection ~ attributes:", attributes);

  return (
    <LoreText heading="At the gates...">
      {Object.entries(attributes).map(([key, value]) => (
        <AttributeSlider key={key} attribute={key} value={value} />
      ))}
    </LoreText>
  );
}
