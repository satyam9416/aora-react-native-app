import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsLoading(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[85vh] justify-center px-4">
          <Image
            source={images.logo}
            className="h-[100px] w-[180px]"
            resizeMode="contain"
          />

          <Text className="text-white text-2xl font-pbold mt-4">Sign In</Text>

          <FormField
            title="Email Address"
            placeholder="Enter your email address"
            value={form.email}
            handleChangeText={(value) => setForm({ ...form, email: value })}
            keyboardType="email-address"
            otherStyles="mt-8"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(value) => setForm({ ...form, password: value })}
            otherStyles="mt-4"
          />

          <CustomButton
            title={isLoading ? "Loading..." : "Login"}
            containerStyles="mt-12"
            handlePress={handleSubmit}
            isLoading={isLoading}
          />
          <View className="justify-center mt-6 flex-row">
            <Text className="text-white">Don't have an account? </Text>
            <Link href={"/sign-up"} className="text-secondary font-psemibold">
              <Text>Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
