import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";

interface SearchBarProps {
  placeholder?: string; // Customizable placeholder
  onSearch?: (text: string) => void; // Callback for search input
  debounceDelay?: number; // Delay for debouncing (in milliseconds)
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  onSearch,
  debounceDelay = 300,
}) => {
  const [searchText, setSearchText] = useState<string>(""); // Local state for input
  const [debouncedText, setDebouncedText] = useState<string>(""); // Debounced value

  // Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText);
    }, debounceDelay);

    return () => clearTimeout(handler); // Cleanup timeout
  }, [searchText, debounceDelay]);

  // Call the onSearch prop when debounced text changes
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedText);
    }
  }, [debouncedText, onSearch]);

  return (
    <View className='flex-row items-center border rounded-3xl py-1 px-4'>
      <TextInput
        className='flex-1 text-base'
        placeholder={placeholder}
        placeholderTextColor='#A9A9A9'
        value={searchText}
        onChangeText={setSearchText} // Update local state
      />
      <Ionicons name='search' size={20} color='#A9A9A9' />
    </View>
  );
};

export default SearchBar;
