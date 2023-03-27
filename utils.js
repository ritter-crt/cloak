import { v4 as uuid } from "uuid";

const unique_id = uuid();
export const small_id = unique_id.slice(0, 8);

export const categoryArray = [
  "tops",
  "bottoms",
  "onsies",
  "dresses",
  "jackets",
  "coats",
  "accessories",
];

export const difficultyArray = [
  "beginner",
  "easy",
  "intermediate",
  "medium",
  "expert",
];
