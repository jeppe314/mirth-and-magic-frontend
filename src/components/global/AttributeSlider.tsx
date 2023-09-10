import React from "react";
import BasicInput from "../BasicInput";

type Props = {
  attribute: string;
  value: number;
};

export default function AttributeSlider({ attribute, value }: Props) {
  return (
    <div className="attribute-input">
      <BasicInput type="range" value={attribute} onChange={() => console.log(value)} />
    </div>
  );
}
