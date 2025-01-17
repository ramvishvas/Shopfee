import { Dimensions, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useThemeColor } from "@/hooks/useThemeColor";

interface PaginationProps {
  items: any[];
  currentIndex: number;
  scrollX: SharedValue<number>;
}

const { width } = Dimensions.get("window");

const Pagination = ({ items, currentIndex, scrollX }: PaginationProps) => {
  const backgroundActiveColor = useThemeColor({}, "primarybuttoncolor");
  const backgroundColor = useThemeColor({}, "tabIconDefault");

  return (
    <View className='flex-row gap-x-1'>
      {items.map((_, index) => {
        const pgAnimation = useAnimatedStyle(() => {
          return {
            width: interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [8, 12, 8],
              Extrapolation.CLAMP
            ),
          };
        });

        return (
          <Animated.View
            key={index}
            className='h-2 rounded-full'
            style={[
              {
                backgroundColor:
                  currentIndex === index
                    ? backgroundActiveColor
                    : backgroundColor,
              },
              pgAnimation,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
