import {
  CoffeeFourImg,
  CoffeeOneImg,
  CoffeeThreeImg,
  CoffeeTwoImg,
  PromoOneImg,
} from "@/assets/images";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const data = [
    {
      id: "1",
      name: "Coffee Milk",
      description: "Ice americano + fresh milk",
      price: "Rp25.000",
      rating: 4.9,
      image: CoffeeOneImg,
    },
    {
      id: "2",
      name: "Cocoa Caramel Latte",
      description: "Steamed milk with mocha and caramel sauces",
      price: "Rp35.500",
      discountedPrice: "Rp38.000",
      rating: 4.6,
      image: CoffeeTwoImg,
    },
    {
      id: "3",
      name: "Nitro Cold Brew",
      description: "Cold brew with nitrogen, without sugar, velvety crema.",
      price: "Rp31.000",
      rating: 4.4,
      image: CoffeeThreeImg,
    },
    {
      id: "4",
      name: "Caffe Mocha",
      description: "Espresso with mocha sauce, milk and whipped cream.",
      price: "Rp29.000",
      rating: 4.7,
      image: CoffeeFourImg,
    },
  ];

  return (
    <SafeAreaView className='flex-1 bg-white px-4'>
      {/* Search Bar */}
      <View className='flex-row items-center space-x-3 my-4'>
        <TextInput
          placeholder='What would you like to drink today?'
          className='flex-1 bg-[#F7F7F7] px-4 py-3 rounded-lg text-sm'
        />
        {/* <TouchableOpacity>
          <Image source={FiBellLiteIcon} className='w-5 h-5' />
        </TouchableOpacity> */}
      </View>

      {/* Special Offer Card */}
      <View className='w-full bg-[#FCE9E9] rounded-lg p-4 mb-4 flex-row items-center'>
        <Image
          source={PromoOneImg}
          className='w-1/3 h-16'
          resizeMode='contain'
        />
      </View>

      {/* Category Tabs */}
      <View className='flex-row items-center justify-around mb-4'>
        <Text className='text-[#333] font-semibold border-b-2 border-[#333]'>
          Coffee
        </Text>
        <Text className='text-[#666]'>Non Coffee</Text>
        <Text className='text-[#666]'>Pastry</Text>
      </View>

      {/* Filter Buttons */}
      <View className='flex-row justify-start space-x-3 mb-4'>
        <TouchableOpacity className='flex-row items-center bg-[#F7F7F7] px-3 py-2 rounded-full'>
          {/* <Image
            source={require("@/assets/icons/filter-icon.png")}
            className='w-4 h-4 mr-2'
          /> */}
          <Text className='text-[#666] text-sm'>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F7F7F7] px-3 py-2 rounded-full'>
          <Text className='text-[#666] text-sm'>Rating 4.5+</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F7F7F7] px-3 py-2 rounded-full'>
          <Text className='text-[#666] text-sm'>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F7F7F7] px-3 py-2 rounded-full'>
          <Text className='text-[#666] text-sm'>Promo</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className='flex-row items-center py-3 border-b border-[#EDEDED]'>
            <Image
              source={item.image}
              className='w-14 h-14 rounded-full mr-3'
            />
            <View className='flex-1'>
              <Text className='text-[#333] font-semibold'>{item.name}</Text>
              <Text className='text-[#666] text-sm'>{item.description}</Text>
            </View>
            <View className='items-end'>
              {item.discountedPrice && (
                <Text className='text-[#D3D3D3] line-through text-sm'>
                  {item.discountedPrice}
                </Text>
              )}
              <Text className='text-[#333] font-bold'>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
