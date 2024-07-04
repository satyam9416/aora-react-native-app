import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
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
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="min-h-[85vh] px-4 justify-center">
          <Image
            source={images.logo}
            className="h-[100px] w-[180px]"
            resizeMode="contain"
          />

          <Text className="text-white text-2xl font-pbold mt-4">Sign up</Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(value) =>
              setForm((prev) => ({ ...prev, username: value }))
            }
            otherStyles="mt-8"
          />
          <FormField
            title="Email Address"
            value={form.email}
            placeholder="Enter your email address"
            handleChangeText={(value) => setForm({ ...form, email: value })}
            keyboardType="email-address"
            otherStyles="mt-4"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(value) => setForm({ ...form, password: value })}
            otherStyles="mt-4"
          />

          <CustomButton
            title={isLoading ? "Loading..." : "Sign Up"}
            handlePress={handleSubmit}
            containerStyles="mt-12"
            isLoading={isLoading}
          />

          <View className="justify-center mt-6 flex-row">
            <Text className="text-white">Already have an account? </Text>
            <Link href={"/sign-in"} className="text-secondary font-psemibold">
              <Text>Login</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
