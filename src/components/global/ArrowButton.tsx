import Icon from "./Icon";

type Props = {
  direction: "Right" | "Left" | "Up" | "Down";
  style?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconStyle: string;
};

export default function ArrowButton({ direction, style, onClick, iconStyle }: Props) {
  const icon = `FaArrow${direction}`;
  return (
    <button className={style} onClick={onClick}>
      <Icon name={icon} size="1.5em" style={iconStyle} />
    </button>
  );
}
