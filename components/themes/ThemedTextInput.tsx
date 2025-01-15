import { TextInput, type TextInputProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string; // Tailwind classes for styling
};

export function ThemedTextInput({
  lightColor,
  darkColor,
  className = "w-full p-3 rounded-lg border border-gray-300",
  style,
  ...otherProps
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <TextInput
      className={className}
      style={[{ backgroundColor, color: textColor }, style]}
      placeholderTextColor={textColor}
      {...otherProps}
    />
  );
}
