import React from "react";
import { Text, View } from "react-native";

const TAG_COLORS = {
  gray: {
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    borderColor: "border-gray-400",
  },
  green: {
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    borderColor: "border-green-400",
  },
  orange: {
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    borderColor: "border-orange-400",
  },
  red: {
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    borderColor: "border-red-400",
  },
  blue: {
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    borderColor: "border-blue-400",
  },
};

type TagType = "gray" | "green" | "orange" | "red" | "blue";

const Tag = ({ label, type = "gray" }: { label: string; type?: TagType }) => {
  const { bgColor, textColor, borderColor } = TAG_COLORS[type];

  return (
    <View className={`px-3 py-0.5 rounded-xl border ${bgColor} ${borderColor}`}>
      <Text className={`text-center ${textColor} text-lg`}>{label}</Text>
    </View>
  );
};

export default Tag;
