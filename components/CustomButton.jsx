import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  isLoading,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[64px] justify-center items-center ${containerStyles}`}
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={handlePress}
    >
      <Text
        className={`text-primary text-lg text-center font-psemibold ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
