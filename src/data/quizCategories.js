import { v4 as uuid } from "uuid";

const quizCategories = [
  {
    _id: uuid(),
    name: "entertainment",
    imgUrl: "entertainment.svg",
    subCategories: [
      {
        _id: 10,
        name: "books",
        imgUrl: "books.svg",
      },
      {
        _id: 11,
        name: "movies",
        imgUrl: "movies.svg",
      },
      {
        _id: 12,
        name: "music",
        imgUrl: "music.svg",
      },
    ],
  },
  {
    _id: uuid(),
    name: "science",
    imgUrl: "science.svg",
    subCategories: [
      {
        _id: 18,
        name: "computers",
        imgUrl: "laptop.svg",
      },
      {
        _id: 19,
        name: "mathematics",
        imgUrl: "mathematics.svg",
      },
      {
        _id: 30,
        name: "gadgets",
        imgUrl: "gadgets.svg",
      },
    ],
  },
];

export { quizCategories };
