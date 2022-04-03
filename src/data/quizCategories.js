import { v4 as uuid } from "uuid";

const quizCategories = [
  { _id: uuid(), name: "entertainment", imgUrl: "entertainment.jpg" },
  { _id: uuid(), name: "science", imgUrl: "science.jpg" },
];

const entertainmentQuizCategories = [
  { _id: uuid(), name: "music", imgUrl: "ronaldo.jpg" },
  { _id: uuid(), name: "movies", imgUrl: "dhoni.jpg" },
  { _id: uuid(), name: "books", imgUrl: "dhoni.jpg" },
];

const scienceQuizCategories = [
  { _id: uuid(), name: "mathematics", imgUrl: "ronaldo.jpg" },
  { _id: uuid(), name: "computers", imgUrl: "dhoni.jpg" },
  { _id: uuid(), name: "gadgets", imgUrl: "dhoni.jpg" },
];

export { quizCategories, entertainmentQuizCategories, scienceQuizCategories };
