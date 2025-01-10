import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface CardProps {
  data: {
    image: ImageSourcePropType;
    title: string;
    description: string;
  };
  index: number;
  scrollX: SharedValue<number>;
}

const Card = ({ data, index, scrollX }: CardProps) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        scrollX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0, 1, 0],
        Extrapolation.CLAMP // Pass as an option
      ),
    };
  });

  return (
    <Animated.View
      className='flex-1 items-center justify-center p-5'
      style={[{ width }, rnAnimatedStyle]}
    >
      <View className='w-full items-center justify-center'>
        <Image source={data.image} resizeMode='contain' className='w-50 h-50' />
      </View>

      <View className='mt-20'>
        <Text className='text-3xl font-bold text-[#333333] mb-5'>
          {data.title}
        </Text>
        <Text className='text-base leading-5 text-black'>
          {data.description}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Card;
