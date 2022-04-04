import { v4 as uuid } from "uuid";

const quizCategories = [
  {
    _id: uuid(),
    name: "entertainment",
    imgUrl: "entertainment.jpg",
    subCategories: [
      { _id: 10, name: "books", imgUrl: "books.jpg" },
      { _id: 11, name: "movies", imgUrl: "movies.jpg" },
      { _id: 12, name: "music", imgUrl: "music.jpg" },
    ],
  },
  {
    _id: uuid(),
    name: "science",
    imgUrl: "science.jpg",
    subCategories: [
      { _id: 18, name: "computers", imgUrl: "computers.jpg" },
      { _id: 19, name: "mathematics", imgUrl: "mathematics.jpg" },
      { _id: 30, name: "gadgets", imgUrl: "gadgets.jpg" },
    ],
  },
];

export { quizCategories };
