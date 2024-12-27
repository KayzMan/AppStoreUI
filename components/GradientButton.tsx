import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton({
  containerClass,
  buttonClass,
  value,
}: {
  containerClass?: string;
  buttonClass?: string;
  value: String;
}) {
  return (
    <LinearGradient
      colors={["rgba(9, 181, 211, 0.9)", "rgba(58, 131, 244, 0.9)"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      className={`rounded-full ${containerClass}`}
      style={{ marginRight: containerClass?.toLocaleLowerCase().includes("mr-2") ? 8 : 0, borderRadius: 200 }}
    >
      <TouchableOpacity className={`p-3 px-4 ${buttonClass}`}>
        <Text className="text-white font-bold">{value}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
