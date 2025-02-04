import { ImageSourcePropType } from "react-native";

export type CategoryType = "Action" | "Family" | "Puzzle" | "Adventure" | "Racing" | "Education" | "Others";

export interface featuredType {
  id: number;
  title: string;
  image: ImageSourcePropType;
  downloads: string;
  stars: number;
}

export interface gameType extends featuredType {}

export const categories: CategoryType[] = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
  "Others",
];

export const featured: featuredType[] = [
  {
    id: 1,
    title: "Zooba",
    image: require("@/assets/images/zooba.png"),
    downloads: "200k",
    stars: 4,
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("@/assets/images/subway.png"),
    downloads: "5M",
    stars: 4,
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("@/assets/images/freeFire.png"),
    downloads: "100M",
    stars: 3,
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require("@/assets/images/altosAdventure.png"),
    downloads: "20k",
    stars: 4,
  },
];

export const games: gameType[] = [
  {
    id: 1,
    title: "Shadow Fight",
    image: require("@/assets/images/shadowFight.png"),
    downloads: "20M",
    stars: 4.5,
  },
  {
    id: 2,
    title: "Valor Arena",
    image: require("@/assets/images/valorArena.png"),
    downloads: "10k",
    stars: 3.4,
  },
  {
    id: 3,
    title: "Frag",
    image: require("@/assets/images/frag.png"),
    downloads: "80k",
    stars: 4.6,
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require("@/assets/images/zoobaGame.png"),
    downloads: "40k",
    stars: 3.5,
  },
  {
    id: 5,
    title: "Clash of Clans",
    image: require("@/assets/images/clashofclans.png"),
    downloads: "20k",
    stars: 4.2,
  },
];
