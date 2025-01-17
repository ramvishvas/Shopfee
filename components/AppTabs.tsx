import React, { useState, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { ThemedText } from "./themes/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface AppTabsProps {
  tabs: string[];
}

const AppTabs: React.FC<AppTabsProps> = ({ tabs }) => {
  const borderColor = useThemeColor({}, "border");
  const textColor = useThemeColor({}, "text");

  const [activeTab, setActiveTab] = useState<number>(0);
  const translateX = useRef(new Animated.Value(0)).current; // Animated value for the sliding indicator
  const [tabWidth, setTabWidth] = useState<number>(0); // Dynamic tab width based on parent

  const onTabPress = (index: number) => {
    if (index !== activeTab) {
      setActiveTab(index);

      // Stop any ongoing animation and start a new one
      Animated.spring(translateX, {
        toValue: index * tabWidth,
        useNativeDriver: true,
      }).start();
    }
  };

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setTabWidth(width / tabs.length); // Calculate tab width based on parent width
  };

  return (
    <View
      className='border-b-2 w-full'
      onLayout={onLayout}
      style={{ borderColor }}
    >
      <View className='flex-row'>
        {tabs.map((text, index) => (
          <Pressable
            className='flex-1 p-4'
            key={text}
            onPress={() => onTabPress(index)}
          >
            <ThemedText
              className={`text-center text-base font-semibold ${
                index === activeTab ? "opacity-100" : "opacity-50"
              }`}
            >
              {text}
            </ThemedText>
          </Pressable>
        ))}
      </View>
      {/* Sliding Indicator */}
      {tabWidth > 0 && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: -2,
            height: 4,
            width: tabWidth,
            backgroundColor: textColor,
            transform: [{ translateX }],
            borderRadius: 2,
          }}
        />
      )}
    </View>
  );
};

export default AppTabs;
