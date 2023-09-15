import { useState } from "react";
import BasicInput from "../BasicInput";
import IconSlider from "./IconSlider";
import Icon from "./Icon";

type Props = {
  attribute: string;
  value: number;
  min: number;
};

export default function AttributeSlider({ attribute, value, min }: Props) {
  const [sliderValue, setSliderValue] = useState(min);
  return (
    <div className="attribute-input flex w-full gap-2">
      <div className="flex items-center justify-center">
        <Icon name={attribute.icon} category="Gi" style="h-full w-full text-accent" />
      </div>
      <IconSlider
        min={min}
        max={20}
        value={sliderValue}
        updateValue={setSliderValue}
        iconName={attribute.icon} // Replace with your icon name
      />
      <div className="flex justify-center items-center">{sliderValue}</div>
      {/* <BasicInput type="range" value={attribute} onChange={() => console.log(value)} /> */}
    </div>
  );
}
