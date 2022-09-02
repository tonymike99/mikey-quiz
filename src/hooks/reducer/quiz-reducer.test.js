import { quizReducer } from "./quiz-reducer";
const axios = require("axios");

jest.mock("axios");

describe("QUIZ REDUCER", () => {
  beforeAll(() => console.log("connection setup"));
  afterAll(() => console.log("connection teardown"));

  test("verify successful api response", async () => {
    const params = {
      method: "get",
      baseURL: "https://opentdb.com",
      url: "/api.php?amount=10&category=10&type=multiple&encode=url3986",
    };

    const mockedQuizResponse = {
      id: 1,
      question: "What is your name?",
      correct_answer: ["A", "B", "C"],
      incorrect_answers: "D",
    };

    axios.request.mockResolvedValue({
      data: {
        results: [mockedQuizResponse],
      },
    });

    const actualResponse = await axios.request(params);

    expect(axios.request).toBeCalledWith(params);
    expect(actualResponse.data.results[0]).toEqual(mockedQuizResponse);
  });

  test("verify failed api response", async () => {
    const mockedQuizError = { message: "Network Error" };

    axios.request.mockResolvedValue(mockedQuizError);

    const actualResponse = await axios.request({
      method: "get",
      baseURL: "https://opentdb.com",
      url: "/api.php?amount=10&category=10&type=multiple&encode=url3986",
    });

    expect(actualResponse.message).toEqual(mockedQuizError.message);
  });

  test("add question to questions", () => {
    // ARRANGE
    const initialState = {
      questions: {},
      expectedAnswers: {},
      actualAnswers: {},
    };

    const action = {
      type: "ADD_QUESTION",
      payload: { questionNumber: "Q1", question: "What is your name?" },
    };

    const expectedState = {
      questions: { Q1: "What is your name?" },
      expectedAnswers: {},
      actualAnswers: {},
    };

    // ACT
    const actualState = quizReducer(initialState, action);

    // ASSERT
    expect(actualState).toEqual(expectedState);
  });

  test("add expectedAnswer to expectedAnswers", () => {
    // ARRANGE
    const initialState = {
      questions: {},
      expectedAnswers: {},
      actualAnswers: {},
    };

    const action = {
      type: "ADD_EXPECTED_ANSWER",
      payload: { questionNumber: "Q1", expectedAnswer: "Tony" },
    };

    const expectedState = {
      questions: {},
      expectedAnswers: { Q1: "Tony" },
      actualAnswers: {},
    };

    // ACT
    const actualState = quizReducer(initialState, action);

    // ASSERT
    expect(actualState).toEqual(expectedState);
  });

  test("add actualAnswer to actualAnswers", () => {
    // ARRANGE
    const initialState = {
      questions: {},
      expectedAnswers: {},
      actualAnswers: {},
    };

    const action = {
      type: "ADD_ACTUAL_ANSWER",
      payload: { questionNumber: "Q1", actualAnswer: "Peter" },
    };

    const expectedState = {
      questions: {},
      expectedAnswers: {},
      actualAnswers: { Q1: "Peter" },
    };

    // ACT
    const actualState = quizReducer(initialState, action);

    // ASSERT
    expect(actualState).toEqual(expectedState);
  });
});
