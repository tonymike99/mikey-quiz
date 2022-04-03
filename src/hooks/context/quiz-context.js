import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const QuizContext = createContext(defaultObj);

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState({});
  const [expectedAnswers, setExpectedAnswers] = useState({});
  const [actualAnswers, setActualAnswers] = useState({});

  const valueObj = {
    questions,
    setQuestions,
    expectedAnswers,
    setExpectedAnswers,
    actualAnswers,
    setActualAnswers,
  };

  return (
    <QuizContext.Provider value={valueObj}>{children}</QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
