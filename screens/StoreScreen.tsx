import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BellIcon } from "react-native-heroicons/solid";
import { DrawerToggleButton } from "@react-navigation/drawer";

import { storeColors } from "@/theme";

import Categories from "@/components/Categories";
import Featured from "@/components/Featured";

const StoreScreen = () => {
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

        {/* categories */}
        <Categories />

        {/* featured row */}
        <Featured />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StoreScreen;
