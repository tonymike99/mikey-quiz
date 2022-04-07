import { useState } from "react";
import { useQuiz } from "../hooks/context/index";

function QuizCard({ quizDatum, index }) {
  let { question, correct_answer, incorrect_answers } = quizDatum;

  // DECODING
  question = decodeURIComponent(question);
  correct_answer = decodeURIComponent(correct_answer);
  incorrect_answers[0] = decodeURIComponent(incorrect_answers[0]);
  incorrect_answers[1] = decodeURIComponent(incorrect_answers[1]);
  incorrect_answers[2] = decodeURIComponent(incorrect_answers[2]);

  let options_array = [correct_answer, ...incorrect_answers];

  // Randomising the array
  options_array.sort(() => Math.random() - 0.5);

  // ****************************************************************************************************

  const {
    questions,
    setQuestions,
    expectedAnswers,
    setExpectedAnswers,
    actualAnswers,
    setActualAnswers,
  } = useQuiz();

  // Set questions

  if (questions[`Q${index + 1}`] === undefined) {
    setQuestions({
      [`Q${index + 1}`]: question,
      ...questions,
    });
  }

  // Set expected answers

  if (expectedAnswers[`Q${index + 1}`] === undefined) {
    setExpectedAnswers({
      [`Q${index + 1}`]: correct_answer,
      ...expectedAnswers,
    });
  }

  // Set the chosen option to selectedAns

  const [selectedAns, setSelectedAns] = useState(null);

  // Handle the button click of an option

  const handleButtonClick = (e) => {
    setSelectedAns(e.target.innerText);

    // Set actual answers

    if (actualAnswers[`Q${index + 1}`] === undefined) {
      setActualAnswers({
        ...actualAnswers,
        [`Q${index + 1}`]: e.target.innerText,
      });
    }
  };

  // ****************************************************************************************************

  return (
    <>
      <div className="quiz-card">
        <h5 className="text-center">Question {index + 1}</h5>
        <h3 className="question text-center">{question}</h3>

        <div className="options">
          <button
            className={
              selectedAns === options_array[0]
                ? "btn warning btn-fixed"
                : "btn secondary btn-fixed"
            }
            disabled={selectedAns}
            onClick={(e) => handleButtonClick(e)}
          >
            {options_array[0]}
          </button>

          <button
            className={
              selectedAns === options_array[1]
                ? "btn warning btn-fixed"
                : "btn secondary btn-fixed"
            }
            disabled={selectedAns}
            onClick={(e) => handleButtonClick(e)}
          >
            {options_array[1]}
          </button>

          <button
            className={
              selectedAns === options_array[2]
                ? "btn warning btn-fixed"
                : "btn secondary btn-fixed"
            }
            disabled={selectedAns}
            onClick={(e) => handleButtonClick(e)}
          >
            {options_array[2]}
          </button>

          <button
            className={
              selectedAns === options_array[3]
                ? "btn warning btn-fixed"
                : "btn secondary btn-fixed"
            }
            disabled={selectedAns}
            onClick={(e) => handleButtonClick(e)}
          >
            {options_array[3]}
          </button>
        </div>

        <h5 className="text-bold text-center margin-2">
          {selectedAns && `You have chosen "${selectedAns}"`}
        </h5>
      </div>
    </>
  );
}

export { QuizCard };
