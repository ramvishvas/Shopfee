import React, { forwardRef } from "react";
import { Text, type TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string; // Tailwind classes for font sizes, weights, etc.
};

export const ThemedText = forwardRef<Text, ThemedTextProps>(
  ({ lightColor, darkColor, className, style, ...rest }, ref) => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return (
      <Text
        ref={ref} // Attach the forwarded ref here
        className={className} // Tailwind handles fonts, spacing, etc.
        style={[{ color }, style]} // Only manage color dynamically
        {...rest}
      />
    );
  }
);

ThemedText.displayName = "ThemedText"; // For debugging in React DevTools
