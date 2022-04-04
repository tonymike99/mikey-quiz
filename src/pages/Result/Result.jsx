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

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <h1 className="text-center margin-2">Result Summary</h1>

        <table class="styled-table">
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
                    : (marks[question] = -1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="quiz-stats">
          <h1>More Statistics</h1>
          <br />

          <p>Total number of questions: {Object.keys(questions).length}</p>
          <p>
            Number of correct answers:{" "}
            {Object.keys(questions).reduce(
              (acc, cur) => (marks[cur] === 5 ? (acc += 1) : acc),
              0
            )}
          </p>
          <p>
            Total marks:{" "}
            {Object.keys(questions).reduce(
              (acc, cur) => (acc += marks[cur]),
              0
            )}
          </p>
        </div>
      </main>
    </div>
  );
}

export { Result };
