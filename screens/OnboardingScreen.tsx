import { CAROUSEL_DATA } from "@/assets/data/onboarding";
import Card from "@/components/onboarding/Card";
import Pagination from "@/components/onboarding/Pagination";
import { Link, router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ViewToken,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({
        viewableItems,
      }: {
        viewableItems: ViewToken[];
      }) => {
        if (viewableItems && viewableItems[0]?.index !== null) {
          setCurrentIndex(viewableItems[0].index);
        }
      },
    },
  ]);

  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < CAROUSEL_DATA.length - 1) {
      // Scroll to the next item
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/register");
    }
  };
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 items-center justify-between'>
        <Link
          href='/register'
          className='absolute top-10 right-10 z-10'
          asChild
          replace
        >
          <Text className='text-[#6D4C41] text-base font-semibold'>Skip</Text>
        </Link>

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          data={CAROUSEL_DATA}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Card data={item} index={index} scrollX={scrollX} />
          )}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />

        <View className='w-full items-center flex-row justify-between p-5'>
          <Pagination
            items={CAROUSEL_DATA}
            currentIndex={currentIndex}
            scrollX={scrollX}
          />

          <TouchableOpacity
            className='bg-[#6D4C41] rounded-lg py-2 px-5'
            onPress={handleNext}
          >
            <Text className='text-white text-base font-semibold'>
              {currentIndex === CAROUSEL_DATA.length - 1
                ? "Login/Register →"
                : "Next →"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
