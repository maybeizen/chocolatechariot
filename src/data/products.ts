import { Product } from "../types";

export const products: Product[] = [
  // 🍫 Chocolate-Dipped
  {
    id: "strawberries",
    name: "Strawberries",
    category: "chocolate-dipped",
  },
  {
    id: "banana",
    name: "Banana",
    category: "chocolate-dipped",
  },
  {
    id: "pretzels",
    name: "Pretzels",
    category: "chocolate-dipped",
  },
  {
    id: "raisins",
    name: "Raisins",
    category: "chocolate-dipped",
  },
  {
    id: "marshmallows",
    name: "Marshmallows",
    category: "chocolate-dipped",
  },

  // 🍬 Classics
  {
    id: "sour-gummies",
    name: "Sour Gummies",
    category: "classics",
  },
  {
    id: "chocolate-coins",
    name: "Chocolate Coins",
    category: "classics",
  },
  {
    id: "caramel-chews",
    name: "Caramel Chews",
    category: "classics",
  },
  {
    id: "candy-sticks",
    name: "Candy Sticks",
    category: "classics",
  },
  {
    id: "mini-mix",
    name: "Mini Candy Bar Mix",
    category: "classics",
  },

  // 🌞 Season Specials (Summer)
  {
    id: "frozen-bananas",
    name: "Frozen Banana Bites",
    category: "season-specials",
  },
  {
    id: "smores-clusters",
    name: "S’mores Clusters",
    category: "season-specials",
  },
  {
    id: "tropical-mix",
    name: "Tropical Gummy Mix",
    category: "season-specials",
  },
  {
    id: "berry-truffles",
    name: "Berry-Filled Truffles",
    category: "season-specials",
    isPremium: true,
  },
  {
    id: "ice-cream-shakes",
    name: "Ice-Cream Shakes",
    category: "season-specials",
  },

  // 🎁 Build Your Box
  {
    id: "build-your-box",
    name: "Build-Your-Box",
    category: "build-your-box",
    description:
      "Choose any 5+ items from any section. +$1 for premium items like truffles. Comes in a decorated box.",
    priceNote: "Price varies by weight.",
  },
];
