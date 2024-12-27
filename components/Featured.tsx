import { View, Text, ScrollView } from "react-native";
import React from "react";

import { storeColors } from "@/theme";
import { featured } from "@/constants";

import GameCard from "./GameCard";
import TopActionGames from "./TopActionGames";

export default function Featured() {
  return (
    <View className="mt-3 space-y-4 gap-y-4">
      <Text style={{ color: storeColors.text }} className="ml-4 text-lg font-bold">
        Featured Games
      </Text>

      <View className="pl-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featured.map((item, index) => {
            return (
              // game card component
              <GameCard key={index} game={item} />
            );
          })}
        </ScrollView>
      </View>

      {/* top action games list */}
      <TopActionGames />
    </View>
  );
}
