import { useState } from "react";
import { View } from "react-native";

import OnboardingScreen from "@/screens/OnboardingScreen";
import SplashAnimation from "@/screens/SplashAnimation";
import RadioButton from "@/components/RadioButton";
import ComponentDriver from "@/components/ComponentDriver";

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
        // <OnboardingScreen />
        <ComponentDriver />
      )}
    </View>
  );
}
