import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, TouchableOpacity } from "react-native";

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress }) => {
  const linkColor = useThemeColor({}, "link");
  const textColor = useThemeColor({}, "text");

  return (
    <TouchableOpacity
      onPress={onPress}
      className='w-10 h-10 rounded-full border-4 flex items-center justify-center'
      style={{
        borderColor: selected ? linkColor : textColor,
      }}
    >
      {selected && (
        <View
          className='w-5 h-5 rounded-full'
          style={{
            backgroundColor: linkColor,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default RadioButton;
