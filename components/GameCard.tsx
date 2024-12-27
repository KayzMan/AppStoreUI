import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StarRating from "react-native-star-rating-widget";

import { featuredType } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";
import { storeColors } from "@/theme";

interface GameCardProps {
  game: featuredType;
}

export default function GameCard({ game }: GameCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          borderRadius: 20,
          padding: 16,
        }}
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <HeartIcon size={"25"} color={isFavorite ? storeColors.redHeart : "white"} />
          </TouchableOpacity>
        </View>

        <View className="space-y-1 gap-y-1">
          <StarRating
            rating={game.stars}
            onChange={() => {}}
            maxStars={5}
            starSize={15}
            emptyColor="white"
            style={{ width: 90 }}
          />

          <Text className="text-xl font-bold text-gray-300">{game.title}</Text>

          <View className="flex-row items-center space-x-2 gap-x-2">
            <ArrowDownTrayIcon size={18} color="lightgray" />

            <Text className="text-sm text-gray-300 font-semibold">{game.downloads} Downloads</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
