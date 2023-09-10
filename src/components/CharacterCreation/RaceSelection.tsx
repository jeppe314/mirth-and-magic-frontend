import React from "react";
// import Icon from "../global/Icon";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

type Race = "dwarf" | "elf" | "human";

type RaceSelectionProps = {
  setRace: (race: Race) => void;
  value: Race;
};

const RaceSelection: React.FC<RaceSelectionProps> = ({ setRace, value }) => {
  return (
    <div className="flex flex-col items-center">
      {/* <Icon name="Home" color="primary" fontSize="large" /> */}

      <p>"Is that a dwarf...?" "No, it's an elf!" "You are both blind! That's clearly a human!"</p>
      <select value={value} onChange={(e) => setRace(e.target.value as Race)}>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="human">Human</option>
      </select>
    </div>
  );
};

export default RaceSelection;
