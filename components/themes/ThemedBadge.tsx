import React from "react";
import { View, Text, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedBadgeProps = ViewProps & {
  text: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
};

export const ThemedBadge = ({
  text,
  lightBackgroundColor,
  darkBackgroundColor,
  lightTextColor,
  darkTextColor,
  style,
  ...rest
}: ThemedBadgeProps) => {
  const backgroundColor = useThemeColor(
    { light: lightBackgroundColor, dark: darkBackgroundColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    "text"
  );

  return (
    <View
      style={[
        {
          backgroundColor,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 15,
          alignSelf: "flex-start",
        },
        style,
      ]}
      {...rest}
    >
      <Text style={{ color: textColor, fontSize: 12, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};
