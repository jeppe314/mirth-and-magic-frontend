import React from "react";
import { useCharacterStore } from "../stores/character.store";

type Props = {};

export default function Character({}: Props) {
  const strength = useCharacterStore((state) => state.strength);
  const add = useCharacterStore((state) => state.addStr);
  const all = useCharacterStore();
  console.log(all);
  return (
    <div>
      Character
      <div>strength: {strength}</div>
      <div>{JSON.stringify(all)}</div>
      <button onClick={() => add()}>addd</button>
    </div>
  );
}
