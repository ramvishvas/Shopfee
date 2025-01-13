import {
  View,
  TouchableOpacity,
  Appearance,
  ColorSchemeName,
} from "react-native";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

enum Theme {
  Dark = "dark",
  Light = "light",
}
const ThemeChanger = () => {
  const colorScheme = useColorScheme();
  const [selected, setSelected] = React.useState(colorScheme);

  const onPress = (theme: ColorSchemeName) => {
    Appearance.setColorScheme(theme);
    setSelected(theme);
  };

  const buttonBaseStyle =
    "w-10 h-10 rounded-full border-4 flex items-center justify-center";
  const indicatorStyle = "w-5 h-5 rounded-full bg-green-500";

  return (
    <View className='flex-1 items-center justify-center flex-row gap-x-2 bg-ui-primarybackgroundcolor p-10'>
      <TouchableOpacity
        onPress={() => onPress(Theme.Light)}
        className={`${buttonBaseStyle} ${
          selected === Theme.Light ? "border-green-500" : "border-gray-400"
        }`}
      >
        {selected === Theme.Light && <View className={indicatorStyle} />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPress(Theme.Dark)}
        className={`${buttonBaseStyle} ${
          selected === Theme.Dark ? "border-green-500" : "border-gray-400"
        }`}
      >
        {selected === Theme.Dark && <View className={indicatorStyle} />}
      </TouchableOpacity>
    </View>
  );
};

export default ThemeChanger;
