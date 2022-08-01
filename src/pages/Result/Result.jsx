import styles from "./Result.module.css";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useQuiz } from "../../hooks/context/index";

function Result() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Result");

  // ****************************************************************************************************

  // useQuiz
  const { quizStates } = useQuiz();

  let totalQuestionsCount = Object.keys(quizStates.questions).length;
  let correctAnswersCount = Object.keys(quizStates.questions).reduce(
    (acc, cur) =>
      quizStates.expectedAnswers[cur] === quizStates.actualAnswers[cur]
        ? (acc += 1)
        : acc,
    0
  );
  let incorrectAnswersCount = totalQuestionsCount - correctAnswersCount;
  let maximumMarks = totalQuestionsCount * 5;
  let obtainedMarks = correctAnswersCount * 5;
  let percentageOfCorrectAnswers = parseFloat(
    (correctAnswersCount / totalQuestionsCount) * 100
  ).toFixed(2);

  // ****************************************************************************************************

  return (
    <main>
      <section>
        <h2 className="h2 text-center margin-bottom-2">Result Summary</h2>

        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th className="text-center">Number</th>
                <th>Question</th>
                <th>Expected Answer</th>
                <th>Actual Answer</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(quizStates.questions).map(
                (questionNumber, index) => (
                  <tr key={questionNumber}>
                    <td className="text-center">{index + 1}</td>
                    <td>{quizStates.questions[questionNumber]}</td>
                    <td>{quizStates.expectedAnswers[questionNumber]}</td>
                    <td>{quizStates.actualAnswers[questionNumber] ?? "-"}</td>
                    <td>
                      {quizStates.expectedAnswers[questionNumber] ===
                      quizStates.actualAnswers[questionNumber]
                        ? 5
                        : 0}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="quiz-stats">
        <p>
          Total number of questions answered:{" "}
          <span className="text-bold">{totalQuestionsCount}</span>
        </p>
        <p>
          Number of questions answered correctly:{" "}
          <span className="text-bold">{correctAnswersCount}</span>
        </p>
        <p>
          Number of questions answered incorrectly:{" "}
          <span className="text-bold">{incorrectAnswersCount}</span>
        </p>
        <p>
          Percentage of questions answered correctly:{" "}
          <span className="text-bold">{percentageOfCorrectAnswers} %</span>
        </p>
        <p>
          Maximum marks: <span className="text-bold">{maximumMarks}</span>
        </p>
        <p>
          Obtained marks: <span className="text-bold">{obtainedMarks}</span>
        </p>

        <h3 className="h3">
          Verdict:{" "}
          {percentageOfCorrectAnswers === 100
            ? "Distinction"
            : percentageOfCorrectAnswers >= 90 &&
              percentageOfCorrectAnswers < 100
            ? "Excellent"
            : percentageOfCorrectAnswers >= 75 &&
              percentageOfCorrectAnswers < 90
            ? "Very Good"
            : percentageOfCorrectAnswers >= 50 &&
              percentageOfCorrectAnswers < 75
            ? "Satisfactory"
            : "Needs improvement"}
        </h3>
      </section>
    </main>
  );
}

export { Result };
