import { useState } from "react";
import { View } from "react-native";

import OnboardingScreen from "@/screens/OnboardingScreen";
import SplashAnimation from "@/screens/SplashAnimation";

export default function Index() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const onSplashAnimationEnd = () => {
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
