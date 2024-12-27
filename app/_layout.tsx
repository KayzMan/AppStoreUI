import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/commonjs/src/types";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Home, Joystick, ArrowLeftCircle } from "lucide-react-native";

// Import your global CSS file
import "../global.css";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  const drawerContent = (props: DrawerContentComponentProps) => {
    return (
      <LinearGradient
        colors={["rgba(58, 131, 244, 0.6)", "rgba(9, 181, 211, 0.6)"]}
        className="w-full flex-1"
        style={{ flex: 1 }}
      >
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label={"Close"}
            onPress={() => {
              props.navigation.closeDrawer();
            }}
            icon={({ size, color }) => <ArrowLeftCircle size={size} />}
          />

          <DrawerItem
            label={"Home"}
            onPress={() => {
              props.navigation.jumpTo("home");
            }}
            icon={({ color, size }) => <Home color={color} size={size} />}
          />
          <DrawerItem
            label={"Games"}
            onPress={() => {
              props.navigation.jumpTo("index");
            }}
            icon={({ color, size }) => <Joystick color={color} size={size} />}
          />
        </DrawerContentScrollView>
      </LinearGradient>
    );
  };

  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: false }} drawerContent={drawerContent}>
        <Drawer.Screen name="index" />
        <Drawer.Screen name="home" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
