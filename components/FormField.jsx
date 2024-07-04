import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-600 font-pmedium">{title}</Text>
      <View
        className={`bg-black-100 border rounded-xl h-[50px] border-black-200 flex-row items-center focus:border-2 focus:border-secondary`}
      >
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={"#7B7B7B"}
          secureTextEntry={title === "Password" && !showPass}
          className={`text-base text-white font-pregular grow p-2`}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPass((v) => !v)}
          >
            <Image
              source={showPass ? icons.eyeHide : icons.eye}
              className="w-6 h-6 mr-3"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
