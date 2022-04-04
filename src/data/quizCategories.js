import { v4 as uuid } from "uuid";

const quizCategories = [
  {
    _id: uuid(),
    name: "entertainment",
    imgUrl: "entertainment.jpg",
    subCategories: [
      { _id: uuid(), name: "music", imgUrl: "music.jpg" },
      { _id: uuid(), name: "movies", imgUrl: "movies.jpg" },
      { _id: uuid(), name: "books", imgUrl: "books.jpg" },
    ],
  },
  {
    _id: uuid(),
    name: "science",
    imgUrl: "science.jpg",
    subCategories: [
      { _id: uuid(), name: "mathematics", imgUrl: "mathematics.jpg" },
      { _id: uuid(), name: "computers", imgUrl: "computers.jpg" },
      { _id: uuid(), name: "gadgets", imgUrl: "gadgets.jpg" },
    ],
  },
];

export { quizCategories };
