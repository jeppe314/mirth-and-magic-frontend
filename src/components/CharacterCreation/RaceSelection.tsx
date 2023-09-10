import React from "react";

type Race = "dwarf" | "elf" | "human";

type RaceSelectionProps = {
  setRace: (race: Race) => void;
  value: Race;
};

const RaceSelection: React.FC<RaceSelectionProps> = ({ setRace, value }) => {
  return (
    <div className="flex flex-grow flex-col items-center tracking-wide text-gray-300 p-4">
      <h3 className="text-3xl italic">The outpost...</h3>
      <section className="flex flex-grow flex-col justify-center items-center gap-2 text-gray-400 italic text-center">
        <p>- Borgulf, are my eyes deceiving me or do you also see a single walker in the distance?</p>
        <p>- I see him, Bjorn.</p>
        <p>- An adventurer, surely. No common folk would travel the deep forests alone. Albeit in this weather.</p>
        <p>
          - Alas, he would not be the first. Bjorn, what is he? The glaring sun impairs my vision and I cannot determine
          his race.
        </p>
      </section>
      <select value={value} onChange={(e) => setRace(e.target.value as Race)}>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="human">Human</option>
      </select>
    </div>
  );
};

export default RaceSelection;
