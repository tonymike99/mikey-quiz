import { useState } from "react";
import { useQuiz } from "../../hooks/context/index";

function QuizCard({ quizDatum, index }) {
  let { question, correct_answer, incorrect_answers } = quizDatum;

  // DECODING SINCE API DATA MIGHT BE IN ASCII
  question = decodeURIComponent(question);
  correct_answer = decodeURIComponent(correct_answer);
  incorrect_answers[0] = decodeURIComponent(incorrect_answers[0]);
  incorrect_answers[1] = decodeURIComponent(incorrect_answers[1]);
  incorrect_answers[2] = decodeURIComponent(incorrect_answers[2]);

  let options = [correct_answer, ...incorrect_answers];

  // Randomising the options
  options.sort(() => Math.random() - 0.5);

  // ****************************************************************************************************

  const { dispatch } = useQuiz();

  // Set the chosen option to selectedAns
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handle the button click of an option
  const handleButtonClick = (e) => {
    setSelectedAnswer(e.target.innerText);

    dispatch({
      type: "ADD_QUESTION",
      payload: {
        questionNumber: `Q${index + 1}`,
        question: question,
      },
    });

    dispatch({
      type: "ADD_EXPECTED_ANSWER",
      payload: {
        questionNumber: `Q${index + 1}`,
        expectedAnswer: correct_answer,
      },
    });

    // Add selected answer to ActualAnswersList
    dispatch({
      type: "ADD_ACTUAL_ANSWER",
      payload: {
        questionNumber: `Q${index + 1}`,
        actualAnswer: e.target.innerText,
      },
    });
  };

  // ****************************************************************************************************

  return (
    <div className="quiz-card">
      <h2 className="h2 text-center">Question {index + 1}</h2>
      <h4 className="h4 text-center margin-bottom-2">{question}</h4>

      <div className="quiz-options">
        {options.map((option) => (
          <button
            key={option}
            className={
              selectedAnswer === option
                ? "btn warning btn-option"
                : "btn secondary btn-option"
            }
            disabled={selectedAnswer}
            onClick={(e) => handleButtonClick(e)}
          >
            {option}
          </button>
        ))}
      </div>

      <h4 className="h4 text-center margin-2">
        {selectedAnswer && `You have chosen "${selectedAnswer}"`}
      </h4>
    </div>
  );
}

export { QuizCard };
