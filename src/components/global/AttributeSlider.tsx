import IconSlider from './IconSlider.tsx';
import Icon from './Icon.tsx';

type Props = {
  attribute: AttributeDetail;
  value: number;
  min: number;
  handleUpdate: (value: number) => void;
  icon: string;
};

export default function AttributeSlider({ attribute, handleUpdate }: Props) {
  return (
    <div className="attribute-input flex w-full gap-4">
      <div className="flex items-center justify-center">
        <Icon name={attribute.icon} category="Gi" classes="h-full w-full text-accent" />
      </div>
      <IconSlider min={attribute.min} max={20} value={attribute.value} updateValue={handleUpdate} iconName={attribute.icon} />
      <div className="flex justify-center items-center">{attribute.value}</div>
    </div>
  );
}
