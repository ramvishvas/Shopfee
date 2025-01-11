import { PasswordImg } from "@/assets/images";
import { ThemedView } from "@/components/themes/ThemedView";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";

const ConfirmPasswordScreen = () => {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Automatically focus the next input
    if (value && index < 5) {
      const nextInput = `input${index + 1}`;
      (this as any)[nextInput]?.focus();
    }
  };

  const handleSubmit = () => {
    const pinCode = pin.join("");
    console.log("Entered PIN:", pinCode);
    // Handle PIN submission here
    router.replace("/(tabs)");
  };

  return (
    <ThemedView className='flex-1 p-5'>
      <KeyboardAvoidingView className='flex-1'>
        {/* Illustration */}
        <Image
          source={PasswordImg}
          className='w-48 h-48 mx-auto mb-6'
          resizeMode='contain'
        />

        {/* Title and Description */}
        <Text className='text-lg text-center font-semibold text-[#333] mb-2'>
          Finally, Your final step...
        </Text>
        <Text className='text-sm text-center text-[#666] mb-8'>
          Enter 6 numbers to keep your account safe
        </Text>

        {/* PIN Input */}
        <View className='flex-row justify-center items-center gap-x-4 space-x-4 mb-8'>
          {pin.map((value, index) => (
            <TextInput
              key={index}
              className='w-12 h-12 border border-[#333] rounded-full text-center text-xl'
              value={value}
              keyboardType='numeric'
              maxLength={1}
              onChangeText={(value) => handleInputChange(value, index)}
              ref={(ref) => ((this as any)[`input${index}`] = ref)} // Set ref dynamically
            />
          ))}
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          className={`py-3 rounded-lg ${
            pin.join("").length === 6 ? "bg-[#6D4C41]" : "bg-[#D3D3D3]"
          }`}
          onPress={handleSubmit}
          disabled={pin.join("").length !== 6}
        >
          <Text className='text-center text-white font-semibold text-base'>
            Confirm
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default ConfirmPasswordScreen;
