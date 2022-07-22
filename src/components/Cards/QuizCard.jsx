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

  const {
    questions,
    setQuestions,
    expectedAnswers,
    setExpectedAnswers,
    actualAnswers,
    setActualAnswers,
  } = useQuiz();

  // Set the chosen option to selectedAns
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handle the button click of an option
  const handleButtonClick = (e) => {
    setSelectedAnswer(e.target.innerText);

    // Add selected answer to ActualAnswersList
    setActualAnswers({
      ...actualAnswers,
      [`Q${index + 1}`]: e.target.innerText,
    });

    setQuestions({
      ...questions,
      [`Q${index + 1}`]: question,
    });

    setExpectedAnswers({
      ...expectedAnswers,
      [`Q${index + 1}`]: correct_answer,
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
