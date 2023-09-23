import { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loading() {
  const color = "#A3B18A";
  return (
    <BeatLoader
      color={color}
      loading={true}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
