import { useState } from "react";
import BasicInput from "../BasicInput";
import IconSlider from "./IconSlider";

type Props = {
  attribute: string;
  value: number;
};

export default function AttributeSlider({ attribute, value }: Props) {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <div className="attribute-input flex w-full">
      <IconSlider
        min={0}
        max={100}
        value={sliderValue}
        updateValue={setSliderValue}
        iconName="FaArrowRight" // Replace with your icon name
      />
      <div className="flex justify-center items-center bg-blue-400">{sliderValue}</div>
      {/* <BasicInput type="range" value={attribute} onChange={() => console.log(value)} /> */}
    </div>
  );
}
