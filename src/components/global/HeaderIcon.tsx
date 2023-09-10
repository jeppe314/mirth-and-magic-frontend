import Icon from "./Icon";

type Props = {
  name: string;
  category?: string;
  size?: string;
  style?: string;
};

export default function HeaderIcon({ name, category = "Fa", size, style }: Props) {
  return (
    <div className="flex justify-center items-end w-full h-1/4">
      <Icon name={name} category={category} size={size} style={style} />
    </div>
  );
}
