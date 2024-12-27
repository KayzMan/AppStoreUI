import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BellIcon } from "react-native-heroicons/solid";
import { DrawerToggleButton } from "@react-navigation/drawer";

import { storeColors } from "@/theme";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, 0.4)", "rgba(9, 181, 211, 0.4)"]}
      className="w-full flex-1"
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View className="flex-row justify-between items-center pr-4">
          <DrawerToggleButton tintColor={storeColors.text} pressColor={storeColors.text} pressOpacity={0.8} />
          <BellIcon color={storeColors.text} size={"30"} />
        </View>

        <View className="items-center justify-center h-[90%] w-full">
          <Text className="text-5xl">Home Screen 👋</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
