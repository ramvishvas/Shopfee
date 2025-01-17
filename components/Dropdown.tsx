import React, { useState } from "react";
import { View, Text, Pressable, FlatList, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  placeholder?: string;
  options: string[]; // Dropdown options
  onSelect?: (value: string) => void; // Callback for selection
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = "Select",
  options,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // Store selected value
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // Dropdown visibility state

  const handleSelect = (value: string) => {
    setSelectedValue(value); // Update selected value
    setIsDropdownOpen(false); // Close dropdown
    onSelect && onSelect(value); // Trigger callback
  };

  return (
    <View className='w-full'>
      {/* Dropdown Trigger */}
      <Pressable
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        className='flex-row items-center border rounded-full py-3 px-4 border-gray-300'
      >
        <Text className='flex-1 text-base text-gray-700'>
          {selectedValue || placeholder}
        </Text>
        <Ionicons
          name={isDropdownOpen ? "chevron-up" : "chevron-down"}
          size={20}
          color='#A9A9A9'
        />
      </Pressable>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <Modal transparent>
          <Pressable
            className='absolute inset-0'
            onPress={() => setIsDropdownOpen(false)}
          />
          <View className='absolute w-full bg-white border border-gray-300 rounded-xl mt-2 z-10 shadow-md'>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleSelect(item)}
                  className='p-4 border-b border-gray-200'
                >
                  <Text className='text-gray-700 text-base'>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Dropdown;
