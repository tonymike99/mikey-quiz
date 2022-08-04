import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

type ChildrenProps = {
  children: React.ReactNode;
};

const defaultObj = {};
const QuizContext = createContext(defaultObj);

const QuizProvider = ({ children }: ChildrenProps) => {
  const initialState = {
    questions: {},
    expectedAnswers: {},
    actualAnswers: {},
  };

  const [quizStates, dispatch] = useReducer(quizReducer, initialState);

  const valueObj = { quizStates, dispatch };

  return (
    <QuizContext.Provider value={valueObj}>{children}</QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
