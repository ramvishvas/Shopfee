import React from "react";
import { Modal, View, Text, type ModalProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedModalProps = ModalProps & {
  title?: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
};

export const ThemedModal = ({
  title,
  lightBackgroundColor,
  darkBackgroundColor,
  lightTextColor,
  darkTextColor,
  children,
  ...rest
}: ThemedModalProps) => {
  const backgroundColor = useThemeColor(
    { light: lightBackgroundColor, dark: darkBackgroundColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    "text"
  );

  return (
    <Modal {...rest} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        }}
      >
        <View
          style={{
            width: "80%",
            padding: 20,
            borderRadius: 10,
            backgroundColor,
          }}
        >
          {title && (
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: textColor }}
            >
              {title}
            </Text>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};
