import OnboardingCarousel from "@/components/onboarding/OnboardingCarousel";
import WebOnboardingCarousel from "@/components/onboarding/WebOnboardingCarousel";
import { ThemedText } from "@/components/themes/ThemedText";
import { ThemedView } from "@/components/themes/ThemedView";
import { Platform } from "expo-modules-core";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ThemedView className='flex-1 items-center justify-between'>
        <Link
          href='/(authentication)'
          className='absolute top-10 right-10 z-10'
          asChild
        >
          <ThemedText className='text-base font-semibold'>Skip</ThemedText>
        </Link>

        {Platform.OS === "web" ? (
          <WebOnboardingCarousel />
        ) : (
          <OnboardingCarousel />
        )}
      </ThemedView>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
