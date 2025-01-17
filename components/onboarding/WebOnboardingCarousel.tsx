import { CAROUSEL_DATA } from "@/assets/data/onboarding";
import Card, { ICardData } from "@/components/onboarding/Card";
import Pagination from "@/components/onboarding/Pagination";
import PrimaryButton from "@/components/PrimaryButton";
import AsyncStorageUtils, { AsyncStorageKeys } from "@/utils/AsyncStorageUtils";
import { router } from "expo-router";
import React, { useRef, useState, useCallback } from "react";
import { View, ViewToken, FlatList, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

const WebOnboardingCarousel = () => {
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  // Calculate screen width for proper scrolling
  const screenWidth = Platform.select({
    web: typeof window !== "undefined" ? window.innerWidth : 0,
    default: 0, // This will be handled by the component's layout
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const index = viewableItems?.[0]?.index;
      if (index != null) {
        setCurrentIndex(index);
      }
    },
    []
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const handleNext = async () => {
    if (currentIndex < CAROUSEL_DATA.length - 1) {
      // Cross-platform smooth scrolling
      if (Platform.OS === "web") {
        const nextOffset = (currentIndex + 1) * screenWidth;
        flatListRef.current?.scrollToOffset({
          offset: nextOffset,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: currentIndex + 1,
          animated: true,
        });
      }
    } else {
      await AsyncStorageUtils.setItem(
        AsyncStorageKeys.HIDE_SPLASH_SCREEN,
        true
      );
      router.push("/(authentication)");
    }
  };

  // Handle window resize on web
  React.useEffect(() => {
    if (Platform.OS === "web") {
      const handleResize = () => {
        // Recenter the current item
        const currentOffset = currentIndex * window.innerWidth;
        flatListRef.current?.scrollToOffset({
          offset: currentOffset,
          animated: false,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [currentIndex]);

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

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
          <Card data={item as ICardData} index={index} scrollX={scrollX} />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={Platform.OS === "web" ? getItemLayout : undefined}
        style={Platform.OS === "web" ? { flex: 1, width: "100%" } : undefined}
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

export default WebOnboardingCarousel;
