import { ThemedText } from "@/components/themes/ThemedText";
import { ThemedView } from "@/components/themes/ThemedView";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < 4) {
      const nextInput = `input${index + 1}`;
      (this as any)[nextInput]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
    // Handle OTP submission here
    router.replace("/(authentication)/create-password");
  };

  const resendCode = () => {
    console.log("Resend code");
    // Handle resend functionality here
  };

  return (
    <ThemedView className='flex-1  px-5 justify-center'>
      <KeyboardAvoidingView className='flex-1 mt-20'>
        <ThemedText className='text-xl font-bold text-center mb-4'>
          081234567891
        </ThemedText>

        <ThemedText className='text-sm text-center mb-8'>
          Enter the 5-digit OTP code that has been sent from SMS to complete
          your account registration
        </ThemedText>

        {/* OTP Input */}
        <View className='flex-row justify-center items-center gap-x-2 space-x-2 mb-8'>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              className='w-12 h-14 border border-[#333] rounded-md text-center text-xl'
              value={otp[index]}
              keyboardType='numeric'
              maxLength={1}
              onChangeText={(value) => handleInputChange(value, index)}
              ref={(ref) => ((this as any)[`input${index}`] = ref)} // Set ref dynamically
            />
          ))}
        </View>

        {/* Resend Link */}
        <TouchableOpacity onPress={resendCode} className='mb-8'>
          <Text className='text-center text-sm text-[#666]'>
            Haven't got the confirmation code yet?{" "}
            <Text className='text-[#6D4C41] font-semibold'>Resend</Text>
          </Text>
        </TouchableOpacity>

        {/* Confirm Button */}
        <TouchableOpacity
          className={`py-3 rounded-lg ${
            otp.join("").length === 5 ? "bg-[#6D4C41]" : "bg-[#D3D3D3]"
          }`}
          onPress={handleSubmit}
          disabled={otp.join("").length !== 5}
        >
          <Text className='text-center text-white font-semibold text-base'>
            Confirm
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default OtpScreen;
