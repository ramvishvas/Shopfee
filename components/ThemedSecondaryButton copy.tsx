import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedSecondaryButtonProps = TouchableOpacityProps & {
  lightBorderColor?: string;
  darkBorderColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  text?: string;
  textClassName?: string; // Tailwind classes for text styles
  className?: string; // Tailwind classes for button styles
};

export function ThemedSecondaryButton({
  lightBorderColor,
  darkBorderColor,
  lightTextColor,
  darkTextColor,
  text,
  textClassName = "text-primary font-semibold text-base",
  className = "border-2 py-3 px-4 rounded-lg",
  ...otherProps
}: ThemedSecondaryButtonProps) {
  const borderColor = useThemeColor(
    { light: lightBorderColor, dark: darkBorderColor },
    "buttonBackground"
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    "text"
  );

  return (
    <TouchableOpacity
      className={className}
      style={{ borderColor, borderWidth: 2 }}
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
