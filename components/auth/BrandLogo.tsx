import { View, Image, ImageSourcePropType } from "react-native";

interface BrandLogoProps {
  image: ImageSourcePropType;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ image }) => {
  return (
    <View className='items-center mb-8'>
      <Image
        source={image}
        resizeMode='contain'
        style={{
          width: 240,
          height: 160,
        }}
      />
    </View>
  );
};

export default BrandLogo;
