import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { storeColors } from "@/theme";
import { categories, CategoryType } from "@/constants";

import GradientButton from "./GradientButton";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Action");

  return (
    <View className="mt-3 space-y-3 gap-y-3">
      <Text style={{ color: storeColors.text }} className="ml-4 font-bold text-3xl">
        Browse Games
      </Text>

      <View className="pl-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {categories.map((cat) => {
            if (cat === activeCategory) {
              // show gradient category
              return <GradientButton key={cat} value={cat} containerClass="mr-2" />;
            } else {
              // show normal category
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  key={cat}
                  className="bg-blue-200 rounded-full p-3 px-4 mr-2"
                >
                  <Text>{cat}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
}
