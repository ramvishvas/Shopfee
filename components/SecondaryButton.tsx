import { Pressable, Text, type PressableProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type SecondaryButtonButtonProps = PressableProps & {
  text: string;
  size?: "normal" | "small";
  type?: "default" | "ghost";
  leftIconName?: ComponentProps<typeof Ionicons>["name"];
  leftIcon?: React.ReactNode;
  rightIconName?: ComponentProps<typeof Ionicons>["name"];
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
};

const SecondaryButton: React.FC<SecondaryButtonButtonProps> = ({
  text,
  size = "normal",
  type = "default",
  className = "",
  textClassName = "",
  leftIconName,
  leftIcon,
  rightIconName,
  rightIcon,
  disabled = false,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor({}, "buttonBackground");
  const sizeStyles = size === "normal" ? "px-5 py-3" : "px-4 py-2";
  const borderStyles = type === "default" ? `border` : "";

  return (
    <Pressable
      className={`rounded-2xl flex-row items-center justify-center gap-x-2 ${borderStyles} ${sizeStyles} ${className}`}
      style={{
        borderColor: backgroundColor,
        opacity: disabled ? 0.6 : 1,
      }}
      disabled={disabled}
      {...otherProps}
    >
      {leftIconName ? (
        <Ionicons
          name={leftIconName}
          size={size === "normal" ? 16 : 14}
          color={backgroundColor}
        />
      ) : (
        leftIcon
      )}
      <Text
        className={`font-medium ${textClassName}`}
        style={{ color: backgroundColor }}
      >
        {text}
      </Text>
      {rightIconName ? (
        <Ionicons
          name={rightIconName}
          size={size === "normal" ? 16 : 14}
          color={backgroundColor}
        />
      ) : (
        rightIcon
      )}
    </Pressable>
  );
};

export default SecondaryButton;
