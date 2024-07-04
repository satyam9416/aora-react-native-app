import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary items-center">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        <View className="items-center">
          <Image
            source={images.logo}
            className="h-[100px] w-[180px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[400px] h-[280px]"
            resizeMode="contain"
          />

          <View className="relative">
            <Text className="text-white text-3xl tex  text-center mt-5 font-pbold">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary ">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-white text-center font-plight text-sm mt-8 max-w-[90%]">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="continue with email"
            containerStyles="w-[80%] mt-8"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
