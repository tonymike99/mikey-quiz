import styles from "./Result.module.css";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useQuiz } from "../../hooks/context/index";

function Result() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Result");

  // ****************************************************************************************************

  // useQuiz
  const { questions, expectedAnswers, actualAnswers } = useQuiz();

  let marks = [];
  let totalQuestionsCount = Object.keys(questions).length;
  let correctAnswersCount = Object.keys(questions).reduce(
    (acc, cur) => (marks[cur] === 5 ? (acc += 1) : acc),
    0
  );
  let incorrectAnswersCount = totalQuestionsCount - correctAnswersCount;
  let maximumMarks = totalQuestionsCount * 5;
  let obtainedMarks = correctAnswersCount * 5;
  let percentageOfCorrectAnswers =
    (correctAnswersCount / totalQuestionsCount) * 10;

  // ****************************************************************************************************

  return (
    <main>
      <section>
        <h2 className="h2 text-center margin-bottom-2">Result Summary</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Expected Answer</th>
              <th>Actual Answer</th>
              <th>Marks</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(questions).map((question) => (
              <tr>
                <td>{questions[question]}</td>
                <td>{expectedAnswers[question]}</td>
                <td>{actualAnswers[question] ?? "-"}</td>
                <td>
                  {expectedAnswers[question] === actualAnswers[question]
                    ? (marks[question] = 5)
                    : (marks[question] = 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="quiz-stats">
        <p>Total number of questions answered: {totalQuestionsCount}</p>
        <p>Number of questions answered correctly: {correctAnswersCount}</p>
        <p>Number of questions answered incorrectly: {incorrectAnswersCount}</p>
        <p>
          Percentage of questions answered correctly:{" "}
          {percentageOfCorrectAnswers} %
        </p>
        <p>Maximum marks: {maximumMarks}</p>
        <p>Obtained marks: {obtainedMarks}</p>

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
