import React from "react";
import { FlatList, type FlatListProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedFlatListProps<ItemT> = FlatListProps<ItemT> & {
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
};

export const ThemedFlatList = <ItemT,>({
  lightBackgroundColor,
  darkBackgroundColor,
  style,
  ...rest
}: ThemedFlatListProps<ItemT>) => {
  const backgroundColor = useThemeColor(
    { light: lightBackgroundColor, dark: darkBackgroundColor },
    "background"
  );

  return <FlatList style={[{ backgroundColor }, style]} {...rest} />;
};
