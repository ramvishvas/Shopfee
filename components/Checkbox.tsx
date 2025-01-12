import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for the checkmark

interface CheckboxProps {
  selected: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-9 h-9 border-4 rounded-md ${
        selected ? "bg-green-500 border-green-500" : "border-gray-500"
      } flex items-center justify-center`}
    >
      {selected && (
        <Ionicons
          name='checkmark'
          size={25}
          color='white'
          style={{ fontWeight: "bold" }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
