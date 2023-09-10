import React, { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

type SliderProps = {
  min: number;
  max: number;
  value: number;
  updateValue: (value: number) => void;
  iconName: string;
};

const IconSlider: React.FC<SliderProps> = ({ min, max, value, updateValue, iconName }) => {
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newValue = ((e.clientX - rect.left) / rect.width) * (max - min) + min;
      updateValue(Math.round(Math.min(Math.max(newValue, min), max)));
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="slider-container relative w-full h-8 rounded-full bg-gray-200"
      onMouseMove={handleMouseMove}
    >
      <div
        className="bg-blue-400 h-full rounded-r-full"
        style={{
          width: `${((value - min) / (max - min)) * 100}%`,
        }}
      />
      <div
        className="absolute top-1/2 cursor-pointer"
        style={{
          left: `${((value - min) / (max - min)) * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleMouseDown}
      >
        <Icon name={iconName} size="1.5em" />
      </div>
    </div>
  );
};

export default IconSlider;
