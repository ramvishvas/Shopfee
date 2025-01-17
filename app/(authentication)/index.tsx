import { Icon2Img, OTPImg } from "@/assets/images";
import AuthContainer from "@/components/auth/AuthContainer";
import BrandLogo from "@/components/auth/BrandLogo";
import InputText from "@/components/InputText";
import PrimaryButton from "@/components/PrimaryButton";
import { ThemedModal } from "@/components/themes/ThemedModal";
import { ThemedText } from "@/components/themes/ThemedText";
import { sendOtp } from "@/redux/otpSlice";
import { useAppDispatch } from "@/redux/store";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";

const RegisterScreen = () => {
  // Form State
  const [form, setForm] = useState({
    name: "",
    number: "",
  });

  // Error State
  const [errors, setErrors] = useState({
    name: "",
    number: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  // Validation Logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", number: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!form.number.trim()) {
      newErrors.number = "Number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(form.number)) {
      newErrors.number = "Enter a valid 10-digit phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Input Changes
  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear field-specific error
  };

  // Submit Handler
  const handleRegister = () => {
    if (validateForm()) {
      setModalVisible(true);
    }
  };

  // Modal Confirm Action
  const onConfirm = () => {
    setModalVisible(false);

    dispatch(sendOtp(form.number));

    router.push("/(authentication)/otp");
  };

  return (
    <AuthContainer>
      {/* Logo */}
      <BrandLogo image={Icon2Img} />

      {/* Name Input */}
      <InputText
        placeholder='Input your name'
        label='Name'
        value={form.name}
        error={errors.name}
        className='mb-4'
        onChangeText={(value) => handleInputChange("name", value)}
      />

      {/* Phone Number Input */}
      <InputText
        placeholder='Input your number'
        label='Number'
        value={form.number}
        error={errors.number}
        className='mb-4'
        onChangeText={(value) => handleInputChange("number", value)}
      />

      {/* Terms and Conditions */}
      <View className='mt-1'>
        <ThemedText className='text-center text-sm text-gray-500 px-5'>
          By tapping <Text className='font-semibold'>"Register"</Text> you agree
          to our{" "}
          <ThemedText className='text-blue-500 underline'>
            Terms of Use
          </ThemedText>{" "}
          and{" "}
          <ThemedText className='text-blue-500 underline'>
            Privacy Policy
          </ThemedText>
        </ThemedText>
      </View>

      {/* Register Button */}
      <PrimaryButton
        text='Register'
        className='mt-8 w-full py-3 rounded-lg items-center'
        onPress={handleRegister}
      />

      {/* Login Option */}
      <View className='mt-5 items-center shrink-0'>
        <ThemedText className='text-sm text-gray-500'>
          Have an account?{" "}
          <Link href='/(authentication)/login' asChild replace>
            <ThemedText className='font-semibold underline'>Login</ThemedText>
          </Link>
        </ThemedText>
      </View>

      {/* Themed Modal */}
      <ThemedModal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='justify-center items-center'>
          <Image source={OTPImg} className='w-60 h-60' resizeMode='contain' />
        </View>
        <ThemedText className='text-center text-lg font-bold mt-8'>
          Send OTP code
        </ThemedText>
        <ThemedText className='text-center text-gray-500 my-6'>
          We will send the OTP code via SMS. Make sure the number {form.number}{" "}
          is active
        </ThemedText>

        <View className='flex-row justify-between items-center gap-x-10'>
          <View className='flex-1 flex-row justify-center items-center'>
            <PrimaryButton
              text='Cancel'
              onPress={() => setModalVisible(false)}
              textClassName='text-center font-semibold'
              className='py-3 px-4 rounded-full flex-1'
            />
          </View>

          <View className='flex-1'>
            <PrimaryButton
              text='Confirm'
              onPress={onConfirm}
              textClassName='text-center font-semibold'
              className='py-3 px-4 rounded-full flex-1'
            />
          </View>
        </View>
      </ThemedModal>
    </AuthContainer>
  );
};

export default RegisterScreen;
