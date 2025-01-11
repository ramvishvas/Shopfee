/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColor = "#6D4C41";
const tintColorLight = "#8C6A5C"; // Lighter shade of primary
const tintColorDark = "#50362F"; // Darker shade of primary

export const Colors = {
  light: {
    text: "#11181C", // Darker text for light mode
    background: "#FFFFFF", // Soft beige for backgrounds
    tint: tintColorLight,
    icon: "#687076", // Neutral gray for icons
    tabIconDefault: "#9BA1A6", // Muted neutral gray
    tabIconSelected: tintColorLight,
    buttonBackground: primaryColor, // Primary button background
    buttonText: "#FAF9F6", // Light text for buttons
    cardBackground: "#FFFFFF", // Light sand for card backgrounds
    inputBackground: "#FFFFFF", // Light sand for card backgrounds
    error: "#D9534F", // Red for error messages
    success: "#4CAF50", // Green for success messages
    warning: "#FFC107", // Amber for warnings
    link: "#4A6274", // Muted blue for links
  },
  dark: {
    text: "#ECEDEE", // Lighter text for dark mode
    background: "#151718", // Deep charcoal background
    tint: tintColorDark,
    icon: "#9BA1A6", // Neutral gray for icons
    tabIconDefault: "#9BA1A6", // Muted neutral gray
    tabIconSelected: tintColorDark,
    buttonBackground: tintColorDark, // Darker primary for buttons
    buttonText: "#FAF9F6", // Light text for buttons
    cardBackground: "#2E2E2E", // Charcoal for card backgrounds
    inputBackground: "#2E2E2E", // Charcoal for card backgrounds
    error: "#D9534F", // Red for error messages
    success: "#4CAF50", // Green for success messages
    warning: "#FFC107", // Amber for warnings
    link: "#8C6A5C", // Lighter primary for links
  },
};
