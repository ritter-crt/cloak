import { v4 as uuid } from "uuid";

const unique_id = uuid();
export const small_id = unique_id.slice(0, 8);

export const categoryArray = [
  "tops",
  "shirts",
  "skirts",
  "trouses",
  "shorts",
  "onsies",
  "dresses",
  "jackets",
  "coats",
  "accessories",
];

export const difficultyArray = [
  "beginner",
  "easy",
  "medium",
  "intermediate",
  "expert",
];
