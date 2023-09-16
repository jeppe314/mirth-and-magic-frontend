import Icon from './Icon';

type Props = {
  name: string;
  category?: string;
  size?: string;
  classes?: string;
};

export default function HeaderIcon({ name, category = 'Fa', size, classes }: Props) {
  return (
    <div className="flex justify-center items-end w-full h-1/4">
      <Icon name={name} category={category} size={size} classes={classes} />
    </div>
  );
}
