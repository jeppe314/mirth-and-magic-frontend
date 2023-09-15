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
      <div className="w-full flex flex-col gap-2 p-2">
        {Object.entries(attributes).map(([key, attribute]) => (
          <AttributeSlider key={key} attribute={attribute} value={attribute.value} min={attribute.min} />
        ))}
      </div>
    </LoreText>
  );
}
