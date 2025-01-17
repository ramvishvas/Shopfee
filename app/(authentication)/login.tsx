import { Icon2Img, OTPImg } from "@/assets/images";
import AuthContainer from "@/components/auth/AuthContainer";
import BrandLogo from "@/components/auth/BrandLogo";
import InputText from "@/components/InputText";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { ThemedModal } from "@/components/themes/ThemedModal";
import { ThemedText } from "@/components/themes/ThemedText";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Image } from "react-native";

const LoginScreen = () => {
  // Form State
  const [form, setForm] = useState({
    number: "",
  });

  // Error State
  const [errors, setErrors] = useState({
    number: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onConfirm = () => {
    setModalVisible(false);
    router.push("/(authentication)/confirm-password");
  };

  // Validation Logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = { number: "" };

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

  // Submit Handler
  const handleLogin = () => {
    if (validateForm()) {
      setModalVisible(true);
    }
  };

  // Handle Input Changes
  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear field-specific error
  };

  return (
    <AuthContainer>
      <BrandLogo image={Icon2Img} />

      {/* Phone Number Input */}
      <InputText
        placeholder='Input your number'
        label='Number'
        value={form.number}
        error={errors.number}
        className='mb-4'
        onChangeText={(value) => handleInputChange("number", value)}
      />

      {/* Register Button */}
      <PrimaryButton
        text='Register'
        className='mt-8 w-full py-3 rounded-lg items-center'
        onPress={handleLogin}
      />

      {/* Login Option */}
      <View className='mt-5 items-center shrink-0'>
        <ThemedText className='text-sm text-gray-500'>
          Don’t have an account?{" "}
          <Link href='/(authentication)' asChild replace>
            <ThemedText className='font-semibold underline'>
              Register
            </ThemedText>
          </Link>
        </ThemedText>
      </View>

      {/* Themed Modal */}
      <ThemedModal visible={isModalVisible} onRequestClose={toggleModal}>
        <View className='justify-center items-center'>
          <Image source={OTPImg} className='w-60 h-60' resizeMode='contain' />
        </View>
        <ThemedText className='text-center text-lg font-bold mt-8'>
          Send OTP code
        </ThemedText>
        <ThemedText className='text-center text-gray-500 my-6'>
          We will send the OTP code via SMS. Make sure the number 081234567891
          is active
        </ThemedText>

        <View className='flex-row justify-between items-center gap-x-10'>
          <View className='flex-1 flex-row justify-center items-center'>
            <SecondaryButton
              text='Cancel'
              onPress={toggleModal}
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

export default LoginScreen;
