import React from "react";
import { View, TouchableOpacity } from "react-native";

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-10 h-10 rounded-full border-4 ${
        selected ? "border-blue-500" : "border-gray-500"
      } flex items-center justify-center`}
    >
      {selected && <View className='w-5 h-5 rounded-full bg-blue-500' />}
    </TouchableOpacity>
  );
};

export default RadioButton;
