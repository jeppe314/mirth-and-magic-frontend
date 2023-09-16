import Icon from './Icon';

type Props = {
  direction: 'Right' | 'Left' | 'Up' | 'Down';
  classes?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconStyle: string;
};

export default function ArrowButton({ direction, classes, onClick, iconStyle }: Props) {
  const icon = `FaArrow${direction}`;
  return (
    <button className={classes} onClick={onClick}>
      <Icon name={icon} size="1.5em" style={iconStyle} />
    </button>
  );
}
