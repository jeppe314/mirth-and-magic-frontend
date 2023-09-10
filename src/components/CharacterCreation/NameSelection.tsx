import BasicInput from "../BasicInput";

type Props = {
  setName: Function;
  value: string;
};

export default function NameSelection({ setName, value }: Props) {
  return (
    <div className="flex flex-col justify-center text-center">
      <p>"What's your name, warrior?"</p>
      <BasicInput type="text" value={value} onChange={(e) => setName(e)} />
    </div>
  );
}
