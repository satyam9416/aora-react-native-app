import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-up"
          options={{ title: "Sign Up", headerShown: false }}
        />
        <Stack.Screen
          name="sign-in"
          options={{ title: "Sign In", headerShown: false }}
        />
      </Stack>
      <StatusBar style="light" backgroundColor="#161622" />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
