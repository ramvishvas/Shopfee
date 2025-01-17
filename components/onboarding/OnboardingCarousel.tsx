import { CAROUSEL_DATA } from "@/assets/data/onboarding";
import Card from "@/components/onboarding/Card";
import Pagination from "@/components/onboarding/Pagination";
import PrimaryButton from "@/components/PrimaryButton";
import AsyncStorageUtils, { AsyncStorageKeys } from "@/utils/AsyncStorageUtils";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { View, ViewToken, FlatList } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

const OnboardingCarousel = () => {
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
        const index = viewableItems?.[0]?.index;
        if (index != null) {
          setCurrentIndex(index);
        }
      },
    },
  ]);

  const flatListRef = useRef<FlatList>(null);

  const handleNext = async () => {
    if (currentIndex < CAROUSEL_DATA.length - 1) {
      // Scroll to the next item
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      await AsyncStorageUtils.setItem(
        AsyncStorageKeys.HIDE_SPLASH_SCREEN,
        true
      );
      router.push("/(authentication)");
    }
  };
  return (
    <>
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
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      <View className='w-full items-center flex-row justify-between p-10 mb-6'>
        <Pagination
          items={CAROUSEL_DATA}
          currentIndex={currentIndex}
          scrollX={scrollX}
        />

        <PrimaryButton
          className='rounded-lg py-2 px-5'
          text={
            currentIndex === CAROUSEL_DATA.length - 1
              ? "Login/Register →"
              : "Next →"
          }
          onPress={handleNext}
        />
      </View>
    </>
  );
};

export default OnboardingCarousel;
