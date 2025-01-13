import { ScrollView, View } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import Tag from "./Tag";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import SecondaryButton from "./SecondaryButton";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ThemeChanger from "./ThemeChanger";

const ComponentDriver = () => {
  const [checked, setChecked] = React.useState(false);
  const handleButtonPress = () => {
    setChecked(!checked);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1' edges={["top"]}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View className='flex-1 items-center justify-center gap-y-2'>
            <RadioButton selected={checked} onPress={handleButtonPress} />
            <Checkbox selected={checked} onPress={handleButtonPress} />

            {/* // Tags */}
            <Tag label='Status' type='gray' />
            <Tag label='Status' type='green' />
            <Tag label='Status' type='orange' />
            <Tag label='Status' type='red' />
            <Tag label='Status' type='blue' />

            {/* // Labels */}
            <Label text='Label' type='primary' />
            <Label text='Label' type='secondary' />
            <Label text='Label' type='tertiary' />
            <Label text='Label' type='quaternary' />

            {/* // Primary Buttons */}
            <PrimaryButton
              text='Primary Normal Button'
              onPress={() => console.log("Primary Normal Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
            />

            <PrimaryButton
              text='Primary Normal Button Disabled'
              onPress={() =>
                console.log("Primary Normal Button Pressed Disabled")
              }
              leftIcon={<Ionicons name='add' size={16} color='white' />}
              rightIcon={<Ionicons name='heart' size={16} color='white' />}
              disabled
            />

            <PrimaryButton
              text='Primary Gost Normal Button'
              onPress={() => console.log("Primary Gost Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              type='ghost'
            />

            <PrimaryButton
              text='Primary Gost Normal Button Disabled'
              onPress={() =>
                console.log("Primary Gost Button Pressed Disabled")
              }
              leftIconName='add'
              rightIconName='heart'
              type='ghost'
              disabled
            />

            <PrimaryButton
              text='Primary Normal Button'
              onPress={() => console.log("Primary Normal Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              size='small'
            />

            <PrimaryButton
              text='Primary Normal Button Disabled'
              onPress={() =>
                console.log("Primary Normal Button Pressed Disabled")
              }
              leftIcon={<Ionicons name='add' size={16} color='white' />}
              rightIcon={<Ionicons name='heart' size={16} color='white' />}
              size='small'
              disabled
            />

            <PrimaryButton
              text='Primary Gost Normal Button'
              onPress={() => console.log("Primary Gost Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              size='small'
              type='ghost'
            />

            <PrimaryButton
              text='Primary Gost Normal Button Disabled'
              onPress={() =>
                console.log("Primary Gost Button Pressed Disabled")
              }
              leftIconName='add'
              rightIconName='heart'
              size='small'
              type='ghost'
              disabled
            />

            {/* // Secondary Buttons */}
            <SecondaryButton
              text='Secondary Normal Button'
              onPress={() => console.log("Secondary Normal Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
            />

            <SecondaryButton
              text='Secondary Normal Button Disabled'
              onPress={() =>
                console.log("Secondary Normal Button Pressed Disabled")
              }
              leftIcon={<Ionicons name='add' size={16} color='white' />}
              rightIcon={<Ionicons name='heart' size={16} color='white' />}
              disabled
            />

            <SecondaryButton
              text='Secondary Gost Normal Button'
              onPress={() => console.log("Secondary Gost Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              type='ghost'
            />

            <SecondaryButton
              text='Secondary Gost Normal Button Disabled'
              onPress={() =>
                console.log("Secondary Gost Button Pressed Disabled")
              }
              leftIconName='add'
              rightIconName='heart'
              type='ghost'
              disabled
            />

            <SecondaryButton
              text='Secondary Normal Button'
              onPress={() => console.log("Secondary Normal Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              size='small'
            />

            <SecondaryButton
              text='Secondary Normal Button Disabled'
              onPress={() =>
                console.log("Secondary Normal Button Pressed Disabled")
              }
              leftIcon={<Ionicons name='add' size={16} color='white' />}
              rightIcon={<Ionicons name='heart' size={16} color='white' />}
              size='small'
              disabled
            />

            <SecondaryButton
              text='Secondary Gost Normal Button'
              onPress={() => console.log("Secondary Gost Button Pressed")}
              leftIconName='add'
              rightIconName='heart'
              size='small'
              type='ghost'
            />

            <SecondaryButton
              text='Secondary Gost Normal Button Disabled'
              onPress={() =>
                console.log("Secondary Gost Button Pressed Disabled")
              }
              leftIconName='add'
              rightIconName='heart'
              size='small'
              type='ghost'
              disabled
            />
            <ThemeChanger />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ComponentDriver;
