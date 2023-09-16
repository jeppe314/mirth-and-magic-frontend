import React, { useState, useRef, useEffect, useCallback } from 'react';

type SliderProps = {
  min: number;
  max: number;
  value: number;
  updateValue: (value: number) => void;
};

export default function IconSlider({ min, max, value, updateValue }: SliderProps) {
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
    [dragging, min, max, updateValue],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handleMove(e.clientX);
    },
    [handleMove],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove],
  );

  useEffect(() => {
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [handleEnd]);

  return (
    <div ref={sliderRef} className="slider-container relative w-full h-10 rounded-full " onMouseMove={handleMouseMove}>
      <div className="bg-accent h-full relative rounded-r-md" style={{ width: `${((value - min) / (max - min)) * 100}%` }}>
        <div className="absolute top-0 right-0 h-full w-[32px] flex justify-center items-center cursor-pointer" onMouseDown={handleStart} onTouchStart={handleStart} onTouchMove={handleTouchMove}></div>
      </div>
    </div>
  );
}
