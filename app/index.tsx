import { useState } from "react";
import { View } from "react-native";

import OnboardingScreen from "@/screens/OnboardingScreen";
import SplashAnimation from "@/screens/SplashAnimation";
import AsyncStorageUtils, { AsyncStorageKeys } from "@/utils/AsyncStorageUtils";
import { router } from "expo-router";

export default function Index() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const onSplashAnimationEnd = async () => {
    const hideSplash = await AsyncStorageUtils.getItem(
      AsyncStorageKeys.HIDE_SPLASH_SCREEN
    );

    if (hideSplash) {
      router.push("/(authentication)");
      return;
    }
    setShowOnboarding(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {!showOnboarding ? (
        <SplashAnimation onAnimationEnd={onSplashAnimationEnd} />
      ) : (
        <OnboardingScreen />
      )}
    </View>
  );
}
