import { Text } from "react-native";

const TEXT_COLORS = {
  primary: "text-[#5E3A2C]",
  secondary: "text-[#333333]",
  tertiary: "text-[#777777]",
  quaternary: "text-[#AAAAAA]",
};

type LabelProps = {
  text: string;
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  className?: string;
};

const Label: React.FC<LabelProps> = ({
  text,
  type = "primary",
  className = "",
}) => {
  return (
    <Text className={`text-lg ${TEXT_COLORS[type]} ${className}`}>{text}</Text>
  );
};

export default Label;
