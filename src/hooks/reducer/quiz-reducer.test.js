import { quizReducer } from "./quiz-reducer";

describe("QUIZ REDUCER", () => {
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
