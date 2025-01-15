import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for the checkmark
import { useThemeColor } from "@/hooks/useThemeColor";

interface CheckboxProps {
  selected: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ selected, onPress }) => {
  const success = useThemeColor({}, "success");
  const textColor = useThemeColor({}, "text");

  return (
    <TouchableOpacity
      onPress={onPress}
      className='w-9 h-9 border-4 rounded-md flex items-center justify-center'
      style={{
        borderColor: selected ? success : textColor,
        backgroundColor: selected ? success : undefined,
      }}
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
