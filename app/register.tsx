import { Icon2Img } from "@/assets/images";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white px-5 py-10'>
      <View className='items-center mb-8'>
        <Image
          source={Icon2Img}
          className='w-full h-2/5'
          resizeMode='contain'
        />
      </View>

      {/* Input Fields */}
      <View className='space-y-4'>
        <View>
          <Text className='text-[#6D4C41] mb-1'>Name</Text>
          <TextInput
            placeholder='Input your name'
            className='w-full border border-gray-300 rounded-lg py-2 px-4 text-[#6D4C41]'
          />
        </View>
        <View>
          <Text className='text-[#6D4C41] mb-1'>No. Handphone</Text>
          <TextInput
            placeholder='Input your No. Handphone'
            className='w-full border border-gray-300 rounded-lg py-2 px-4 text-[#6D4C41]'
          />
        </View>
      </View>

      {/* Terms and Conditions */}
      <View className='mt-5'>
        <Text className='text-center text-sm text-gray-500'>
          By tapping <Text className='font-semibold'>"Register"</Text> you agree
          to our <Text className='text-blue-500 underline'>Terms of Use</Text>{" "}
          and <Text className='text-blue-500 underline'>Privacy Policy</Text>
        </Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        className='mt-8 w-full bg-gray-300 py-3 rounded-lg items-center'
        activeOpacity={0.7}
      >
        <Text className='text-gray-700 font-semibold'>Register</Text>
      </TouchableOpacity>

      {/* Login Option */}
      <View className='mt-5 items-center'>
        <Text className='text-sm text-gray-500'>
          Have an account?{" "}
          <Text className='text-[#6D4C41] font-semibold underline'>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
