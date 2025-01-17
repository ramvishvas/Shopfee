import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";

interface InputTextProps extends TextInputProps {
  label?: string; // Label text for the InputText
  error?: string; // Error message to display
  className?: string; // Customizable className
}

const InputText: React.FC<InputTextProps> = ({
  placeholder = "Username",
  value = "",
  onChangeText,
  label,
  error,
  className = "",
  ...otherProps
}) => {
  const placeholderTextColor = useThemeColor({}, "placeholderTextColor");
  const textColor = useThemeColor({}, "text");
  const errorColor = useThemeColor({}, "error");

  // Update state and call onChange callback
  const handleChange = (value: string) => {
    if (onChangeText) {
      onChangeText(value); // Trigger callback immediately
    }
  };

  return (
    <View className={`w-full ${className}`}>
      {/* Label */}
      {label && (
        <Text
          className='mb-1 text-base'
          style={{ color: error ? errorColor : textColor }}
        >
          {label}
        </Text>
      )}

      {/* Input Field */}
      <View
        className='flex-row items-center border rounded-3xl'
        style={{ borderColor: error ? errorColor : textColor }}
      >
        <TextInput
          className='flex-1 text-base p-4 py-2.5'
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={handleChange} // Trigger onChange directly
          {...otherProps}
        />
      </View>

      {/* Error Message */}
      {error && (
        <Text className='mt-1 text-sm' style={{ color: errorColor }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputText;
