import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Colors } from "@/constants/Colors";
import { ITheme } from "@/components/ThemeChanger";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const DefaultDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...Colors.dark,
    },
  };

  const DefaultLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors.light,
    },
  };

  return (
    <Provider store={store}>
      <ThemeProvider
        value={
          colorScheme === ITheme.Dark ? DefaultDarkTheme : DefaultLightTheme
        }
      >
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen
            name='(authentication)'
            options={{ headerShown: false }}
          />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </Provider>
  );
}
