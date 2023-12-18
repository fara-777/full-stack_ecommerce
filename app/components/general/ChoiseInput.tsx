import { IconType } from "react-icons";

interface ChoiseInputProps {
  text: string;
  icon: IconType;
  onClick: (value: string) => void;
  selected?: boolean;
}

const ChoiseInput: React.FC<ChoiseInputProps> = ({
  text,
  icon: Icon,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`flex items-center justify-center gap-2 h-16 border rounded-md my-3 px-4 py-2 ${
        selected ? "border-black" : "border-gray-300"
      }`}
    >
      <Icon />
      <span className="text-slate-700 text-lg">{text}</span>
    </div>
  );
};

export default ChoiseInput;
