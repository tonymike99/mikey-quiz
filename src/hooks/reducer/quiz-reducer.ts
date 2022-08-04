type State = {
  questions: {};
  expectedAnswers: {};
  actualAnswers: {};
};

type Action = {
  type: string;
  payload: {
    questionNumber: string;
    question: string;
    expectedAnswer: string;
    actualAnswer: string;
  };
};

export const quizReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.questionNumber]: action.payload.question,
        },
      };

    case "ADD_EXPECTED_ANSWER":
      return {
        ...state,
        expectedAnswers: {
          ...state.expectedAnswers,
          [action.payload.questionNumber]: action.payload.expectedAnswer,
        },
      };

    case "ADD_ACTUAL_ANSWER":
      return {
        ...state,
        actualAnswers: {
          ...state.actualAnswers,
          [action.payload.questionNumber]: action.payload.actualAnswer,
        },
      };

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};
