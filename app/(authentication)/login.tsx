import { Icon2Img, OTPImg } from "@/assets/images";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { ThemedModal } from "@/components/themes/ThemedModal";
import { ThemedText } from "@/components/themes/ThemedText";
import { ThemedTextInput } from "@/components/themes/ThemedTextInput";
import { ThemedView } from "@/components/themes/ThemedView";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onConfirm = () => {
    setModalVisible(false);
    router.push("/(authentication)/confirm-password");
  };

  return (
    <SafeAreaView className='flex-1'>
      <ThemedView className='flex-1 px-5 py-10'>
        <View className='flex-1 justify-center'>
          <View className='items-center mb-8'>
            <Image
              source={Icon2Img}
              className='w-60 h-32'
              resizeMode='contain'
            />
          </View>

          <View>
            <ThemedText className='mb-2'>Number</ThemedText>
            <ThemedTextInput placeholder='Input your number' />
          </View>

          <PrimaryButton
            text='Login'
            className='mt-8 w-full py-3 rounded-lg items-center'
            onPress={toggleModal}
          />
        </View>

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
      </ThemedView>

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
    </SafeAreaView>
  );
};

export default LoginScreen;
