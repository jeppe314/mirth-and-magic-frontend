import RaceSelection from "./RaceSelection";
import NameSelection from "./NameSelection";
import AttributesSelection from "./AttributesSelection";
import LoreText from "./LoreText";
import { BorgulfBjorn1, BorgulfBjorn2, BorgulfBjorn3,BorgulfBjorn4, LoneWanderer } from "../../lore/lore";

interface Props {
  step: number;
}

const steps = [
  { component: <LoreText heading="A lone wanderer...">{LoneWanderer}</LoreText> },
  { component: <LoreText heading="The outpost...">{BorgulfBjorn1}</LoreText> },
  { component: <RaceSelection /> },
  { component: <LoreText heading="The meeting...">{BorgulfBjorn2}</LoreText> },
  { component: <LoreText heading="The meeting...">{BorgulfBjorn3}</LoreText> },
  { component: <LoreText heading="The meeting...">{BorgulfBjorn4}</LoreText> },
  { component: <NameSelection /> },
  { component: <AttributesSelection /> },
];

const CurrentStep: React.FC<Props> = ({ step = 0 }) => {
  return steps[step]?.component || <div>There is nothing on this page =/</div>;
};

export default CurrentStep;
