import React, { useState, useRef, useEffect, useCallback } from "react";
import Icon from "./Icon";
type SliderProps = {
  min: number;
  max: number;
  value: number;
  updateValue: (value: number) => void;
};

const IconSlider: React.FC<SliderProps> = ({ min, max, value, updateValue }) => {
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    setDragging(true);
  }, []);

  const handleEnd = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (dragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const newValue = ((clientX - rect.left) / rect.width) * (max - min) + min;
        updateValue(Math.round(Math.min(Math.max(newValue, min), max)));
      }
    },
    [dragging, min, max, updateValue]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [handleEnd]);

  return (
    <div ref={sliderRef} className="slider-container relative w-full h-8 rounded-full " onMouseMove={handleMouseMove}>
      <div
        className="bg-accent h-full relative rounded-r-full"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      >
        <div
          className="absolute top-0 right-0 h-full w-[32px] flex justify-center items-center cursor-pointer rounded-full bg-white border-2 border-accent"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onTouchMove={handleTouchMove}
        >
          <Icon category="Gi" name="GiBiceps" style="w-full h-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default IconSlider;
