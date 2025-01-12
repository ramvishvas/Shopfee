import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  text?: string;
  textClassName?: string; // Tailwind classes for text styles
  className?: string; // Tailwind classes for button styles
};

export function ThemedButton({
  lightColor,
  darkColor,
  text,
  textClassName = "text-white font-semibold text-base",
  className = "bg-primary py-3 px-4 rounded-lg",
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonBackground"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonText"
  );

  return (
    <TouchableOpacity
      className={className}
      style={{ backgroundColor }}
      {...otherProps}
    >
      {text && (
        <Text className={textClassName} style={{ color: textColor }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
