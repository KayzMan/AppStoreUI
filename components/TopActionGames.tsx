import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { ArrowDownTrayIcon } from "react-native-heroicons/solid";

import { storeColors } from "@/theme";
import { games } from "@/constants";

import GradientButton from "./GradientButton";

export default function TopActionGames() {
  const [selectedGame, setSelectedGame] = useState<null | number>(null);

  return (
    <View className="mt-3">
      <View className="flex-row justify-between items-center mb-2">
        <Text style={{ color: storeColors.text }} className="ml-4 text-lg font-bold">
          Top Action Games
        </Text>

        <TouchableOpacity className="mr-4">
          <Text className="text-blue-600 font-bold">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ height: 320 }} showsVerticalScrollIndicator={false}>
        {games.map((game, index) => {
          let bg = game.id === selectedGame ? "rgba(255, 255, 255, 0.4)" : "transparent";

          return (
            <TouchableOpacity
              style={{ backgroundColor: bg }}
              key={index}
              className="mx-4 p-2 mb-2 flex-row rounded-3xl"
              onPress={() => setSelectedGame(game.id)}
            >
              <Image
                source={game.image}
                alt="game-image"
                className="rounded-2xl"
                style={{ width: 80, height: 80 }}
              />

              <View className="flex-1 justify-center pl-3 space-y-3 gap-y-3">
                <Text style={{ color: storeColors.text }} className="font-semibold">
                  {game.title}
                </Text>

                <View className="flex-row space-x-3 gap-x-3">
                  <View className="flex-row space-x-1 gap-x-1">
                    <Image className="h-4 w-4 opacity-80" source={require("@/assets/images/fullStar.png")} />

                    <Text className="text-xs text-gray-700">{game.stars} stars</Text>
                  </View>

                  <View className="flex-row space-x-1 gap-x-1">
                    <ArrowDownTrayIcon size={15} className="text-blue-500" />

                    <Text className="text-xs text-gray-700">{game.downloads}</Text>
                  </View>
                </View>
              </View>

              <View className="flex justify-center items-center">
                <GradientButton value={"play"} buttonClass="py-2 px-5" />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
