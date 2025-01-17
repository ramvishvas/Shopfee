import { SplashDarkImg, SplashLightImg } from "@/assets/images";
import { ThemedView } from "@/components/themes/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

const { height, width } = Dimensions.get("window");

interface SplashAnimationProps {
  onAnimationEnd?: () => void;
}

const SplashAnimation: React.FC<SplashAnimationProps> = ({
  onAnimationEnd,
}) => {
  // const threshold = new Animated.Value(500);
  const translateY = useRef(new Animated.Value(-height)).current;

  useEffect(() => {
    // Start the animation
    Animated.timing(translateY, {
      toValue: 0, // Move the view from top (-height) to the screen bottom
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start(() => {
      // Trigger callback after animation ends
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    });
  }, [translateY, onAnimationEnd]);

  const colorScheme = useColorScheme();

  return (
    <ThemedView className='flex-1'>
      <Animated.View
        style={[
          styles.animatedView,
          { transform: [{ translateY }] }, // Bind the animated value
        ]}
      >
        <ImageBackground
          source={colorScheme === "dark" ? SplashDarkImg : SplashLightImg} // Replace with the path to your image
          resizeMode='cover' // Adjust the image scaling
          style={styles.imageBackground}
        />
      </Animated.View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: width, // Ensure the animation covers the full screen width
    height: height,
  },
  imageBackground: {
    flex: 1, // Ensure the background image fills the parent
    width: "100%", // Full screen width
    height: "100%", // Full screen height
  },
});

export default SplashAnimation;
